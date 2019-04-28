import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageServiceModules } from './landing-page-service.module';
import {
  GroupDisplayModule,
  ProductSliderHorizonModule,
  ProductSliderModule,
  CheckoutTimePipeModule,
} from '@app/shared';

import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer, effects } from './store';

const shared: any[] = [
  GroupDisplayModule,
  ProductSliderHorizonModule,
  ProductSliderModule,
  CheckoutTimePipeModule,
];

import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    LandingPageServiceModules,
    ...shared,
    StoreModule.forFeature('landingPage', reducer),
    EffectsModule.forFeature(effects),
    RouterModule,
  ],
})
export class LandingPageModule {}
