import {Component, ViewChild, ElementRef, EventEmitter} from "@angular/core";
import dialogs = require("ui/dialogs");

var validator = require("email-validator");

@Component({
    selector: "LoginPage",
    templateUrl: 'pages/login/login.html',
    styleUrls: ['pages/login/login.css']
})
export class LoginPage {

    private email: string;
    private password: string;
    private passwordCheck: string;
    private isLogin: boolean = true;
    private emailEmitter = new EventEmitter<string>();
    private passwordEmitter = new EventEmitter<string>();
    private passwordCheckEmitter = new EventEmitter<string>();
    private loginSuccess: boolean = false;

    public constructor(){
    }

    ngOnInit() {
        let instance = this;
        this.emailEmitter
            .subscribe(v=>{
                instance.email = v;
            });
        this.passwordEmitter
            .subscribe(v=>{
                instance.password = v;
            });
        this.passwordCheckEmitter
            .subscribe(v=>{
                instance.passwordCheck = v;
            });
    }

    ngAfterViewInit(){
        this.setNativeElements();
    }

    public login(){
        if(validator.validate(this.email)){
            //CHECK CREDENTIALS HERE
            this.loginSuccess = true;
            dialogs.alert("Email: " + this.email + " Password: " + this.password).then(result => {
                console.log("Dialog result: " + result);
            });
        } else{
            dialogs.alert("Email is not valid").then(result => {
                console.log("Dialog result: " + result);
            });
        }
        
    }

    public signin(){
        if(this.isLogin){
            this.toogle();
        } else {
            this.register();
        }
    }

    public toogle(){
        this.modal.animate({
            opacity: 0,
            duration: 350,
        }).then(()=>{
            this.isLogin = !this.isLogin;
            this.modal.animate({
                opacity: 1,
                duration:350,
            })
        })
    }

    public register(){
        let isEmailValid: boolean = validator.validate(this.email);
        let isPassValid: boolean = this.password.length > 7;
        let isPassDoubleChecked: boolean = this.password === this.passwordCheck; 
        //CHECK FIELD RULES HERE
        if(isEmailValid && isPassDoubleChecked && isPassValid){
            dialogs.confirm("Email: " + this.email + " Password: " + this.password + " Password check: " + this.passwordCheck).then(result => {
                console.log("Dialog result: " + result);
                if(result){
                    this.toogle();
                }
            });
        } else{
            dialogs.alert(this.alertMessage(isEmailValid, isPassValid, isPassDoubleChecked)).then(result => {
                console.log("Dialog result: " + result);
            });
        }
        
    }

    public alertMessage(isEmailValid: boolean, isPassValid: boolean, isPassDoubleChecked: boolean): string{
        let msg = "";
        !isEmailValid ? msg += "Email is not valid. " : null;
        !isPassValid ? msg += "Password is too short. " : null;
        !isPassDoubleChecked ? msg += "Passwords don't match." : null;
        return msg;
    }

    public setNativeElements(){
        this.modal=this.modalRef.nativeElement;
    }

    @ViewChild('modal') modalRef: ElementRef;
    private modal;
}