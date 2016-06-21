import {Component} from "@angular/core";
import dialogs = require("ui/dialogs");
import imageSource = require("image-source");
/*USING PLUGIN: NATIVESCRIPT-OCR 
    This plugin doesnt include access to camera, it scans an imageSource
    It uses tess-two library for android
    .traineddata files need to be included in app/tesseract/tessdata 
    OCR doesn't work like a charm
*/
var ocr = require("nativescript-ocr");
// import cameraModule for accesing camera hardware
import cameraModule = require("camera");

@Component({
    selector: "OCRPage",
    templateUrl: 'pages/ocr/ocr.html',
    styleUrls: ['pages/ocr/ocr.css']
})
export class OCRPage {

    private image: imageSource.ImageSource;

    public constructor(){
        this.image = imageSource.fromFile("~/images/chat.jpg")
    }
    //Opens camera module and returns the taken picture as ImageSource
    public openCamera(){
        cameraModule.takePicture().then(picture => {
            this.image = picture;
        });
    }
    //Scan the image and return the text as string (result.text)
    public scanImage(){
         ocr.retrieveText({
            image: this.image
        }).then(
            function (result) {
                dialogs.alert({
                    title: "Scan OK",
                    message: result.text,
                    okButtonText: "Sweet"
                });
            },
            function (error) {
                dialogs.alert({
                    title: "Scan NOT OK",
                    message: error,
                    okButtonText: "Mmkay"
                });
            }
        );
    }
}