import {Component, ViewChild, ElementRef, EventEmitter} from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: "LoginPage",
    templateUrl: 'pages/login/login.html',
    styleUrls: ['pages/login/login.css']
})
export class LoginPage {

    private username: string;
    private email: string;
    private password: string;
    private passwordCheck: string;
    private isLogin: boolean = true;
    private usernameEmitter = new EventEmitter<string>();
    private emailEmitter = new EventEmitter<string>();
    private passwordEmitter = new EventEmitter<string>();
    private passwordCheckEmitter = new EventEmitter<string>();

    public constructor(){
    }

    ngOnInit() {
        let instance = this;
        this.usernameEmitter
            .subscribe(v=>{
                instance.username = v;
            });
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
        //CHECK CREDENTIALS HERE
        dialogs.alert("Username: " + this.username + " Password: " + this.password).then(result => {
            console.log("Dialog result: " + result);
        });
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
        //CHECK FIELD RULES HERE
        dialogs.confirm("Username: " + this.username + " Email: " + this.email + " Password: " + this.password + " Password check: " + this.passwordCheck).then(result => {
            console.log("Dialog result: " + result);
            if(result){
                this.toogle();
            }
        });
    }

    public setNativeElements(){
        this.modal=this.modalRef.nativeElement;
    }

    @ViewChild('modal') modalRef: ElementRef;
    private modal;
}