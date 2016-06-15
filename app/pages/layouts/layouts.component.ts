import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "LayoutsPage",
    templateUrl: 'pages/layouts/layouts.html',
    styleUrls: ['pages/layouts/layouts.css']
})
export class LayoutsPage {
    private styleSelected: number = 0;

    public constructor(private _contentService: ContentService){
        
    }

    public selectedIndexChanged(args){
        this.styleSelected = args.object.selectedIndex;
        console.log("style selected", this.styleSelected)
    }

    private styles: any[] = [
            {name: "H1", style: "h1"},
            {name: "H2", style: "h2"},
            {name: "H3", style: "h3"},
            {name: "H4", style: "h4"},
            {name: "H5", style: "h5"},
            {name: "H6", style: "h6"},
            {name: "Italic", style: "italic"},
            {name: "Bold", style: "bold"}
    ]
}