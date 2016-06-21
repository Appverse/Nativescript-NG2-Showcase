import {Component, ViewChild, ElementRef, EventEmitter} from "@angular/core";
// import cameraModule for accesing camera hardware
import cameraModule = require("camera");

@Component({
    selector: "CameraPage",
    templateUrl: 'pages/camera/camera.html',
    styleUrls: ['pages/camera/camera.css']
})
export class CameraPage {

    private width: number = 0;
    private height: number = 0;
    private keepAspectRatio: boolean = false;
    private widthEmitter = new EventEmitter<string>();
    private heightEmitter = new EventEmitter<string>();
    private keepAspectRatioEmitter = new EventEmitter<boolean>();

    public constructor(){
    }
    //Opens camera module and passes the picture
    public openCamera(){
        cameraModule.takePicture({width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio}).then(picture => {
            this.image.src = picture;
        });
    }
    //On page init it subscribes to EventEmitters that are emited by the UI
    ngOnInit(){
        let instance = this;
        this.widthEmitter
            .subscribe(v=>{
                instance.width = v;
            });
        this.heightEmitter
            .subscribe(v=>{
                instance.height = v;
            });
        this.keepAspectRatioEmitter
            .subscribe(v=>{
                instance.keepAspectRatio = v;
            });
    }
    /* Get the elements from the UI */
    ngAfterViewInit(){
        this.image=this.imageRef.nativeElement;
    }

    @ViewChild('image') imageRef: ElementRef;
    private image;
}