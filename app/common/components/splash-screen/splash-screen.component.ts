import { Component, AfterViewInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
@Component({
    selector: 'sc-splash-screen',
    templateUrl: 'common/components/splash-screen/splash-screen.component.html',
})
export class SplashScreenComponent implements AfterViewInit {

    constructor(private nav: RouterExtensions) { }

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
