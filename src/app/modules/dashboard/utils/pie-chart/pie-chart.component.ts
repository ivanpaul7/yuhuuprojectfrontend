import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() data: any = [
    ['C#', 30],
    ['C', 120],
    ['Java', 100]
  ];
  constructor() {
  }

  ngOnInit() {
    this.initPieChart(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initPieChart(changes['data'].currentValue);
  }

  initPieChart(data) {
    var chart = c3.generate({
      bindto: '#piechart',
      title:{
        text:'Tags consistency'
      },
      data: {
        columns: data,
        type: 'pie',
      },
      pie:{
        expand:true
      }
    });
  }


}
