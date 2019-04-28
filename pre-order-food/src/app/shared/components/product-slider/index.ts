import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutTimePipeModule } from '../../pipes';

import { ProductSliderComponent } from './product-slider.component';

@NgModule({
  declarations: [ProductSliderComponent],
  imports: [CommonModule, CheckoutTimePipeModule],
  exports: [ProductSliderComponent],
})
export class ProductSliderModule {}

export * from './product-slider.component';
