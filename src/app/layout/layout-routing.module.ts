import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'current-weather', pathMatch: 'prefix' },
            
            
            { path: 'current-weather', loadChildren: () => import('./current-weather/current-weather.module').then(m => m.CurrentWeatherModule) },
            { path: 'sevenday-forecast', loadChildren: () => import('./sevenday-forecast/sevenday-forecast.module').then(m => m.SevendayForecastModule) },
            { path: 'forecast-chart', loadChildren: () => import('./forecast-chart/forecast-chart.module').then(m => m.ForecastChartModule) },


            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
