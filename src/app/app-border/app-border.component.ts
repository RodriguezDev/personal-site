import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-border',
  templateUrl: './app-border.component.html',
  styleUrls: ['./app-border.component.scss']
})
export class AppBorderComponent implements OnInit {

  menuOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.menuOpen = false;
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

}
