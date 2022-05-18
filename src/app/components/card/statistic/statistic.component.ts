import {Component, Input, OnInit} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @Input() title!: string;

  public barChartOptions: ChartConfiguration['options'] = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ 'Mieux protéger', 'Mieux progresser', 'Mieux équiper', 'Mieux fonctionner' ],
    datasets: [
      { data: [ 27, 24, 24, 25 ], backgroundColor: [ '#bfbfbf', '#a7a7a7', '#808080', '#3a3838' ], hoverBackgroundColor: [ '#bfbfbf', '#a7a7a7', '#808080', '#3a3838' ] }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
