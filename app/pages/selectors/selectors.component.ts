import {Component} from '@angular/core';
import {ContentService} from '../../common/services/content.service';

@Component({
    moduleId: module.id,
    selector: 'sc-selectors-page',
    templateUrl: 'selectors.html',
    styleUrls: ['selectors.css']
})
export class SelectorsPage {

    private styles: any[];

    public constructor(private _contentService: ContentService) {
        this.styles = _contentService.getStyles();
    }
}
