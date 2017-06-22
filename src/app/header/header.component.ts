import { Component, HostListener, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    public navIsFixed = false;

    constructor(@Inject(DOCUMENT) private document: any) {

    }

    ngOnInit() {
    }

    @HostListener('window:scroll', [])

    onWindowScroll() {
        console.log(123);
        const number = this.document.body.scrollTop;
        if (number > 150) {
          console.log(number);
            this.navIsFixed = true;
        } else if (this.navIsFixed && number < 150) {
            console.log('number is < 10', number);
            this.navIsFixed = false;
        }
    }

}
