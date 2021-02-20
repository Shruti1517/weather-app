import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastChartComponent } from './forecast-chart.component';

const routes: Routes = [{ path: '', component: ForecastChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastChartRoutingModule { }
