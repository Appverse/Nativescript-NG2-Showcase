import {Component, ViewChild, ElementRef, EventEmitter, OnInit, AfterViewInit} from '@angular/core';
import dialogs = require('ui/dialogs');

var validator = require('email-validator');

@Component({
    moduleId: module.id,
    selector: 'sc-login-page',
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginPage implements OnInit, AfterViewInit {

    private email: string;
    private password: string;
    private passwordCheck: string;
    private isLogin: boolean = true;
    private emailEmitter = new EventEmitter<string>();
    private passwordEmitter = new EventEmitter<string>();
    private passwordCheckEmitter = new EventEmitter<string>();

    @ViewChild('modal') private modalRef: ElementRef;
    private modal;

    ngOnInit() {
        let instance = this;
        this.emailEmitter
            .subscribe(v=> {
                instance.email = v;
            });
        this.passwordEmitter
            .subscribe(v=> {
                instance.password = v;
            });
        this.passwordCheckEmitter
            .subscribe(v=> {
                instance.passwordCheck = v;
            });
    }

    ngAfterViewInit() {
        this.setNativeElements();
    }

    public login(email: string, password: string) {
        let loginSuccess: boolean;
        if(validator.validate(email)) {
            //CHECK CREDENTIALS HERE
            dialogs.alert('Email: ' + email + ' Password: ' + password).then(result => {
                console.log('Dialog result: ' + result);
            });
            loginSuccess = true;
        } else {
            dialogs.alert('Email is not valid').then(result => {
                console.log('Dialog result: ' + result);
            });
            loginSuccess = false;
        }
        return loginSuccess;
    }

    public signin() {
        if(this.isLogin) {
            this.toggle();
        } else {
            this.register(this.email, this.password, this.passwordCheck);
        }
    }

    public toggle() {
        this.modal.animate({
            opacity: 0,
            duration: 350,
        }).then(()=> {
            this.isLogin = !this.isLogin;
            this.modal.animate({
                opacity: 1,
                duration:350,
            });
        });
    }

    private register(email: string, password: string, passwordCheck: string) {
        let isEmailValid: boolean = validator.validate(email);
        let isPassValid: boolean = password.length > 7;
        let isPassDoubleChecked: boolean = password === passwordCheck;
        let registerSuccess: boolean;
        //CHECK FIELD RULES HERE
        if(isEmailValid && isPassDoubleChecked && isPassValid) {
            dialogs.confirm('Email: ' + email + ' Password: ' + password + ' Password check: ' + passwordCheck).then(result => {
                console.log('Dialog result: ' + result);
                if(result) {
                    this.toggle();
                }
            });
            registerSuccess = true;
        } else {
            dialogs.alert(this.alertMessage(isEmailValid, isPassValid, isPassDoubleChecked)).then(result => {
                console.log('Dialog result: ' + result);
            });
            registerSuccess = false;
        }
        return registerSuccess;
    }

    private alertMessage(isEmailValid: boolean, isPassValid: boolean, isPassDoubleChecked: boolean): string {
        let msg = '';
        if (!isEmailValid) msg += 'Email is not valid. ' ;
        if (!isPassValid) msg += 'Password is too short. ';
        if (!isPassDoubleChecked) msg += 'Passwords don\'t match.';
        return msg;
    }

    private setNativeElements() {
        this.modal=this.modalRef.nativeElement;
    }
}
