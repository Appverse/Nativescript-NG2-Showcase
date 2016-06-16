import {Component, ViewChild, ElementRef} from "@angular/core";
import {ContentService} from "../../common/services/content.service";

@Component({
    selector: "ContactsPage",
    templateUrl: 'pages/contacts/contacts.html',
    styleUrls: ['pages/contacts/contacts.css']
})
export class ContactsPage {

    private contacts: any[];
    private modalToogled: boolean = false;
    private selected: number = 0;

    public constructor(private _contentService: ContentService){
        this.contacts = _contentService.getContacts();
    }

    ngAfterViewInit(){
        this.setNativeElements();
        this.modal.opacity = 0;
    }

    public itemTap(args){
        console.log(args.index)
        this.selected = args.index;
        this.openModal();
    }

    public openModal(){
        this.modalToogled = true;
        this.backdrop.animate({
            opacity: .3,
            duration: 300
        })
        this.modal.animate({
            opacity: 1,
            duration: 300
        })
    }

    public closeModal(){
        this.backdrop.animate({
            opacity: 0,
            duration: 300
        })
        this.modal.animate({
            opacity: 0,
            duration: 300
        }).then(()=>{
            this.modalToogled = false;
        })
    }

    public setNativeElements(){
        this.backdrop=this.backdropRef.nativeElement;
        this.modal=this.modalRef.nativeElement;
    }

    @ViewChild('backdrop') backdropRef: ElementRef;
    private backdrop;
    @ViewChild('modal') modalRef: ElementRef;
    private modal;
}