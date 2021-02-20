import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SevendayForecastRoutingModule } from './sevenday-forecast-routing.module';
import { SevendayForecastComponent } from './sevenday-forecast.component';
import { PageHeaderModule } from './../../shared';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [SevendayForecastComponent],
  imports: [
    CommonModule,
    SevendayForecastRoutingModule,
    PageHeaderModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class SevendayForecastModule { }
