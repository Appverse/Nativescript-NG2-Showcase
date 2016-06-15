import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "PickersPage",
    templateUrl: 'pages/pickers/pickers.html',
    styleUrls: ['pages/pickers/pickers.css']
})
export class PickersPage {

    private jedis: string[];
    private jediSelected: string;
    private date: string;
    private time: string;

    public constructor(private _contentService: ContentService){
        this.jedis = _contentService.getJedis();
    }

    private selectedJediChange(args){
        this.jediSelected = this.jedis[args.object.selectedIndex];
    }

    private selectedDateChange(args){
        this.date = args.object.day + "/" + args.object.month + "/" + args.object.year;
    }

    private selectedTimeChange(args){
        this.time = args.object.hour + ":" + args.object.minute;
    }

}