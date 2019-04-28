import {
  Component,
  forwardRef,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Product } from '../../models/product';

const PRODUCTS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProductsComponent),
  multi: true,
};

@Component({
  selector: 'pre-order-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PRODUCTS_ACCESSOR],
  template: `
    <div class="row">
      <div *ngFor="let i of (products | slice: 0:3)" class="col-md-4">
        <div
          class="card box-shadow check"
          (click)="selectProduct(i._id)"
          [class.active]="existsInProducts(i._id)"
        >
          <img
            class="card-img-top card_img"
            [src]="i.imagesUrl[0].url"
            [alt]="i.imagesUrl[0].title"
          />
          <div class="card-body">
            <h5 class="card-title" style="font: 14px">
              {{ i.title | titlecase }}
            </h5>
            <p class="card-text">
              {{ i.description }}
            </p>
          </div>
        </div>
      </div>

      <div
        id="productCollapsed"
        [ngbCollapse]="isCollapsed"
        *ngFor="let i of (products | slice: 3)"
        class="col-md-4"
      >
        <div
          class="card box-shadow check"
          (click)="selectProduct(i._id)"
          [class.active]="existsInProducts(i._id)"
        >
          <img
            class="card-img-top card_img"
            [src]="i.imagesUrl[0].url"
            [alt]="i.imagesUrl[0].title"
          />
          <div class="card-body">
            <h5 class="card-title" style="font: 14px">
              {{ i.title | titlecase }}
            </h5>
            <p class="card-text">
              {{ i.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <p>
      <button
        type="button"
        class="btn btn-outline-primary"
        (click)="isCollapsed = !isCollapsed"
        [attr.aria-expanded]="!isCollapsed"
        aria-controls="productCollapsed"
      >
        {{ isCollapsed ? 'ดูทั้งหมด' : 'ปิด' }}
      </button>
    </p>
  `,
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements ControlValueAccessor {
  @Input() products: Product[] = [];

  isCollapsed: boolean = true;
  value: string = null;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  selectProduct(productId: string) {
    this.value = productId;
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInProducts(productId: string) {
    return this.value == productId;
  }
}
