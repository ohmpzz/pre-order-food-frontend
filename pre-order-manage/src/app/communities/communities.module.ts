import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommunitiesServiceModule } from './communities-service.module';

import { SharedModule } from '@app/shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import * as fromComponents from './components';

import * as fromContainers from './containers';

import * as fromGuards from './guards';

export const routes: Routes = [
  {
    path: '',
    component: fromContainers.CommunitiesComponent,
    canActivate: [fromGuards.GroupsGuard],
  },
  { path: 'new', component: fromContainers.CommunityItemComponent },
  {
    path: ':commuId',
    component: fromContainers.CommunityItemComponent,
    canActivate: [fromGuards.GroupExistGuard],
  },
  {
    path: ':commuId/members',
    component: fromContainers.MembersComponent,
    canActivate: [fromGuards.GroupsGuard, fromGuards.GroupExistGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('communities', reducers),
    EffectsModule.forFeature(effects),
    CommunitiesServiceModule,
    SharedModule,
  ],
})
export class CommunitiesModule {}
