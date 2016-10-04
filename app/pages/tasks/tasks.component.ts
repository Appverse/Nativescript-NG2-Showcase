import {Component, ViewChild, ElementRef, NgZone, AfterViewInit} from '@angular/core';
import {ContentService} from '../../common/services/content.service';
import platform = require('platform');
import colorModule = require('color');

@Component({
    moduleId: module.id,
    selector: 'sc-tasks-page',
    templateUrl: 'tasks.html',
})
export class TasksPage implements AfterViewInit {

    private tasks: any[];
    private isAndroid: boolean = platform.isAndroid;



    @ViewChild('input') private inputRef: ElementRef;
    private input;

    constructor(private _contentService: ContentService, private _ngZone: NgZone) {
        this.tasks = _contentService.getTasks();
    }

    ngAfterViewInit() {
        this.input = this.inputRef.nativeElement;
    }

    //TOGGLES TASK STATE
    public checkTap(task, args) {
        task.isDone = !task.isDone;
        let icon = args.object;
        icon.animate({
            scale: { x: 0, y: 0 },
            duration: 100,
        }).then(() => {
            icon.animate({
                scale: { x: 1, y: 1 },
                duration: 100,
            });
        });
    }

    //ADDS A TASK
    public add() {
        if (this.input.text !== '') {
            this.tasks.push({ isDone: false, text: this.input.text });
        }
        this.input.text = '';
    }

    //REMOVES SELECTED TASK
    public removeTap(index, args) {
        args.object.parent.animate({
            translate: { x: 400, y: 0 },
            duration: 200
        }).then(() => {
            this.tasks.splice(index, 1);
            args.object.parent.translateX = 0;
        });
    }

    public changeCellBackground(args) {
        if (!this.isAndroid) {
            var cell = args.ios; //return UITableViewCell
            cell.backgroundColor = new colorModule.Color('0,0,0,0').ios;
        }
    }
}
