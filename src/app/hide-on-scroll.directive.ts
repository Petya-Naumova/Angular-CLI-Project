import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appHideOnScroll]'
})
export class HideOnScrollDirective {
    constructor(el: ElementRef) {
        console.log('el: ', el);
        console.log('el.nativeElement: ', el.nativeElement);
        el.nativeElement.style.color = '#ea6654';
    }
}
