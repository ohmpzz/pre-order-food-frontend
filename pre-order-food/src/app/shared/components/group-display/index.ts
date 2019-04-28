import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupDisplayComponent } from './group-display.component';

@NgModule({
  declarations: [GroupDisplayComponent],
  imports: [CommonModule],
  exports: [GroupDisplayComponent],
})
export class GroupDisplayModule {}

export * from './group-display.component';
