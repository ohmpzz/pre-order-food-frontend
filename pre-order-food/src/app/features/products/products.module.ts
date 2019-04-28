import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductsServiceModules } from './products-service.module';
import { SharedModule } from '@app/shared';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: ':preOrderId',
    component: fromContainers.ProductItemComponent,
    canActivate: [fromGuards.PreOrderExistGuard],
  },
];

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductsServiceModules,
    SharedModule,
  ],
})
export class ProductsModule {}
