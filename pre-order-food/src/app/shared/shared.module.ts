import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbCollapseModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const bootstrap: any[] = [
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbCollapseModule,
  NgbModule,
];

const material: any[] = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMomentDateModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule,
    ...material,
    ...bootstrap,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule,
    ...material,
    ...bootstrap,
  ],
})
export class SharedModule {}
