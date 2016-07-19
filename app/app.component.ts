import {Component, ViewChild, ElementRef, NgZone} from "@angular/core";
import {Page} from "ui/page";
import {RouteConfig, RouterOutlet, Router} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {ContentService} from "./common/services/content.service";
import {SideDrawerComponent} from './common/components/side-drawer/side-drawer.component'
import {SplashScreenComponent} from './common/components/splash-screen/splash-screen.component'
import {ExitModalComponent} from './common/components/exit-modal/exit-modal.component'
//PAGE CLASSES IMPORT
import {AccelerometerPage} from "./pages/accelerometer/accelerometer.component";
import {SignaturePadPage} from "./pages/signaturepad/signaturepad.component";
import {CodeScannerPage} from "./pages/codescanner/codescanner.component";
import {IndicatorsPage} from "./pages/indicators/indicators.component";
import {AnimationsPage} from "./pages/animations/animations.component";
import {SelectorsPage} from "./pages/selectors/selectors.component";
import {ContactsPage} from "./pages/contacts/contacts.component";
import {SettingsPage} from "./pages/settings/settings.component";
import {DatabasePage} from "./pages/database/database.component";
import {LocationPage} from "./pages/location/location.component";
import {ButtonsPage} from "./pages/buttons/buttons.component";
import {PickersPage} from "./pages/pickers/pickers.component";
import {LayoutsPage} from "./pages/layouts/layouts.component";
import {DialogsPage} from "./pages/dialogs/dialogs.component";
import {ImagesPage} from "./pages/images/images.component";
import {CameraPage} from "./pages/camera/camera.component";
import {ChartsPage} from "./pages/charts/charts.component";
import {ViewsPage} from "./pages/views/views.component";
import {LoginPage} from "./pages/login/login.component";
import {TablePage} from "./pages/table/table.component";
import {ListsPage} from "./pages/lists/lists.component";
import {HomePage} from "./pages/home/home.component";
import {TextPage} from "./pages/text/text.component";
import {OCRPage} from "./pages/ocr/ocr.component";

let themes = require( "nativescript-themes" );
let absoluteLayout = require("ui/layouts/absolute-layout");
var application = require('application');

//USING PLUGIN: NATIVESCRIPT-MASTER-TECHNOLOGY (FOR APP EXIT BUTTON)
require( "nativescript-master-technology" );

@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES, RouterOutlet, SideDrawerComponent, SplashScreenComponent, ExitModalComponent],
    providers: [NS_ROUTER_PROVIDERS, ContentService],
    templateUrl: "./app.html"
})
//RouteConfig containing the route for all pages
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
    { path: "/table", component: TablePage, name: "Table" },
    { path: "/settings", component: SettingsPage, name: "Settings" },
    { path: "/database", component: DatabasePage, name: "Database" },
    { path: "/camera", component: CameraPage, name: "Camera" },
    { path: "/codescanner", component:CodeScannerPage, name: "CodeScanner" },
    { path: "/signaturepad", component:SignaturePadPage, name: "SignaturePad" },
    { path: "/ocr", component:OCRPage, name: "OCR" },
    { path: "/location", component:LocationPage, name: "Location" },
    { path: "/Charts", component:ChartsPage, name: "Charts" },
    { path: "/accelerometer", component:AccelerometerPage, name: "Accelerometer" },
    { path: "/animations", component: AnimationsPage, name: "Animations" }
])

export class AppComponent {

    private exit: boolean = false;
    private toggled: boolean = false;
    private splashScreen: boolean = true;
    
    constructor(private page: Page, private _router: Router, private _ngZone: NgZone){
        this.page.actionBarHidden = true;
        if (application.android) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, this.backEvent.bind(this))
        }
    }
    
    ngAfterViewInit(){
        this.setNativeElements();
        this.backDrop.opacity = 0;
        setTimeout(()=>{this.splashScreen = false}, 3000)
    }

    //Toggle side drawer
    public toggleSideDrawer(){
        if(this.toggled){
            this.closeSideDrawer();
        } else {
            this.openSideDrawer();
        }
        this.toggled = !this.toggled;
    }

    //Router navigation transition
    public navigationTransition(page){
        this.router.animate({
            opacity: 0,
            duration: 250
        }).then(()=>{
            this._router.navigate([page]);
            this.router.animate({
                opacity: 1,
                duration: 250
            })
        });
    }

    //Open side drawer animation
    public openSideDrawer(){
        this.backDrop.className = "backdrop opacityZeroToPointThree";
        this.menuIcon.className = "material-icon icon rotate90right";
    }

    //Close side drawer animation
    public closeSideDrawer(){
        this.backDrop.className = "backdrop opacityPointThreeToZero";
        this.menuIcon.className = "material-icon icon rotate90left";
    }

    public toggleExitModal(){
        this.exit = !this.exit;
    }

    public backEvent(args) {
        this._ngZone.run(this.toggleExitModal.bind(this));
        args.cancel = true;
    }

    // Native elements set
    public setNativeElements(){
        this.router=this.routerRef.nativeElement;
        this.backDrop=this.backDropRef.nativeElement;
        this.menuIcon=this.menuIconRef.nativeElement;
    }

    //VIEW CHILDS
    @ViewChild('backDrop') backDropRef: ElementRef;
    private backDrop;
    @ViewChild('menuIcon') menuIconRef: ElementRef;
    private menuIcon;
    @ViewChild('router') routerRef: ElementRef;
    private router;
}
