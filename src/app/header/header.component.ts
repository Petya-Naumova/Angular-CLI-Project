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
        let number = this.document.body.scrollTop;
        if (number > 100) {
            this.navIsFixed = true;
        }
        else if(this.navIsFixed && number < 10) {
            this.navIsFixed = false;
        }
    }

}
