import { NgModule } from '@angular/core';

import { CheckoutTimePipe } from './checkout-time.pipe';

@NgModule({
  declarations: [CheckoutTimePipe],
  exports: [CheckoutTimePipe],
})
export class CheckoutTimePipeModule {}
