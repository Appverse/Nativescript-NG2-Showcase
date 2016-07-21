import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges} from '@angular/core';
import {RouteConfig, RouterOutlet, Router} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {Page} from "ui/page";

@Component({
    selector: 'side-drawer',
    templateUrl: 'common/components/side-drawer/side-drawer.component.html',
    styleUrls: ['common/components/side-drawer/side-drawer.component.css']
})
export class SideDrawerComponent implements OnChanges{

    private subToggled: boolean = false;
    private animationDuration: number = 200;
    private subItems: Array<any> = [];
    @Input() public toggled: boolean;
    @Output() close = new EventEmitter();
    @Output() exit = new EventEmitter();
    @Output() navigate = new EventEmitter();

    constructor(private _router: Router, private page: Page) { }

    ngAfterViewInit() {
        this.setNativeElements();
        this.page.getViewById("home").className = "app-color-quaternary";
    }

    ngOnChanges(){
        if(this.toggled){
            this.openSideDrawer()
        } else{
            if(this.sideDrawer){
                this.closeSideDrawer();
            }
        }
    }

    //Menu item tap
    public itemTap(args,subItems: Array<any>, pageName: string){
        if(subItems){
            if(this.subToggled){
                this.closeSubSideDrawer().then(()=>{
                    if(this.subItems != subItems){
                        this.subItems = subItems;
                        this.openSubSideDrawer();
                    }
                })
            } else{
                this.subItems = subItems;
                this.openSubSideDrawer();
            }
        } else{
            this.navItemTap(args,pageName)
        }
    }

    //Menu sub item tap
    public navItemTap(args,pageName: string){
        if(pageName!="Exit"){
            let lastButton = this.page.getViewById(this._router.currentInstruction.urlPath.toLocaleLowerCase())
            console.log("lastButton",lastButton,"pageName",this._router.currentInstruction.urlPath.toLocaleLowerCase())
            if(lastButton){
                lastButton.className = lastButton.parent.id == "menuButton"? "app-color-secondary" : "app-color-tertiary";
            }
            args.object.className = "app-color-quaternary";
            this.close.emit(false)
            console.log("from", this._router.currentInstruction.urlPath, "to", pageName);
            if(pageName.toLocaleLowerCase()!==this._router.currentInstruction.urlPath.toLocaleLowerCase()){
                this.navigate.emit(pageName);
            }
        } else {
            this.exit.emit(false);
        }
    }

    //Open side drawer animation
    public openSideDrawer(){
        console.log("before open sideDrawerClassName", this.sideDrawer.className)
        this.backDrop.className = "backdrop opacityZeroToPointThree";
        this.sideDrawer.className = "side-drawer app-color-secondary openSideDrawer"
        
        console.log("after open sideDrawerClassName", this.sideDrawer.className)
    }

    //Close side drawer animation
    public closeSideDrawer(){
        console.log("before close sideDrawerClassName", this.sideDrawer.className)
        this.closeSubSideDrawer();
        this.backDrop.className = "backdrop opacityPointThreeToZero";
        this.sideDrawer.className = "side-drawer app-color-secondary closeSideDrawer"
        console.log("after close sideDrawerClassName", this.sideDrawer.className)
        this.subToggled = false;
    }

    //Close sub side drawer animation
    public closeSubSideDrawer(then?): Promise<any>{
        this.subToggled = false;
        return new Promise((resolve, reject) => {
            //Animation
            this.subSideDrawer.animate({
                duration: this.animationDuration,
                translate: {x: 0, y: 0},
                curve: "easeIn"
            }).then(()=>{
                resolve();
            })
        });
    }

    //Open sub side drawer animation
    public openSubSideDrawer(){
        this.subToggled = true;
        this.subSideDrawer.animate({
            duration: this.animationDuration,
            translate: {x: 260, y: 0},
            curve: "easeOut"
        });
        setTimeout(()=>{
            let lastButton = this.page.getViewById(this._router.currentInstruction.urlPath.toLocaleLowerCase())
            if(lastButton){
                lastButton.className = "app-color-quaternary";
            }
        })
    }

    //Menu categories
    private sideDrawerCategories: Array<any> = [
        {name: "Home", icon: "\uf175"},
        {name: "Components", icon: "\uf328", subItems: [
            {name: "Buttons", page: "Buttons", icon: "\uf155"},
            {name: "Text", page: "Text", icon: "\uf242"},
            {name: "Lists", page: "Lists", icon: "\uf247"},
            {name: "Pickers", page: "Pickers", icon: "\uf30c"},
            {name: "Layouts", page: "Layouts", icon: "\uf31c"},
            {name: "Selectors", page: "Selectors", icon: "\uf26f"},
            {name: "Indicators", page: "Indicators", icon: "\uf1b8"},
            {name: "Images", page: "Images", icon: "\uf17f"},
            {name: "Views", page: "Views", icon: "\uf279"},
            {name: "Dialogs", page: "Dialogs", icon: "\uf14b"},
        ]},
        {name: "Hardware", icon: "\uf2cc", subItems: [
            {name: "Camera", page: "Camera", icon: "\uf28c"},
            {name: "Accelerometer", page: "Accelerometer", icon: "\uf101"},
            {name: "Location", page: "Location", icon: "\uf299"}
        ]},
        {name: "Examples", icon: "\uf318", subItems: [
            {name: "Login", page: "Login", icon: "\uf1cc"},
            {name: "Table", page: "Table", icon: "\uf22b"},
            {name: "Contacts", page: "Contacts", icon: "\uf20b"},
            {name: "CodeScanner", page: "CodeScanner", icon: "\uf16d"},
            {name: "OCR", page: "OCR", icon: "\uf15c"},
            {name: "Database", page: "Database", icon: "\uf18c"},
            {name: "Animations", page: "Animations", icon: "\uf1e1"},
            {name: "Charts", page: "Charts", icon: "\uf131"},
            {name: "SignaturePad", page: "SignaturePad", icon: "\uf11f"}
        ]},
        {name: "Settings", icon: "\uf1c6"},
        {name: "Exit", icon: "\uf136"},
    ]
    // Native elements set
    public setNativeElements(){
        this.absolute=this.absoluteRef.nativeElement;
        this.backDrop=this.backDropRef.nativeElement;
        this.sideDrawer=this.sideDrawerRef.nativeElement;
        this.subSideDrawer=this.subSideDrawerRef.nativeElement;
    }

    //VIEW CHILDS
    @ViewChild('sideDrawer') sideDrawerRef: ElementRef;
    private sideDrawer;
    @ViewChild('subSideDrawer') subSideDrawerRef: ElementRef;
    private subSideDrawer;
    @ViewChild('absolute') absoluteRef: ElementRef;
    private absolute;
    @ViewChild('backDrop') backDropRef: ElementRef;
    private backDrop;
}
