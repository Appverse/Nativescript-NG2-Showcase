import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sc-animations-page',
    templateUrl: 'animations.html',
    styleUrls: ['animations.css']
})
export class AnimationsPage implements AfterViewInit {

    @ViewChild('background') private backgroundRef: ElementRef;
    private background;
    @ViewChild('opacity') private opacityRef: ElementRef;
    private opacity;
    @ViewChild('translation') private translationRef: ElementRef;
    private translation;
    @ViewChild('scale') private scaleRef: ElementRef;
    private scale;
    @ViewChild('rotation') private rotationRef: ElementRef;
    private rotation;

    ngAfterViewInit() {
        this.setNativeElements();
    }

    startAnimations() {
        this.background.className = 's-margin app-color-primary changeBackground';
        this.opacity.className = 's-margin app-color-primary changeOpacity';
        this.translation.className = 's-margin app-color-primary simpleTranslate';
        this.scale.className = 's-margin app-color-primary scale';
        this.rotation.className = 's-margin app-color-primary loopRotate';
    }

    private setNativeElements() {
        this.background = this.backgroundRef.nativeElement;
        this.opacity = this.opacityRef.nativeElement;
        this.translation = this.translationRef.nativeElement;
        this.scale = this.scaleRef.nativeElement;
        this.rotation = this.rotationRef.nativeElement;
    }

}
