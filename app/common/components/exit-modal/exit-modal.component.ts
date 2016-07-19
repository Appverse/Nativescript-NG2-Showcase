import { Component, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';

@Component({
    selector: 'exit-modal',
    templateUrl: 'common/components/exit-modal/exit-modal.component.html',
    styleUrls: ['common/components/exit-modal/exit-modal.component.css']
})
export class ExitModalComponent{

    @Output() close = new EventEmitter();

    constructor() { }

    ngAfterViewInit() {
        this.setNativeElements();
    }
    // Native elements set
    public setNativeElements(){
        this.background=this.backgroundRef.nativeElement;
        this.modal=this.modalRef.nativeElement;
    }

    public closeModal(){
        this.background.className = "backdrop opacityPointThreeToZero"
        this.modal.className = "modal closeModal center app-color-secondary"
        setTimeout(()=>this.close.emit(false),400)
        
    }

    public exitApp(){
        global.process.exit();
    }

    //VIEW CHILDS
    @ViewChild('background') backgroundRef: ElementRef;
    private background;
    @ViewChild('modal') modalRef: ElementRef;
    private modal;
}
