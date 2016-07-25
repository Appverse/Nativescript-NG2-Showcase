import {Component, ViewChild, ElementRef, animate, trigger, state, style, transition} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "ContactsPage",
    templateUrl: 'pages/contacts/contacts.html',
    styleUrls: ['pages/contacts/contacts.css'],
    animations: [
        trigger('state', [
            state('inactiveModal', style({ opacity: '0' })),
            state('activeModal', style({ opacity: '1' })),
            transition('inactiveModal => activeModal', [ animate('300ms ease-out') ]),
            transition('activeModal => inactiveModal', [ animate('300ms ease-out') ]),
            state('inactiveBD', style({ opacity: '0' })),
            state('activeBD', style({ opacity: '.3' })),
            transition('inactiveBD => activeBD', [ animate('300ms ease-out') ]),
            transition('activeBD => inactiveBD', [ animate('300ms ease-out') ]),
        ])
    ]
})
export class ContactsPage {

    private contacts: any[];
    private modalToggled: boolean = false;
    private toggled: boolean = false;
    private selected: number = 0;

    public constructor(private _contentService: ContentService){
        this.contacts = _contentService.getContacts();
    }

    ngAfterViewInit(){
        this.setNativeElements();
        this.modal.opacity = 0;
    }
    //Opens detail modal
    public itemTap(args){
        this.selected = args.index;
        this.toggled = true;
        this.modalToggled = true;
    }
    //Closes detail modal
    public closeModal(){
        this.modalToggled = false;
        setTimeout(()=>{this.toggled = false},400)
    }
    //Get elements from the UI
    public setNativeElements(){
        this.modal=this.modalRef.nativeElement;
    }
    @ViewChild('modal') modalRef: ElementRef;
    private modal;
}