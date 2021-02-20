import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  BaseUrl: String;
  ApiKey : String;
  constructor(private _http : HttpClient) {
    this.BaseUrl = environment.BaseUrl;
    this.ApiKey = environment.ApiKey ;  
  }
  
  /* Get current weather data for pune : START - SHRUTI */
  getCurrentWeatherDataForPune(city:any){
    return this._http.get<any>(this.BaseUrl+'weather?q='+city+'&appid='+this.ApiKey).pipe(map(res=>{
      return res;
    }))
  }
  /* Get current weather data for pune : END - SHRUTI */
  
  /* Get 7 day daily forecast data : START - SHRUTI */
  getSevenDayForecast(lat:any,lon:any,exclude:any){
    return this._http.get<any>(this.BaseUrl+'onecall?lat='+lat+'&lon='+lon+'&units=metric'+'&exclude='+exclude+'&appid='+this.ApiKey).pipe(map(res=>{
      return res;
    }))
    
  }
  /* Get 7 day daily forecast data : END - SHRUTI */
  
}
