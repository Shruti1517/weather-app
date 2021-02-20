import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastChartRoutingModule } from './forecast-chart-routing.module';
import { ForecastChartComponent } from './forecast-chart.component';
import { PageHeaderModule } from './../../shared';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ForecastChartComponent],
  imports: [
    CommonModule,
    ForecastChartRoutingModule,
    PageHeaderModule,
    ChartsModule
  ]
})
export class ForecastChartModule { }
