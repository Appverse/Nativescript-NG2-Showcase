import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'splash-screen',
    templateUrl: 'common/components/splash-screen/splash-screen.component.html',
    styleUrls: ['common/components/splash-screen/splash-screen.component.css']
})
export class SplashScreenComponent{

    constructor() { }

    ngAfterViewInit() {
        this.setNativeElements();
        //Closing splash screen
        setTimeout(()=>{
            this.background.className = "app-color-primary background"
            this.labelOne.className = "alte-font lightest-font bottom h2 labelOneExit"
            this.labelTwo.className = "alte-font lightest-font top h2 labelTwoExit"
        },1500)
    }
    // Native elements set
    public setNativeElements(){
        this.background=this.backgroundRef.nativeElement;
        this.labelOne=this.labelOneRef.nativeElement;
        this.labelTwo=this.labelTwoRef.nativeElement;
    }

    //VIEW CHILDS
    @ViewChild('background') backgroundRef: ElementRef;
    private background;
    @ViewChild('labelOne') labelOneRef: ElementRef;
    private labelOne;
    @ViewChild('labelTwo') labelTwoRef: ElementRef;
    private labelTwo;

}
