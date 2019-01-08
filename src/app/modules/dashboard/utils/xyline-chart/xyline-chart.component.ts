import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-xyline-chart',
  templateUrl: './xyline-chart.component.html',
  styleUrls: ['./xyline-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XYLineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  initChart(){
    var chart = c3.generate({
      bindto: '#chart',
      // size: {
      //   height: 220,
      //   width: 600
      // },
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    });
  }
}
