import { Component, HostListener, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    public isScrolled = false;

    constructor(@Inject(DOCUMENT) private document: any) {

    }

    ngOnInit() {
    }

    @HostListener('window:scroll', [])

    onWindowScroll() {

        const number = this.document.body.scrollTop;
        if (number > 150) {

            this.isScrolled = true;
        } else if (this.isScrolled && number < 150) {

            this.isScrolled = false;
        }
    }

}
