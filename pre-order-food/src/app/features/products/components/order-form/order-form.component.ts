import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { PreOrders } from '@app/core/models/pre-order.model';
import { AuthData } from '@app/core/models/auth.model';
import { CreateOrder } from '@app/core/models/order.model';

@Component({
  selector: 'product-order-form',
  template: `
    <div class="order_form">
      <form [formGroup]="form">
        <h4>จองอาหาร</h4>
        <p>
          <mat-form-field
            appearance="outline"
            [floatLabel]="true"
            [color]="'accent'"
            class="order_form_field"
          >
            <mat-label>ชื่อ*</mat-label>
            <input matInput type="text" formControlName="name" name="name" />
          </mat-form-field>
        </p>
        <p>
          <mat-form-field
            appearance="outline"
            [floatLabel]="true"
            [color]="'accent'"
            class="order_form_field"
          >
            <mat-label>เบอร์โทรศัพท์*</mat-label>
            <input
              matInput
              type="text"
              formControlName="phoneNumber"
              name="phoneNumber"
            />
          </mat-form-field>
        </p>
        <p>
          <mat-form-field
            appearance="outline"
            [floatLabel]="true"
            [color]="'accent'"
            class="order_form_field"
          >
            <mat-label>อีเมล*</mat-label>
            <input
              matInput
              type="text"
              formControlName="email"
              name="orderEmail"
            />
          </mat-form-field>
        </p>
        <label>จำนวน*</label>
        <p>
          <button
            type="button"
            class="btn btn-dark order_form_qty"
            (click)="decreaseQty()"
          >
            &minus;
          </button>
          <span class="qty">{{ qty }}</span>
          <button
            type="button"
            class="btn btn-dark order_form_qty"
            (click)="increaseQty()"
          >
            +
          </button>
        </p>
        <p>ราคารวม ฿{{ qty * preOrder.price }}</p>
        <mat-hint
          >จำนวนที่เหลือ {{ preOrder.quantity + qty }}/{{
            preOrder.quantityLimit
          }}</mat-hint
        >
        <p>
          <mat-form-field
            appearance="outline"
            [floatLabel]="true"
            [color]="'accent'"
            class="order_form_field"
          >
            <mat-label>ที่อยู่*</mat-label>
            <textarea
              matInput
              type="text"
              cdkTextareaAutosize
              formControlName="address"
              cdkAutosizeMinRows="4"
              cdkAutosizeMaxRows="6"
              name="orderAddress"
            ></textarea>
          </mat-form-field>
        </p>

        <p>"กดสั่งจอง" ยอมรับเงื่อนไขและข้อตกลงการสั่งจอง</p>
        <p>
          <button
            type="submit"
            class="btn btn-dark order_form_btn_order"
            (click)="createOrder(form)"
            [disabled]="form.invalid"
          >
            สั่งจอง
          </button>
        </p>
      </form>
    </div>
  `,
  styleUrls: ['./order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// todo เพิ่ม error message ให้ form
export class OrderFormComponent implements OnInit {
  @Input() preOrder: PreOrders;
  @Input() user: AuthData = null;

  @Output() create = new EventEmitter<CreateOrder>();

  qty: number = 1;
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.maxLength(500)]],
  });

  get remainQty() {
    return this.preOrder.quantityLimit - this.preOrder.quantity;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.user) {
      console.log(this.user);
      this.form.patchValue({
        name: this.user.name,
        email: this.user.email,
      });
    }
  }

  createOrder(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.create.emit({
        ...value,
        preOrderId: this.preOrder._id,
        userId: this.user.uid,
        quantity: this.qty.toString(),
      });
    }
  }

  increaseQty() {
    if (this.qty < this.remainQty) {
      this.qty++;
    }
  }

  decreaseQty() {
    if (this.qty > 1) {
      this.qty--;
    }
  }
}
