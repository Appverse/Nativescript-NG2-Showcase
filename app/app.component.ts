import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Page} from 'ui/page';

import {ContentService} from './common/services/content.service';

//USING PLUGIN: NATIVESCRIPT-MASTER-TECHNOLOGY (FOR APP EXIT BUTTON)
require('nativescript-master-technology');

@Component({
    selector: 'sc-app',
    providers: [ContentService],
    template: `<page-router-outlet></page-router-outlet>`
})

export class AppComponent {

    constructor(page: Page, private router: Router) {
        page.actionBarHidden = true;
        router.events.subscribe((e) => {
            console.log('[Route Event] - ' + e.toString());
        });
    }

}
