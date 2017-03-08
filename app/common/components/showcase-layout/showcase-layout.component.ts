import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'sc-showcase-layout',
    templateUrl: 'showcase-layout.component.html'
})
export class ShowcaseLayout {
    @Input() title: string;
}
