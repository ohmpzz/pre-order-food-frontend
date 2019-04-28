import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PreOrderServiceModules } from './pre-order-service.module';

import { SharedModule, CheckoutTimePipeModule } from '@app/shared';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromPipes from './pipes';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.PreOrdersComponent,
  },
  {
    path: 'new-preorder',
    component: fromContainers.CreatePreOrderComponent,
  },
  {
    path: 'new-product',
    component: fromContainers.CreateProductComponent,
  },
  {
    path: ':preorderId',
    component: fromContainers.OrdersComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromPipes.pipes,
  ],
  entryComponents: [fromComponents.OrderDetailModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PreOrderServiceModules,
    CheckoutTimePipeModule,
  ],
})
export class PreOrderModule {}
