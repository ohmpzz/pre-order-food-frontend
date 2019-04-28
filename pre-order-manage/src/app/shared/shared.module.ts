import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

const bootstraps: any[] = [NgbTypeaheadModule, NgbModalModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, ...bootstraps],
  exports: [ReactiveFormsModule, ...bootstraps],
})
export class SharedModule {}
