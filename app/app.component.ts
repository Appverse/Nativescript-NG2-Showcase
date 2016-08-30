import {Component, ViewChild, ElementRef, NgZone, animate, trigger, state, style, transition, AfterViewInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import {Page} from 'ui/page';

import {ContentService} from './common/services/content.service';
//COMPONENTS IMPORT
import {SideDrawerComponent} from './common/components/side-drawer/side-drawer.component';
import {SplashScreenComponent} from './common/components/splash-screen/splash-screen.component';
import {ExitModalComponent} from './common/components/exit-modal/exit-modal.component';

let themes = require( 'nativescript-themes' );
let absoluteLayout = require('ui/layouts/absolute-layout');
var application = require('application');
var appSettings = require('application-settings');

//USING PLUGIN: NATIVESCRIPT-MASTER-TECHNOLOGY (FOR APP EXIT BUTTON)
require( 'nativescript-master-technology' );

@Component({
    selector: 'my-app',
    directives: [SideDrawerComponent, SplashScreenComponent, ExitModalComponent],
    providers: [ContentService],
    templateUrl: './app.html',
    animations: [
        trigger('state', [
            state('inactive', style({ transform: 'rotate(0)' })),
            state('active', style({ transform: 'rotate(90)' })),
            transition('inactive => active', [ animate('200ms ease-out') ]),
            transition('active => inactive', [ animate('200ms ease-out') ]),
        ])
    ]
})

export class AppComponent implements AfterViewInit {

    private exit: boolean = false;
    private toggled: boolean = false;
    private splashScreen: boolean = true;

    constructor(private page: Page, private nav: RouterExtensions) {
        this.page.actionBarHidden = true;
        if (application.android) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, zonedCallback(this.backEvent.bind(this)));
        }
    }

    ngAfterViewInit() {
        this.setNativeElements();
        setTimeout(()=> {this.splashScreen = false;}, 4000);
    }

    //Toggle side drawer
    public toggleSideDrawer() {
        if(!this.toggled) {
            this.openSideDrawer();
        }
        this.toggled = !this.toggled;
    }

    //Router navigation transition
    public navigationTransition(page) {
        this.router.animate({
            opacity: 0,
            duration: 250
        }).then(()=> {
            this.nav.navigate([page]);
            this.router.animate({
                opacity: 1,
                duration: 250
            });
        });
    }

    //Open side drawer animation
    public openSideDrawer() {
        appSettings.setBoolean('firstLaunch', false);
    }

    public toggleExitModal() {
        this.exit = !this.exit;
    }

    public backEvent(args) {
        this.toggleExitModal.apply(this);
        args.cancel = true;
    }

    // Native elements set
    public setNativeElements() {
        this.router=this.routerRef.nativeElement;
        this.menuIcon=this.menuIconRef.nativeElement;
    }

    //VIEW CHILDS
    @ViewChild('menuIcon') menuIconRef: ElementRef;
    private menuIcon;
    @ViewChild('router') routerRef: ElementRef;
    private router;
}
