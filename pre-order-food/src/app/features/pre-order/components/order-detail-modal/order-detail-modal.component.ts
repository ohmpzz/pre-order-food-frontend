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
        <p><strong>ชื่อ:</strong> {{ i.name }}</p>
        <p><strong>เบอร์โทร:</strong> {{ i.phoneNumber }}</p>
        <p><strong>อีเมล:</strong> {{ i.email }}</p>
        <p><strong>ที่อยู่:</strong> {{ i.address }}</p>
        <p>
          <span><strong>จำนวนออเดอร์:</strong> {{ i.quantity }}</span>
          <span style="margin-left: 20px;">
            <strong>ราคาทั้งหมด:</strong> {{ i.quantity * i.preOrder.price }}
          </span>
        </p>
        <p><strong>สถานะ:</strong> {{ i.status }}</p>
        <hr />
        <p><strong>เปลี่ยนสถานะ</strong></p>
        <div class="row">
          <div class="col-4" style="text-align: center">
            <button
              type="button"
              class="btn btn-green-pine"
              (click)="updateOrderStatus('รับออเดอร์แล้ว')"
              [disabled]="i.isCanceled"
            >
              รับออเดอร์แล้ว
            </button>
          </div>
          <div class="col-4" style="text-align: center">
            <button
              type="button"
              class="btn btn-green-pine"
              (click)="updateOrderStatus('จัดส่ง')"
              [disabled]="i.isCanceled"
            >
              จัดส่ง
            </button>
          </div>
          <div class="col-4" style="text-align: center">
            <button
              class="btn btn-danger"
              (click)="updateOrderStatus('ยกเลิกออเดอร์')"
              [disabled]="i.isCanceled"
            >
              ยกเลิกออเดอร์
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  `,
  styleUrls: ['./order-detail-modal.component.scss'],
})
export class OrderDetailModalComponent implements OnInit {
  @Input() order: Order;
  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit() {}

  updateOrderStatus(status: string) {
    const regex = /^(รับออเดอร์แล้ว|จัดส่ง|ยกเลิกออเดอร์)$/;
    if (regex.test(status)) {
      const order = { ...this.order, status };
      this.activeModal.close(order);
    }
  }

  updateOrder(form: FormGroup) {
    const { valid, value } = form;
    const confirm = window.confirm('ยืนยันการเปลี่ยนแปลงสถานะ');
    if (valid && confirm && !this.order.isCanceled) {
      this.activeModal.close({ ...this.order, ...value });
    }
  }
}
