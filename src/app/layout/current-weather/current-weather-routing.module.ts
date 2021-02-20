import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentWeatherComponent } from './current-weather.component';

const routes: Routes = [{ path: '', component: CurrentWeatherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentWeatherRoutingModule { }
