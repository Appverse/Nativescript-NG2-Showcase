import {Component} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "IndicatorsPage",
    templateUrl: 'pages/indicators/indicators.html',
    styleUrls: ['pages/indicators/indicators.css']
})
export class IndicatorsPage {

    private styles: any[];
    private fontColors: any[];

    public constructor(private _contentService: ContentService){
        this.styles = _contentService.getStyles();
        this.fontColors = _contentService.getFontColors();
    }
}