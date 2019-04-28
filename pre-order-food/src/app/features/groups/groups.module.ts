import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromRootGuards from '@app/core/guards';
import {
  SharedModule,
  GroupDisplayModule,
  ProductSliderModule,
  CheckoutTimePipeModule,
  ProductCardModule,
  ProductCardDetailModule,
} from '@app/shared';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromGuards from './guards';
import { GroupsServiceModules } from './groups-service.module';

const shared: any[] = [
  SharedModule,
  GroupDisplayModule,
  ProductSliderModule,
  CheckoutTimePipeModule,
  ProductCardModule,
  ProductCardDetailModule,
];

const routes: Routes = [
  {
    path: '',
    component: fromContainers.GroupsComponent,
    canActivate: [fromRootGuards.GroupsGuard],
  },
  {
    path: ':groupId',
    component: fromContainers.GroupItemComponent,
    canActivate: [fromGuards.GroupExistGuard, fromRootGuards.PreOrdersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), GroupsServiceModules, ...shared],
  entryComponents: [fromComponents.AddMemberComponent],
  declarations: [...fromComponents.components, ...fromContainers.containers],
})
export class GroupsModule {}
