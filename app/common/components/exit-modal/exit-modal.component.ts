import { Component, Output, ViewChild, ElementRef, EventEmitter, animate, trigger, state, style, transition} from '@angular/core';

@Component({
    selector: 'exit-modal',
    templateUrl: 'common/components/exit-modal/exit-modal.component.html',
    styleUrls: ['common/components/exit-modal/exit-modal.component.css'],
    animations: [
        trigger('state', [
            state('inactiveModal', style({ transform: 'scale(0,0)' })),
            state('activeModal', style({ transform: 'scale(1,1)' })),
            transition('inactiveModal => activeModal', [ animate('300ms ease-out') ]),
            transition('activeModal => inactiveModal', [ animate('300ms ease-out') ]),
            state('inactiveBD', style({ opacity: '0' })),
            state('activeBD', style({ opacity: '.3' })),
            transition('inactiveBD => activeBD', [ animate('300ms ease-out') ]),
            transition('activeBD => inactiveBD', [ animate('300ms ease-out') ]),
        ])
    ]
})
export class ExitModalComponent{

    @Output() close = new EventEmitter();
    private toggled: boolean = false;

    constructor() {
    }

    ngAfterViewInit() {
        this.setNativeElements();
        setTimeout(()=>{this.toggled = true}, 100)
    }
    // Native elements set
    public setNativeElements(){
        this.background=this.backgroundRef.nativeElement;
        this.modal=this.modalRef.nativeElement;
    }

    public closeModal(){
        this.toggled = false;
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
