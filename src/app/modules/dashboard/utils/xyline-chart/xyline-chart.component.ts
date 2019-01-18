import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-xyline-chart',
  templateUrl: './xyline-chart.component.html',
  styleUrls: ['./xyline-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XYLineChartComponent implements OnInit, OnChanges {

  @Input() data;

  constructor() {
    this.data = [['x', 'Bitdefender', 'Rares'], [['pv', 43, 90]]];
  }

  ngOnInit() {
    this.initChart(this.data);
  }

  initChart(data) {
    var chart = c3.generate({
      bindto: '#chart',
      title:{
        text:'Number of internships of companies'
      },
      data: {
        x: 'x',
        columns: data,
        type: 'bar'
      },
      legend: {
        show: false
      },
      axis: {
        x: {
          type: 'category',
          tick: {
            rotate: 75,
            multiline: false
          }
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initChart(changes['data'].currentValue);
  }
}
