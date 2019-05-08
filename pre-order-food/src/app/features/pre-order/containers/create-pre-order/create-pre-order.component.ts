import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import * as moment from 'moment';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Observable } from 'rxjs';
import { Product } from '@app/core/models/product.model';

import * as fromServices from '../../services';
import { Community } from '../../models/community';
import { AuthData } from '@app/core/models/auth.model';

const PRE_ORDER_FORMATS = {
  parse: {
    dateInput: moment().format(),
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'pre-order-create-pre-order',
  template: `
    <div class="container" style="margin-top:15px;">
      <form [formGroup]="form" style="margin-bottom: 25px;">
        <h2>
          รายการสินค้า
          <a
            class="btn btn-green-pine"
            style="float:right;"
            [routerLink]="['../new-product']"
          >
            เพิ่มสินค้า
          </a>
        </h2>
        <hr />
        <pre-order-products
          [products]="product$ | async"
          (remove)="onRemoveProduct($event)"
          formControlName="productId"
        ></pre-order-products>

        <h2>กลุ่มหมู่บ้าน</h2>
        <hr />
        <pre-order-communities
          [communities]="community$ | async"
          formControlName="groups"
        >
        </pre-order-communities>
        <h2>เปิดพรีออเดอร์</h2>
        <hr />
        <div class="row" formGroupName="orderTime">
          <div class="col-12">
            <mat-form-field class="input_width" appearance="outline">
              <mat-label>เวลาเปิดรับออเดอร์</mat-label>
              <input
                matInput
                [matDatepicker]="start"
                [min]="today"
                formControlName="start"
                (dateChange)="setOrderTimeStart($event)"
              />
              <mat-datepicker-toggle
                matSuffix
                [for]="start"
              ></mat-datepicker-toggle>
              <mat-datepicker #start [startAt]="today"></mat-datepicker>
            </mat-form-field>
          </div>
          <div class="col-12">
            <mat-form-field class="input_width" appearance="outline">
              <mat-label>เวลาปิดรับออเดอร์</mat-label>
              <input
                matInput
                [matDatepicker]="end"
                [min]="orderTimeStartValue"
                formControlName="end"
                (dateChange)="setOrderTimeEnd($event)"
              />
              <mat-datepicker-toggle
                matSuffix
                [for]="end"
              ></mat-datepicker-toggle>
              <mat-datepicker #end></mat-datepicker>
            </mat-form-field>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <mat-form-field class="input_width" appearance="outline">
              <mat-label>เวลาส่งอาหาร</mat-label>
              <input
                matInput
                [matDatepicker]="checkoutTime"
                [min]="orderTimeEndValue"
                formControlName="checkoutTime"
                (dateChange)="setCheckoutTime($event)"
              />
              <mat-datepicker-toggle
                matSuffix
                [for]="checkoutTime"
              ></mat-datepicker-toggle>
              <mat-datepicker #checkoutTime></mat-datepicker>
            </mat-form-field>
          </div>
          <div class="col-12">
            <mat-form-field class="input_width" appearance="outline">
              <mat-label>ราคาต่อออเดอร์</mat-label>
              <input matInput formControlName="price" />
              <span matSuffix>฿</span>
            </mat-form-field>
          </div>
          <div class="col-12">
            <mat-form-field class="input_width" appearance="outline">
              <mat-label>จำนวนออเดอร์</mat-label>
              <input matInput formControlName="quantityLimit" />
              <span matSuffix>ออเดอร์</span>
            </mat-form-field>
          </div>
          <div class="col-12">
            <button
              type="submit"
              class="btn btn-green-pine"
              (click)="onCreate(form)"
            >
              เปิดพรีออเดอร์
            </button>
          </div>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./create-pre-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: moment().locale('th') },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: PRE_ORDER_FORMATS,
    },
  ],
})
export class CreatePreOrderComponent implements OnInit {
  product$: Observable<Product[]>;
  community$: Observable<Community[]>;
  today = moment().format();

  isProductCollapsed: boolean = true;
  user: AuthData;
  form = this.fb.group({
    checkoutTime: ['', Validators.required],
    quantityLimit: [1, Validators.min(1)],
    quantity: 0,
    groups: [[]],
    orderTime: this.fb.group({
      end: moment().format(),
      start: [moment().format()],
    }),
    price: [0, Validators.min(1)],
    productId: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCoreStore.CoreState>,
    private preOrderService: fromServices.PreOrderService,
    private router: Router
  ) {}

  get orderTimeStartValue() {
    return this.form.get('orderTime.start').value;
  }
  get orderTimeEndValue() {
    return this.form.get('orderTime.end').value;
  }

  ngOnInit() {
    this.store.select(fromCoreStore.getUserEntities).subscribe(res => {
      this.store.dispatch(new fromCoreStore.LoadProducts(res.uid));
      this.user = res;
    });
    this.store.dispatch(new fromCoreStore.LoadOwnerGroups());
    this.product$ = this.store.select(fromCoreStore.getAllProducts);
    this.community$ = this.store.select(fromCoreStore.getAllGroups);

    this.form.get('orderTime.start').valueChanges.subscribe(res => {
      this.form.get('orderTime.end').patchValue(
        moment(res)
          .add(1, 'days')
          .format()
      );
    });
  }

  onCreate(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.preOrderService
        .createPreOrder({
          ...value,
          price: parseFloat(value.price),
          quantityLimit: parseInt(value.quantityLimit),
          ownerId: this.user.uid,
        })
        .subscribe((res: any) => {
          if (res.success) {
            this.router.navigate(['/preorders']);
          }
        });
    }
  }

  onRemoveProduct(e: Product) {
    const remove = confirm(`ต้องการลบ ${e.title}`);
    if (remove) {
      this.store.dispatch(new fromCoreStore.RemoveProductById(e));
    }
  }

  setOrderTimeStart(e) {
    this.form.get('orderTime.start').patchValue(moment(e.value).format());
  }
  setOrderTimeEnd(e) {
    this.form.get('orderTime.end').patchValue(moment(e.value).format());
  }
  setCheckoutTime(e) {
    this.form.get('checkoutTime').patchValue(moment(e.value).format());
  }
}
