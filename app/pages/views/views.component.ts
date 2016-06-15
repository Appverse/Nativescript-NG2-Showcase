import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "ViewsPage",
    templateUrl: 'pages/views/views.html',
    styleUrls: ['pages/views/views.css']
})
export class ViewsPage {

    public constructor(private _contentService: ContentService){
    }

    ngAfterViewInit(){
        this.setNativeElements()
        this.setHtmlCode();
    }

    public setHtmlCode(){
        this.htmlView.html =this.htmlCode.text;
    }

    public setNativeElements(){
        this.htmlCode=this.htmlCodeRef.nativeElement;
        this.htmlView=this.htmlViewRef.nativeElement;
    }
    
    @ViewChild('htmlCode') htmlCodeRef: ElementRef;
    private htmlCode;
    @ViewChild('htmlView') htmlViewRef: ElementRef;
    private htmlView;
}