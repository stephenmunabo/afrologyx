
import { Component, OnInit, HostListener } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-stickyoffer',
  templateUrl: './stickyoffer.component.html',
  styleUrls: ['./stickyoffer.component.css']
})
export class StickyofferComponent implements OnInit {

  constructor() { }
  fixed = false;
  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    
    onWindowScroll($event) {

    const number = $event.target.scrollingElement.scrollTop || $event.target.documentElement.scrollTop;
    if (number > 413) {
      this.fixed = true;
    } else if (this.fixed && number < 10) {
      this.fixed = false;
    }
  }

}
