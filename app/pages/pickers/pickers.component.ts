import {Component} from "@angular/core";
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
        this.date = this.padTwo(args.object.day) + "/" + this.padTwo(args.object.month) + "/" + args.object.year;
    }

    private selectedTimeChange(args){
        this.time = this.padTwo(args.object.hour) + ":" + this.padTwo(args.object.minute);
    }

    public padTwo(n: number) {
        return (n<10 ? '0' : '') + n;
    }

}