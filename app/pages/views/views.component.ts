import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sc-views-page',
    templateUrl: 'views.html',
    styleUrls: ['views.css']
})
export class ViewsPage implements AfterViewInit {


    @ViewChild('htmlCode') private htmlCodeRef: ElementRef;
    private htmlCode;
    @ViewChild('htmlView') private htmlViewRef: ElementRef;
    private htmlView;

    ngAfterViewInit() {
        this.setNativeElements();
        this.setHtmlCode();
    }

    public setHtmlCode() {
        this.htmlView.html = this.htmlCode.text;
    }

    private setNativeElements() {
        this.htmlCode = this.htmlCodeRef.nativeElement;
        this.htmlView = this.htmlViewRef.nativeElement;
    }

}
