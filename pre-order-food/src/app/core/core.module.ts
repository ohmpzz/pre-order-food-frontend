import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  NgbDropdownModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import * as fromComponents from './components';

import * as fromServices from './services';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NgbDropdownModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),
    RouterModule,
    FacebookModule.forRoot(),
    NgbCollapseModule,
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  providers: [Meta, Title, ...fromServices.services],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
