import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class HideHeaderOnScrollComponent implements OnInit {

  public navIsFixed = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  // @HostListener('window:scroll', [])
  @HostListener('document:click', [])
  onWindowScroll() {

    const number = this.document.body.scrollTop;
    console.log(number);
    if (number > 100) {
      this.navIsFixed = true;

    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }

  }
}
