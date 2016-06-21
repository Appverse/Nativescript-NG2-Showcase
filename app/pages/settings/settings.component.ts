import {Component} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

//USING PLUGIN: NATIVESCRIPT-THEMES
var themes = require('nativescript-themes');

@Component({
    selector: "SettingsPage",
    templateUrl: 'pages/settings/settings.html',
    styleUrls: ['pages/settings/settings.css']
})
export class SettingsPage {

    private themes: any[];

    public constructor(private _contentService: ContentService){
        this.themes = _contentService.getThemes();
    }

    public applyTheme(theme: string){
        themes.applyTheme(theme);
    }
}