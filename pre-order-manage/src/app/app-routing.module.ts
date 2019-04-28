import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromCoreContainer from './core/containers';
import * as fromCoreGuard from './core/guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'community' },
  { path: 'login', component: fromCoreContainer.AuthComponent },
  {
    path: 'community',
    loadChildren: './communities/communities.module#CommunitiesModule',
    canLoad: [fromCoreGuard.AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
