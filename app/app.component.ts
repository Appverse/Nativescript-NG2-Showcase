import {Component, ViewChild, ElementRef} from "@angular/core";
import {Page} from "ui/page";
import colorModule = require("color");
import {RouteConfig, RouterOutlet, Router} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {ContentService} from "./common/services/content.service";
import {IndicatorsPage} from "./pages/indicators/indicators.component";
import {SelectorsPage} from "./pages/selectors/selectors.component";
import {ContactsPage} from "./pages/contacts/contacts.component";
import {ButtonsPage} from "./pages/buttons/buttons.component";
import {PickersPage} from "./pages/pickers/pickers.component";
import {LayoutsPage} from "./pages/layouts/layouts.component";
import {DialogsPage} from "./pages/dialogs/dialogs.component";
import {ImagesPage} from "./pages/images/images.component";
import {ViewsPage} from "./pages/views/views.component";
import {LoginPage} from "./pages/login/login.component";
import {TablePage} from "./pages/table/table.component";
import {ListsPage} from "./pages/lists/lists.component";
import {HomePage} from "./pages/home/home.component";
import {TextPage} from "./pages/text/text.component";

let Color = colorModule.Color;
let themes = require( "nativescript-themes" );
let absoluteLayout = require("ui/layouts/absolute-layout");

@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES, RouterOutlet],
    providers: [NS_ROUTER_PROVIDERS, ContentService],
    templateUrl: "./app.html"
})

@RouteConfig([
    { path: "/home", component: HomePage, name: "Home", useAsDefault: true },
    { path: "/buttons", component: ButtonsPage, name: "Buttons" },
    { path: "/text", component: TextPage, name: "Text" },
    { path: "/lists", component: ListsPage, name: "Lists" },
    { path: "/pickers", component: PickersPage, name: "Pickers" },
    { path: "/layouts", component: LayoutsPage, name: "Layouts" },
    { path: "/selectors", component: SelectorsPage, name: "Selectors" },
    { path: "/indicators", component: IndicatorsPage, name: "Indicators" },
    { path: "/images", component: ImagesPage, name: "Images" },
    { path: "/views", component: ViewsPage, name: "Views" },
    { path: "/dialogs", component: DialogsPage, name: "Dialogs" },
    { path: "/login", component: LoginPage, name: "Login" },
    { path: "/contacts", component: ContactsPage, name: "Contacts" },
    { path: "/table", component: TablePage, name: "Table" }
])

export class AppComponent {
    private toggled: boolean = false;
    private animationDuration: number = 200;
    
    constructor(private page: Page, private _router: Router){
        this.page.actionBarHidden = true;
    }
    
    ngAfterViewInit(){
        this.setNativeElements();
        this.backDrop.opacity = 0;
        this.page.getViewById("home").className = "app-color-selected";
    }

    public toggleSideDrawer(){
        if(this.toggled){
            this.closeSideDrawer();
        } else {
            this.openSideDrawer();
        }
    }

    public subItemTap(args,page: string){
        this.page.getViewById(this._router.currentInstruction.urlPath).className = "app-color-light";
        args.object.className = "app-color-selected";
        this.toggleSideDrawer();
        console.log("from", this._router.currentInstruction.urlPath, "to", page);
        if(page.toLocaleLowerCase()!==this._router.currentInstruction.urlPath.toLocaleLowerCase()){
            this.navigationTransition(page)
        }
    }

    public navigationTransition(page){
        this.router.animate({
            opacity: 0,
            duration: this.animationDuration
        }).then(()=>{
            this._router.navigate([page]);
            this.router.animate({
                opacity: 1,
                duration: this.animationDuration
            })
        });
        
    }

    public openSideDrawer(){
        this.toggled = !this.toggled;
        this.backDrop.animate({
            duration:this.animationDuration,
            opacity: .3,
        })
        this.menuIcon.animate({
            duration: this.animationDuration,
            rotate: 90,
            curve: "easeIn"
        });
        this.router.animate({
            duration: this.animationDuration,
            translate: {x: 130, y: 0},
            curve: "easeIn"
        });
        this.sideDrawer.animate({
            duration: this.animationDuration,
            translate: {x: 130, y: 0},
            curve: "easeIn"
        });
    }

    public closeSideDrawer(){
        this.backDrop.animate({
            duration:this.animationDuration,
            opacity: 0,
        })
        this.menuIcon.animate({
            duration:this.animationDuration,
            rotate: 0,
            curve: "easeIn"
        })
        this.router.animate({
            duration: this.animationDuration,
            translate: {x: 0, y: 0},
            curve: "easeIn"
        })
        this.sideDrawer.animate({
            duration: this.animationDuration,
            translate: {x: 0, y: 0},
            curve: "easeIn"
        }).then(()=>{
            this.sideDrawer.translateX = 0;
            this.toggled = !this.toggled;
        }); 
    }

    public setNativeElements(){
        this.router=this.routerRef.nativeElement;
        this.backDrop=this.backDropRef.nativeElement;
        this.absolute=this.absoluteRef.nativeElement;
        this.menuIcon=this.menuIconRef.nativeElement;
        this.sideDrawer=this.sideDrawerRef.nativeElement;
    }

    private sideDrawerCategories: Array<any> = [
        {name: "Main", subItems: [
            {name: "Home", page: "Home", icon: "\uf175"}
        ]},
        {name: "Components", subItems: [
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
        {name: " Examples", subItems: [
            {name: "Login", page: "Login", icon: "\uf1cc"},
            {name: "Table", page: "Table", icon: "\uf22b"},
            {name: "Contacts", page: "Contacts", icon: "\uf20b"},
        ]},
        {name: "Other", subItems: [
            {name: "Settings", page: "Settings", icon: "\uf1c6"},
            {name: "Exit", page: "Exit", icon: "\uf136"},
        ]}
    ]

    //VIEW CHILDS
    @ViewChild('sideDrawer') sideDrawerRef: ElementRef;
    private sideDrawer;
    @ViewChild('backDrop') backDropRef: ElementRef;
    private backDrop;
    @ViewChild('absolute') absoluteRef: ElementRef;
    private absolute;
    @ViewChild('menuIcon') menuIconRef: ElementRef;
    private menuIcon;
    @ViewChild('router') routerRef: ElementRef;
    private router;
}
