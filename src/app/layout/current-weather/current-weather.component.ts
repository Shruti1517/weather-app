import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../_services/weather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  currentData : any = [];
  toggle = false;
  city_name = 'Pune';
  weatherData : any = [];
  constructor(private service : WeatherService,private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getCurrentWeatherData(this.city_name);
  }
  /*Get current weather data : START - SHRUTI */
  getCurrentWeatherData(city){
    try {
      this.city_name = city ;
      this.service.getCurrentWeatherDataForPune(this.city_name).subscribe((data)=>{
        if(data){
          this.currentData = [{name:data.name,country:data.sys.country,description:data.weather[0].description,
            temperature:data.main.temp,temp_max:data.main.temp_max,temp_min:data.main.temp_min,
            wind_speed:data.wind.speed,humidity:data.main.humidity,pressure:data.main.pressure,timezone:data.timezone}];
          }
        },error => {
          console.log("ERROR");
        })
      } catch (error) {
        console.log('catch');
      }    
    }
    /*Get current weather data : END - SHRUTI */
    
    /* Show data on toggle : START - SHRUTI */
    showCurrentdata(value){
      if(value == false){
        this.toggle = true;
      }
      else{
        this.toggle = false;
      }
    }
    /* Show data on toggle : END - SHRUTI */
    
  }
  