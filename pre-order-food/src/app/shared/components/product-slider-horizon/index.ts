import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSliderHorizonComponent } from './product-slider-horizon.component';

@NgModule({
  declarations: [ProductSliderHorizonComponent],
  imports: [CommonModule],
  exports: [ProductSliderHorizonComponent],
})
export class ProductSliderHorizonModule {}

export * from './product-slider-horizon.component';
