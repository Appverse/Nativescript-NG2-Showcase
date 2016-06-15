import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "TextPage",
    templateUrl: 'pages/text/text.html',
    styleUrls: ['pages/text/text.css']
})
export class TextPage {

    private styleSelected: number = 0;
    private colorSelected: number = 0;
    private style: string = "light";
    private textStyles: any[];
    private styles: any[];
    private colors: any[];
    private opening: string;
    private rounded: boolean = false;

    public constructor(private _contentService: ContentService){
        this.colors = _contentService.getColors();
        this.opening = _contentService.getOpening();
        this.styles = _contentService.getStyles();
        this.textStyles = _contentService.getTextStyles();
    }
    
    public switchChange(args){
        this.rounded = !this.rounded;
    }

    public selectedIndexChanged(args){
        this.styleSelected = args.object.selectedIndex;
        console.log("style selected", this.styleSelected)
    }

    public selectedColorChanged(args){
        this.colorSelected = args.object.selectedIndex;
        console.log("style selected", this.style);        
    }
}