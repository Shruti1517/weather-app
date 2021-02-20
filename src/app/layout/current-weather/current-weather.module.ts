import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentWeatherRoutingModule } from './current-weather-routing.module';
import { CurrentWeatherComponent } from './current-weather.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
  declarations: [CurrentWeatherComponent],
  imports: [
    CommonModule,
    CurrentWeatherRoutingModule,
    PageHeaderModule,

  ]
})
export class CurrentWeatherModule { }
