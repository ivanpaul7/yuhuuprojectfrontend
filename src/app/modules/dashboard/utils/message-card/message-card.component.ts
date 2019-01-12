import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCard implements OnInit {

  public numberToDisplay:number = 7;
  public tagToDisplay:string = '#smecherie';
  constructor() {

  }

  ngOnInit() {
  }

}
