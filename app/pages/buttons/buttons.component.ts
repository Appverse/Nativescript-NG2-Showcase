import {Component} from '@angular/core';
import {ContentService} from '../../common/services/content.service';

@Component({
    moduleId: module.id,
    selector: 'sc-buttons-page',
    templateUrl: 'buttons.html',
    styleUrls: ['buttons.css']
})
export class ButtonsPage {
    private styleSelected: number = 0;
    private styles: any[];
    private rounded: boolean = false;

    public constructor(private _contentService: ContentService) {
        this.styles = _contentService.getStyles();
    }
    //Switch between default and round buttons
    public switchChange(args) {
        this.rounded = !this.rounded;
    }
    //Changes tyle selected
    public selectedIndexChanged(args) {
        this.styleSelected = args.object.selectedIndex;
    }

}
