import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "ImagesPage",
    templateUrl: 'pages/images/images.html',
    styleUrls: ['pages/images/images.css']
})
export class ImagesPage {

    public constructor(private _contentService: ContentService){
    }
}