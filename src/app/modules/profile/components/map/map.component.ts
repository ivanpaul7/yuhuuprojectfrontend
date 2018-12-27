import {Component, Input, OnInit} from '@angular/core';
import {AgmCoreModule} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  constructor() {
  }

  ngOnInit() {
  }

}
