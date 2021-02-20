import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevendayForecastComponent } from './sevenday-forecast.component';

const routes: Routes = [{ path: '', component: SevendayForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevendayForecastRoutingModule { }
