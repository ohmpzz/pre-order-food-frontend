import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Order } from '@app/core/models/order.model';

@Component({
  selector: 'pre-order-order-detail-modal',
  template: `
    <div *ngIf="order as i">
      <div class="modal-body">
        <button
          type="button"
          class="close"
          aria-label="Close"
          (click)="activeModal.dismiss('Cross click')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h5 style="margin-bottom: 15px">
          ข้อมูลผู้สั่ง
          <span
            *ngIf="order.isCanceled"
            style="float: right; color: red; font-size: 14px; margin-right: 10px;"
          >
            ยกเลิกออเดอร์</span
          >
        </h5>
        <p>ชื่อ: {{ i.name }}</p>
        <p>เบอร์โทร: {{ i.phoneNumber }}</p>
        <p>อีเมล: {{ i.email }}</p>
        <p>ที่อยู่: {{ i.address }}</p>
        <form [formGroup]="form">
          <div>
            <mat-form-field appearance="outline">
              <mat-label>สถานะจัดส่ง</mat-label>
              <select
                matNativeControl
                formControlName="status"
                [disabled]="order.isCanceled"
              >
                <option value="รับออเดอร์แล้ว">รับออเดอร์แล้ว</option>
                <option value="จัดส่ง">จัดส่ง</option>
                <option value="ยกเลิกออเดอร์">ยกเลิกออเดอร์</option>
              </select>
            </mat-form-field>
          </div>
          <br />
          <button
            type="submit"
            class="btn btn-green-pine"
            [disabled]="order.isCanceled"
            (click)="updateOrder(form)"
          >
            บันทึกออเดอร์
          </button>
        </form>
        <br />
      </div>
    </div>
  `,
  styleUrls: ['./order-detail-modal.component.scss'],
})
export class OrderDetailModalComponent implements OnInit {
  @Input() order: Order;

  form = this.fb.group({
    status: ['', Validators.pattern('^(รับออเดอร์แล้ว|ยกเลิกออเดอร์|จัดส่ง)$')],
  });
  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit() {
    this.form.patchValue({
      status: this.order.status,
    });
  }

  updateOrder(form: FormGroup) {
    const { valid, value } = form;
    const confirm = window.confirm('ยืนยันการเปลี่ยนแปลงสถานะ');
    if (valid && confirm && !this.order.isCanceled) {
      this.activeModal.close({ ...this.order, ...value });
    }
  }
}
