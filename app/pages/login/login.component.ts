import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import dialogs = require('ui/dialogs');

var validator = require('email-validator');

@Component({
    moduleId: module.id,
    selector: 'sc-login-page',
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginPage implements AfterViewInit {

    private model : {email: string, password: string, passwordCheck: string} = {email: '', password: '', passwordCheck: ''};
    private isLogin: boolean = true;

    @ViewChild('modal') private modalRef: ElementRef;
    private modal;

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
            this.register(this.model.email, this.model.password, this.model.passwordCheck);
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
