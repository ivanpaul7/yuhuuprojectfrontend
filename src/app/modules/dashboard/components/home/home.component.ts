import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Home implements OnInit {

  constructor() {
    console.log("Home Works")
  }

  ngOnInit() {
  }

}
