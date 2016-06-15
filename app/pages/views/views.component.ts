import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "ViewsPage",
    templateUrl: 'pages/views/views.html',
    styleUrls: ['pages/views/views.css']
})
export class ViewsPage {

    private styles: any[];

    public constructor(private _contentService: ContentService){
        this.styles = _contentService.getStyles();
    }
}