import {Component, ViewChild, ElementRef, EventEmitter} from "@angular/core";
import {Page} from "ui/page";
/* IMPORTANT: registering DrawingPad UI component */
import {registerElement} from "nativescript-angular/element-registry";
registerElement("DrawingPad", ()=>require("nativescript-drawingpad").DrawingPad)
//import modules for saving the drawing
import imageSource = require("image-source");
import fs = require("file-system");
import enums = require("ui/enums");


//USING PLUGIN: NATIVESCRIPT-DRAWINGPAD

@Component({
    selector: "SignaturePadPage",
    templateUrl: 'pages/signaturepad/signaturepad.html',
    styleUrls: ['pages/signaturepad/signaturepad.css']
})
export class SignaturePadPage {

    private images: any[] = [];

    public constructor(private page: Page){
    }

    public getDrawingAsPic() {
        // get the drawing of the drawingpad
        this.drawingPad.getDrawing().then((data)=>{
            console.log(data);
            this.images.push(data);
        }, (err)=>{
            console.log(err);
        })
    }

    public getNoBGDrawing() {
        // get the drawing with transparent background (only Android)
        this.drawingPad.getTransparentDrawing().then((data)=>{
            console.log(data);
            this.images.push(data);
        }, (err)=>{
            console.log(err);
        })
    }

    public clearUserDrawing() {
        this.drawingPad.clearDrawing();
    }
    //Save into a private folder, not accessible from Users/External apps
    public saveDrawing(){
        this.drawingPad.getTransparentDrawing().then((data)=>{
            console.log(data);
            var img = imageSource.fromNativeSource(data);
            var folder = fs.knownFolders.documents();
            var path = fs.path.join(folder.path, "Test.png");
            var saved = img.saveToFile(path, enums.ImageFormat.png);
        }, (err)=>{
            console.log(err);
        })
    }

    ngAfterViewInit(){
        this.drawingPad = this.drawingPadRef.nativeElement;
    }

    @ViewChild('drawingPad') drawingPadRef: ElementRef;
    private drawingPad;

}