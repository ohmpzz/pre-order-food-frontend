import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import * as fromLandingPage from './features/landing-page/containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromLandingPage.LandingPageComponent,
  },
  {
    path: 'g',
    loadChildren: './features/groups/groups.module#GroupsModule',
  },
  {
    path: 'orders',
    loadChildren: './features/orders/orders.module#OrdersModule',
  },
  {
    path: 'preorders',
    loadChildren: './features/pre-order/pre-order.module#PreOrderModule',
  },
  {
    path: 'p',
    loadChildren: './features/products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
