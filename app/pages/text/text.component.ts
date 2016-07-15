import {Component} from "@angular/core";
import {ContentService} from "../../common/services/content.service";
import {Page} from "ui/page";

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

    public constructor(private _contentService: ContentService, private page: Page){
        this.colors = _contentService.getColors();
        this.opening = _contentService.getOpening();
        this.styles = _contentService.getStyles();
        this.textStyles = _contentService.getTextStyles();
    }

    public textFieldLoaded(args){
        args.object.dismissSoftInput()
    }
    
    public switchChange(args){
        this.rounded = !this.rounded;
    }

    public selectedIndexChanged(args){
        this.styleSelected = args.object.selectedIndex;
    }

    public selectedColorChanged(args){
        this.colorSelected = args.object.selectedIndex;
    }
}