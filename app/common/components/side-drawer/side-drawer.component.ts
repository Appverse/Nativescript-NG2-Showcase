import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, AfterViewInit, animate, trigger, state, style, transition} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {RouterExtensions} from 'nativescript-angular/router';
import {Page} from 'ui/page';

@Component({
    selector: 'sc-side-drawer',
    templateUrl: 'common/components/side-drawer/side-drawer.component.html',
    animations: [
        trigger('state', [
            state('inactiveSD', style({ transform: 'translateX(0)' })),
            state('activeSD', style({ transform: 'translateX(130)' })),
            transition('inactiveSD => activeSD', [animate('200ms ease-out')]),
            transition('activeSD => inactiveSD', [animate('200ms ease-out')]),
            state('inactiveBD', style({ opacity: '0' })),
            state('activeBD', style({ opacity: '.3' })),
            transition('inactiveBD => activeBD', [animate('200ms ease-out')]),
            transition('activeBD => inactiveBD', [animate('200ms ease-out')]),
            state('inactiveSSD', style({ transform: 'translateX(0)' })),
            state('activeSSD', style({ transform: 'translateX(260)' })),
            transition('inactiveSSD => activeSSD', [animate('200ms ease-out')]),
            transition('activeSSD => inactiveSSD', [animate('200ms ease-out')]),
        ])
    ]
})
export class SideDrawerComponent implements OnInit, AfterViewInit {

    @Input() public toggled: boolean;
    @Output() close = new EventEmitter();
    @Output() exit = new EventEmitter();
    @Output() navigate = new EventEmitter();

    //Menu categories
    sideDrawerCategories: Array<any> = [
        { name: 'Home', icon: '\uf175', page: 'home' },
        {
            name: 'Components', icon: '\uf328', subItems: [
                { name: 'Buttons', page: 'buttons', icon: '\uf155' },
                { name: 'Text', page: 'text', icon: '\uf242' },
                { name: 'Lists', page: 'lists', icon: '\uf247' },
                { name: 'Pickers', page: 'pickers', icon: '\uf30c' },
                { name: 'Layouts', page: 'layouts', icon: '\uf31c' },
                { name: 'Selectors', page: 'selectors', icon: '\uf26f' },
                { name: 'Indicators', page: 'indicators', icon: '\uf1b8' },
                { name: 'Images', page: 'images', icon: '\uf17f' },
                { name: 'Views', page: 'views', icon: '\uf279' },
                { name: 'Dialogs', page: 'dialogs', icon: '\uf14b' },
            ]
        },
        {
            name: 'Hardware', icon: '\uf2cc', subItems: [
                { name: 'Camera', page: 'camera', icon: '\uf28c' },
                { name: 'Accelerometer', page: 'accelerometer', icon: '\uf101' },
                { name: 'Location', page: 'location', icon: '\uf299' }
            ]
        },
        {
            name: 'Examples', icon: '\uf318', subItems: [
                { name: 'Login', page: 'login', icon: '\uf1cc' },
                { name: 'Table', page: 'table', icon: '\uf22b' },
                { name: 'Contacts', page: 'contacts', icon: '\uf20b' },
                { name: 'CodeScanner', page: 'codescanner', icon: '\uf16d' },
                { name: 'Database', page: 'database', icon: '\uf18c' },
                { name: 'Animations', page: 'animations', icon: '\uf1e1' },
                { name: 'Charts', page: 'charts', icon: '\uf131' },
                { name: 'Tasks', page: 'tasks', icon: '\uf269' },
                { name: 'SignaturePad', page: 'signaturepad', icon: '\uf11f' }
            ]
        },
        { name: 'Settings', icon: '\uf1c6', page: 'settings' },
        // { name: 'Exit', icon: '\uf136', page: 'exit' },
    ];
    private subToggled: boolean = false;
    private animationDuration: number = 200;
    private subItems: Array<any> = [];

    constructor(private router: Router, private page: Page) { }


    ngOnInit() {
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.closeSubSideDrawer();
            }
        });
    }

    ngAfterViewInit() {
        this.setNativeElements();
    }

    //Menu item tap
    public itemTap(args, subItems: Array<any>, pageName: string) {
        if (subItems) {
            if (this.subToggled) {
                this.closeSubSideDrawer().then(() => {
                    if (this.subItems !== subItems) {
                        this.subItems = subItems;
                        this.openSubSideDrawer();
                    }
                });
            } else {
                this.subItems = subItems;
                this.openSubSideDrawer();
            }
        } else {
            this.navItemTap(args, pageName);
        }
    }

    //Menu sub item tap
    public navItemTap(args, pageName: string) {
        if (pageName !== 'exit') {
            this.router.navigate(['home/', pageName]);
        } else {
            this.exit.emit(false);
        }
    }

    //Close side drawer animation
    public closeSideDrawer() {
        this.closeSubSideDrawer();
        this.subToggled = false;
    }

    //Close sub side drawer animation
    public closeSubSideDrawer(then?): Promise<any> {
        this.subToggled = false;
        return new Promise((resolve, reject) => {
            //Animation
            this.subSideDrawer.animate({
                duration: this.animationDuration,
                translate: { x: 0, y: 0 },
                curve: 'easeIn'
            }).then(() => {
                resolve();
            });
        });
    }

    //Open sub side drawer animation
    public openSubSideDrawer() {
        this.subToggled = true;
        this.subSideDrawer.animate({
            duration: this.animationDuration,
            translate: { x: 130, y: 0 },
            curve: 'easeOut'
        });
        setTimeout(() => {
            let lastButton = this.page.getViewById(this.router.url.toLocaleLowerCase());
            if (lastButton) {
                lastButton.className = 'app-color-quaternary';
            }
        });
    }

    // Native elements set
    public setNativeElements() {
        this.sideDrawer = this.sideDrawerRef.nativeElement;
        this.subSideDrawer = this.subSideDrawerRef.nativeElement;
    }

    //VIEW CHILDS
    @ViewChild('sideDrawer') sideDrawerRef: ElementRef;
    private sideDrawer;
    @ViewChild('subSideDrawer') subSideDrawerRef: ElementRef;
    private subSideDrawer;
}
