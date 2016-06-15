import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "DialogsPage",
    templateUrl: 'pages/dialogs/dialogs.html',
    styleUrls: ['pages/dialogs/dialogs.css']
})
export class DialogsPage {

    private styles: any[];

    public constructor(private _contentService: ContentService){
        this.styles = _contentService.getStyles();
    }
}