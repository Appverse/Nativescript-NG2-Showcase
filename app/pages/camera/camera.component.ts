import { Component, ViewChild, ElementRef } from '@angular/core';
// import cameraModule for accesing camera hardware
import * as camera from "nativescript-camera";

@Component({
    moduleId: module.id,
    selector: 'sc-camera-page',
    templateUrl: 'camera.html',
    styleUrls: ['camera.css']
})
export class CameraPage {

    private image;

    public requestPermission() {
        camera.requestPermissions();
    }
    //Opens camera module and passes the picture
    public openCamera() {
        camera.takePicture()
            .then(picture => {
                this.image = picture;
        });
    }
}
