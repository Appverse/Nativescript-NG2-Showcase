import { Component, AfterViewInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import {Page} from 'ui/page';

@Component({
    moduleId: module.id,
    selector: 'sc-splash-screen',
    templateUrl: 'splash-screen.component.html',
    styleUrls: ['splash-screen.component.css'],
})
export class SplashScreenComponent implements AfterViewInit {

    constructor(private nav: RouterExtensions, page: Page) {
        page.className = 'app-color-primary';
    }

    ngAfterViewInit() {
        //Closing splash screen
        setTimeout(() => {
            this.nav.navigate(['/home/'], {
                clearHistory: true,
                transition: {
                    name: 'fade',
                    duration: 400,
                    curve: 'linear'
                }
            });
        }, 2000);
    }
}
