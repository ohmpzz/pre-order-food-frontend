import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OrdersServiceModules } from './orders-services.module';
import {
  SharedModule,
  CheckoutTimePipeModule,
  ProductCardModule,
} from '@app/shared';

import * as fromComponents from './components';
import * as fromContainers from './containers';

const shared: any[] = [SharedModule, CheckoutTimePipeModule, ProductCardModule];

const routes: Routes = [
  {
    path: '',
    component: fromContainers.OrdersComponent,
  },
];

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrdersServiceModules,
    ...shared,
  ],
})
export class OrdersModule {}
