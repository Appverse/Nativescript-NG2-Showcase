import {Component} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "SelectorsPage",
    templateUrl: 'pages/selectors/selectors.html',
    styleUrls: ['pages/selectors/selectors.css']
})
export class SelectorsPage {

    private styles: any[];

    public constructor(private _contentService: ContentService){
        this.styles = _contentService.getStyles();
    }
}