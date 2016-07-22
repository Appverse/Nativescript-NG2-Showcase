import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'splash-screen',
    templateUrl: 'common/components/splash-screen/splash-screen.component.html',
})
export class SplashScreenComponent{

    constructor() { }

    ngAfterViewInit() {
        this.setNativeElements();
        //Closing splash screen
        setTimeout(()=>{
            this.background.className = "app-color-primary exit"
            this.labelOne.className = "alte-font lightest-font bottom-left h2"
            this.labelTwo.className = "alte-font lightest-font top-right h2"
            this.labels.className = "center exit"
        },2000)
    }
    // Native elements set
    public setNativeElements(){
        this.background=this.backgroundRef.nativeElement;
        this.labelOne=this.labelOneRef.nativeElement;
        this.labelTwo=this.labelTwoRef.nativeElement;
        this.labels=this.labelsRef.nativeElement;
    }

    //VIEW CHILDS
    @ViewChild('background') backgroundRef: ElementRef;
    private background;
    @ViewChild('labelOne') labelOneRef: ElementRef;
    private labelOne;
    @ViewChild('labelTwo') labelTwoRef: ElementRef;
    private labelTwo;
    @ViewChild('labels') labelsRef: ElementRef;
    private labels;

}
