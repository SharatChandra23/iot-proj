import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { PageHeaderModule } from '../../shared';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfmCKFwSGeiP8bi_KuN7ZF0PlYcQdzLfI'
    })
  ],
  declarations: [ChartsComponent, GaugeChartComponent, LineChartComponent]
})
export class ChartsModule { }
