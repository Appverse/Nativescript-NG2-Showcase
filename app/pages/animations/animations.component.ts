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
        this.initialSetup();
        this.startAnimations();
    }

    public startAnimations(){
        this.bgDemo(this.changebg);
        this.opacityDemo(this.opacity);
        this.translateDemo(this.translate);
        this.scaleDemo(this.scale);
        this.rotateDemo(this.rotate);
        this.linearDemo(this.linear);
        this.easeinDemo(this.easein);
        this.easeoutDemo(this.easeout);
        this.easeinoutDemo(this.easeinout);
        this.springDemo(this.spring);
        this.bezierDemo(this.bezier);
    }

    public initialSetup(){
        this.translate.translateX = -100;
        this.linear.translateX = -100;
        this.easein.translateX = -100;
        this.easeout.translateX = -100;
        this.easeinout.translateX = -100;
        this.spring.translateX = -100;
        this.bezier.translateX = -100;

    }

    /* ANIMATIONS */

    public bgDemo(view){
        view.animate({
            backgroundColor: new colorModule.Color("green"),
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
        })
    }

    public opacityDemo(view){
        view.animate({
            opacity: 0,
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
        })
    }

    public translateDemo(view){
        view.animate({
            translate: {x: 100, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
        })
    }

    public scaleDemo(view){
        view.animate({
            scale: {x: 0, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
        })
    }

    public rotateDemo(view){
        view.animate({
            rotate: 360,
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
        })
    }

    public linearDemo(view){
        view.animate({
            translate: {x: 100, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
            curve: AnimationCurve.linear
        })
    }
    
    public easeinDemo(view){
        view.animate({
            translate: {x: 100, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
            curve: AnimationCurve.easeIn
        })
    }
    
    public easeoutDemo(view){
        view.animate({
            translate: {x: 100, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
            curve: AnimationCurve.easeOut
        })
    }
    
    public easeinoutDemo(view){
        view.animate({
            translate: {x: 100, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
            curve: AnimationCurve.easeInOut
        })
    }

    public springDemo(view){
        view.animate({
            translate: {x: 100, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
            curve: AnimationCurve.spring
        })
    }
    
    public bezierDemo(view){
        view.animate({
            translate: {x: 100, y: 0},
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })
    }

    public setNativeElements(){
        this.changebg=this.changebgRef.nativeElement;
        this.opacity=this.opacityRef.nativeElement;
        this.translate=this.translateRef.nativeElement;
        this.scale=this.scaleRef.nativeElement;
        this.rotate=this.rotateRef.nativeElement;
        this.linear=this.linearRef.nativeElement;
        this.easein=this.easeinRef.nativeElement;
        this.easeout=this.easeoutRef.nativeElement;
        this.easeinout=this.easeinoutRef.nativeElement;
        this.spring=this.springRef.nativeElement;
        this.bezier=this.bezierRef.nativeElement;
    }

    @ViewChild("changebg") changebgRef: ElementRef;
    private changebg;
    @ViewChild("opacity") opacityRef: ElementRef;
    private opacity;
    @ViewChild("translate") translateRef: ElementRef;
    private translate;
    @ViewChild("scale") scaleRef: ElementRef;
    private scale;
    @ViewChild("rotate") rotateRef: ElementRef;
    private rotate;
    @ViewChild("linear") linearRef: ElementRef;
    private linear;
    @ViewChild("easein") easeinRef: ElementRef;
    private easein;
    @ViewChild("easeout") easeoutRef: ElementRef;
    private easeout;
    @ViewChild("easeinout") easeinoutRef: ElementRef;
    private easeinout;
    @ViewChild("spring") springRef: ElementRef;
    private spring;
    @ViewChild("bezier") bezierRef: ElementRef;
    private bezier;

}