import {Component, ViewChild, ElementRef} from "@angular/core";

@Component({
    selector: "ViewsPage",
    templateUrl: 'pages/views/views.html',
    styleUrls: ['pages/views/views.css']
})
export class ViewsPage {

    public constructor(){
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