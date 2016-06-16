import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "TablePage",
    templateUrl: 'pages/table/table.html',
    styleUrls: ['pages/table/table.css']
})
export class TablePage {

    public constructor(private _contentService: ContentService){
    }
}