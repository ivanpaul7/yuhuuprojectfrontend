import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.scss']
})
export class MiniProfile implements OnInit {
  public nameToDisplay:string="Rares Beltechi";

  constructor() { }

  ngOnInit() {
  }

}
