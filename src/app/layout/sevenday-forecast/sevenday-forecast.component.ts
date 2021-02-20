import { Component,ViewChild,AfterViewInit,OnInit } from '@angular/core';
import {WeatherService} from '../../_services/weather.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface WeatherData {
  id:any;
  temp: number;
  temp_max: number;
  temp_min: number;
  current_day: any;
  weather_desc: string;
  
}


@Component({
  selector: 'app-sevenday-forecast',
  templateUrl: './sevenday-forecast.component.html',
  styleUrls: ['./sevenday-forecast.component.css']
})
export class SevendayForecastComponent  {
  lat = 18.5204;
  long = 73.8567;
  displayedColumns = ['temp', 'temp_max', 'temp_min', 'weather_desc'];
  dataSource: MatTableDataSource<WeatherData>;
  weather_data : any = [];
  
  exclude = 'hourly';
  city_name ='Pune';
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  constructor(private weather: WeatherService) { 
    const weather_data: WeatherData[] = [];
    
  }
  
  ngOnInit(): void {
    this.weather.getSevenDayForecast(this.lat,this.long,this.exclude).subscribe((data)=>{
      data['daily'].forEach((value, i) => {
        this.weather_data.push({temp:value.temp.max,temp_max:value.temp.max,temp_min:value.temp.min,weather_desc:value.weather[0].description}); 
      });
      this.dataSource = new MatTableDataSource(this.weather_data);  
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }) 
    
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
}
