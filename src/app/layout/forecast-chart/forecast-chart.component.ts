import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import {WeatherService} from '../../_services/weather.service';


@Component({
  selector: 'app-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.css']
})
export class ForecastChartComponent implements OnInit {
  lat = 18.5204;
  long = 73.8567;
  title = '7 Day Daily Forecast';
  exclude = 'hourly';
  public lineChartData: ChartDataSets[] = [
    { data: [], label: "Max Temp" },
    { data: [], label: "Min Temp" }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = { responsive: true };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(25,0,0,0.5)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];
  
  constructor(private service: WeatherService) { }
  
  ngOnInit(): void {
    this.chartData();
  }
  
  chartData = () => {
    this.service.getSevenDayForecast(this.lat,this.long,this.exclude).subscribe((data) => {
      if(data){
        data.daily.forEach((element) => {
          this.lineChartLabels.push(new Date(element.dt * 1000).toLocaleDateString("en-US"));
          this.lineChartData[0].data.push(element.temp.max);
          this.lineChartData[1].data.push(element.temp.min);
        });
      }
      
    })
  }
}
