import {Component} from '@angular/core';

var appSettings = require('application-settings');

@Component({
    moduleId: module.id,
    selector: 'sc-home-page',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})
export class HomePage {

    private firstLaunch: boolean;

    public constructor() {
        this.firstLaunch = appSettings.getBoolean('firstLaunch', true);
    }
}
