import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [15, 25, 36, 45, 78, 67, 89,], label: 'Series Diurnas' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series Nocturnas' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public numeros_random(){
    this.radarChartData = [
      { data: [Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100)], label: 'Series Diurnas' },
      { data: [Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100)], label: 'Series Nocturnas' },
    ]}
}
