import {Component} from '@angular/core';
import {ContentService} from '../../common/services/content.service';

//USING PLUGIN: NATIVESCRIPT-THEMES
var themes = require('nativescript-themes');

@Component({
    moduleId: module.id,
    selector: 'sc-settings-page',
    templateUrl: 'settings.html',
    styleUrls: ['settings.css']
})
export class SettingsPage {

    private themes: any[];

    constructor(private _contentService: ContentService) {
        this.themes = _contentService.getThemes();
    }

    public applyTheme(theme: string) {
        themes.applyTheme(theme);
    }
}
