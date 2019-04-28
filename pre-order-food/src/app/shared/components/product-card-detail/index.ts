import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutTimePipeModule } from '../../pipes';

import { ProductCardDetailComponent } from './product-card-detail.component';

@NgModule({
  declarations: [ProductCardDetailComponent],
  imports: [CommonModule, CheckoutTimePipeModule],
  exports: [ProductCardDetailComponent],
})
export class ProductCardDetailModule {}

export * from './product-card-detail.component';
