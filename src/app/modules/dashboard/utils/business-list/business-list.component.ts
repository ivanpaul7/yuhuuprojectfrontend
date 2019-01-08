import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessList implements OnInit {
  public items :number[] = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
