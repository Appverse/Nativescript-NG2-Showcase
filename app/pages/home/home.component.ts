import {Component} from "@angular/core";

var appSettings = require("application-settings");

@Component({
    selector: "HomePage",
    templateUrl: 'pages/home/home.html',
    styleUrls: ['pages/home/home.css']
})
export class HomePage {

    private firstLaunch: boolean;

    public constructor(){
        this.firstLaunch = appSettings.getBoolean("firstLaunch", true);
    }

    ngAfterViewInit(){
    }
}
