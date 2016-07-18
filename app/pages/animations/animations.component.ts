import {Component, ViewChild, ElementRef} from "@angular/core";
import colorModule = require("color");
import {AnimationCurve} from "ui/enums";

@Component({
    selector: "AnimationsPage",
    templateUrl: 'pages/animations/animations.html',
    styleUrls: ['pages/animations/animations.css']
})
export class AnimationsPage {

    public constructor(){
    }

    ngAfterViewInit(){
        this.setNativeElements();
    }

    public startAnimations(){
        this.background.className = "s-margin app-color-primary changeBackground";
        this.opacity.className = "s-margin app-color-primary changeOpacity";
        this.translation.className = "s-margin app-color-primary simpleTranslate";
        this.scale.className = "s-margin app-color-primary scale";
        this.rotation.className = "s-margin app-color-primary loopRotate";
    }

    public setNativeElements(){
        this.background = this.backgroundRef.nativeElement;
        this.opacity = this.opacityRef.nativeElement;
        this.translation = this.translationRef.nativeElement;
        this.scale = this.scaleRef.nativeElement;
        this.rotation = this.rotationRef.nativeElement;
    }

    @ViewChild('background') backgroundRef: ElementRef;
    private background;
    @ViewChild('opacity') opacityRef: ElementRef;
    private opacity;
    @ViewChild('translation') translationRef: ElementRef;
    private translation;
    @ViewChild('scale') scaleRef: ElementRef;
    private scale;
    @ViewChild('rotation') rotationRef: ElementRef;
    private rotation;

}