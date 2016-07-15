import {Component} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "ListsPage",
    templateUrl: 'pages/lists/lists.html',
    styleUrls: ['pages/lists/lists.css']
})
export class ListsPage {
    private styleSelected: number = 0;
    private colorSelected: number = 0;
    private style: string = "light";
    private colors: any[];
    private films: any[];

    public constructor(private _contentService: ContentService){
        this.colors = _contentService.getColors();
        this.films = _contentService.getFilms();
    }

    public selectedColorChanged(args){
        this.colorSelected = args.object.selectedIndex;
    }
}