import {Component} from '@angular/core';
import {ContentService} from '../../common/services/content.service';

import colorModule = require('color');
import platform = require('platform');

@Component({
    selector: 'ListsPage',
    templateUrl: 'pages/lists/lists.html',
    styleUrls: ['pages/lists/lists.css']
})
export class ListsPage {
    public style: string = 'light';
    public styleSelected: number = 0;
    private colorSelected: number = 0;
    private colors: any[];
    private films: any[];
    private isAndroid: boolean = platform.isAndroid;

    public constructor(private _contentService: ContentService) {
        this.colors = _contentService.getColors();
        this.films = _contentService.getFilms();
    }

    public changeCellBackground(args) {
        if (!this.isAndroid) {
            var cell = args.ios; //return UITableViewCell
            cell.backgroundColor = new colorModule.Color('0,0,0,0').ios;
        }
}

    public selectedColorChanged(args) {
        this.colorSelected = args.object.selectedIndex;
    }
}
