import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initPieChart();
  }
  initPieChart(){
    var chart = c3.generate({
      bindto: '#piechart',
      size: {
        height: 220,
        width: 220
      },
      data: {
        columns: [
          ['C#', 30],
          ['C', 120],
          ['Java',100]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    });
  }
}
