import {Component, ViewChild, ElementRef} from "@angular/core";

@Component({
    selector: "HomePage",
    templateUrl: 'pages/home/home.html',
    styleUrls: ['pages/home/home.css']
})
export class HomePage {
    public constructor(){
        
    }

    ngAfterViewInit(){
        this.setNativeElements();
        this.initSettings();
        setTimeout(()=>{
            this.introAnimation();
        } ,1000)
    }
    //Initial settings
    public initSettings(){
        this.leftBracket.scaleY = 0;
        this.rightBracket.scaleY = 0;
        this.letterN.scaleX = 0;
        this.gft.scaleX = 0;
    }
    //Logo animation
    public introAnimation(){
        this.leftBracket.animate({
            scale: {x: 1, y: 1},
            duration: 500
        })
        this.rightBracket.animate({
            scale: {x: 1, y: 1},
            duration: 500
        }).then(()=>{
            this.rightBracket.animate({
                translate: {x: 20, y: 0},
                duration: 500
            })
            this.leftBracket.animate({
                translate: {x: -20, y: 0},
                duration: 500
            })
            this.letterN.animate({
                scale: {x: 1, y: 1},
                duration: 500
            })
            this.gft.animate({
                scale: {x: 1, y: 1},
                duration: 500
            })
        })
    }
    //Get elements from the UI
    public setNativeElements(){
        this.leftBracket=this.leftBracketRef.nativeElement;
        this.rightBracket=this.rightBracketRef.nativeElement;
        this.letterN=this.letterNRef.nativeElement;
        this.gft=this.gftRef.nativeElement;
    }

    @ViewChild('leftBracket') leftBracketRef: ElementRef;
    private leftBracket;
    @ViewChild('rightBracket') rightBracketRef: ElementRef;
    private rightBracket;
    @ViewChild('letterN') letterNRef: ElementRef;
    private letterN;
    @ViewChild('gft') gftRef: ElementRef;
    private gft;
}
