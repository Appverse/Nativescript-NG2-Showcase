import {Component, ViewChild, ElementRef, EventEmitter} from "@angular/core";
import {Page} from "ui/page";
import dialogs = require("ui/dialogs");

//USING PLUGIN: NATIVESCRIPT-BARCODESCANNER
var barcodescanner = require("nativescript-barcodescanner");

@Component({
    selector: "CodeScannerPage",
    templateUrl: 'pages/codescanner/codescanner.html',
    styleUrls: ['pages/codescanner/codescanner.css']
})
export class CodeScannerPage {

    private result;

    public constructor(private page: Page){
        
    }

    public scan(format?:string){
        if (barcodescanner.available()){
            barcodescanner.scan({
                formats: format,   // Pass in of you want to restrict scanning to certain types; AZTEC and MAXICODE formats dont work fine 
                cancelLabel: "Stop scanning", // iOS only, default 'Close' 
                message: "Go scan something", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.' 
                preferFrontCamera: false,     // Android only, default false 
                showFlipCameraButton: true,   // Android only, default false (on iOS it's always available) 
                orientation: "portrait"      // Android only, optionally lock the orientation to either "portrait" or "landscape" 
            }).then(
                (result)=>{
                    console.log("Scan format: " + result.format);
                    console.log("Scan text:   " + result.text);
                    this.result = result.format + " " + result.text
                },
                (error)=>{
                    console.log("No scan: " + error);
                }
            )
        }
        
    }

}