import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  spaceFromTop = 0;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event) {
    this.spaceFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

}
