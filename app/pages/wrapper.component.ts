// angular
import {Component, ViewChild, ChangeDetectorRef, OnInit, AfterViewInit, trigger, style, animate, state, transition} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

// nativescript
import {RadSideDrawerComponent, SideDrawerType} from 'nativescript-telerik-ui-pro/sidedrawer/angular';
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui-pro/sidedrawer';
import {SideDrawerComponent} from '../common/components/side-drawer/side-drawer.component';
import {ExitModalComponent} from '../common/components/exit-modal/exit-modal.component';
import {Page} from 'ui/page';
var application = require('application');

@Component({
    moduleId: module.id,
    selector: 'sc-wrapper',
    templateUrl: 'wrapper.component.html',
    directives: [SideDrawerComponent, ExitModalComponent],
    animations: [
        trigger('state', [
            state('inactive', style({ transform: 'rotate(0)' })),
            state('active', style({ transform: 'rotate(90)' })),
            transition('inactive => active', [animate('200ms ease-out')]),
            transition('active => inactive', [animate('200ms ease-out')]),
        ])
    ]
})
export class WrapperComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    private drawer: SideDrawerType;

    constructor(
        private page: Page,
        private changeDetectionRef: ChangeDetectorRef,
        private router: Router) {
        page.actionBarHidden = false;
        if (application.android) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, zonedCallback(this.backEvent.bind(this)));
        }
        page.on('loaded', this.onLoaded, this);
    }

    public get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    public toggle() {
        this.drawer.toggleDrawerState();
    }

    public onLoaded(args) {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    ngOnInit() {
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.drawer.closeDrawer();
            }
        });
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    }

    public backEvent(args) {
       this.drawer.closeDrawer();
        args.cancel = true;
    }
}
