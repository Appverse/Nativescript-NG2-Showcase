import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "ButtonsPage",
    templateUrl: 'pages/buttons/buttons.html',
    styleUrls: ['pages/buttons/buttons.css']
})
export class ButtonsPage {
    private styleSelected: number = 0;
    private styles: any[];
    private rounded: boolean = false;

    public constructor(private _contentService: ContentService){
        this.styles = _contentService.getStyles();
    }

    public switchChange(args){
        this.rounded = !this.rounded;
    }

    public selectedIndexChanged(args){
        this.styleSelected = args.object.selectedIndex;
        console.log("style selected", this.styleSelected)
    }

}