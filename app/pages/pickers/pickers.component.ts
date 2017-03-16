import {Component} from '@angular/core';
import {ContentService} from '../../common/services/content.service';

@Component({
    moduleId: module.id,
    selector: 'sc-pickers-page',
    templateUrl: 'pickers.html',
    styleUrls: ['pickers.css']
})
export class PickersPage {

    private jedis: string[];
    private jediSelected: string;
    private date: string;
    private time: string;

    constructor(private _contentService: ContentService) {
        this.jedis = _contentService.getJedis();
    }

    public selectedDateChange(args) {
        this.date = this.padTwo(args.object.day) + '/' + this.padTwo(args.object.month) + '/' + args.object.year;
    }

    public selectedTimeChange(args) {
        this.time = this.padTwo(args.object.hour) + ':' + this.padTwo(args.object.minute);
    }

    public datePickerLoaded(args) {
        args.object.day = new Date(Date.now()).getDate();
        args.object.month = new Date(Date.now()).getMonth();
        args.object.year = new Date(Date.now()).getFullYear();
    }

    private padTwo(n: number) {
        return (n<10 ? '0' : '') + n;
    }

}
