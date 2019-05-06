import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import * as moment from 'moment';
import { Order } from '@app/core/models/order.model';
@Component({
  selector: 'order-order-card-detail',
  template: `
    <div *ngIf="order as i">
      <div class="row">
        <div class="col-md-8">
          <h5 class="card-title" style="font: 14px">
            {{ i.preOrder.product.title | titlecase }}
          </h5>
        </div>
        <div class="col-md-4">
          <h5 style="color:#ec6184; float: right;">
            ฿ {{ i.preOrder.price * i.quantity }}
          </h5>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-12">
            <p style="font-size: 12px;">
              <span style="margin-right: 10px">
                <i class="fas fa-map-marker-alt" style="color:#077f7b"></i>
              </span>
              {{ i.preOrder.group.title }}
            </p>
            <p style="font-size: 12px;">
              <span style="margin-right: 10px">
                <i class="fas fa-utensils" style="color:#077f7b"></i>
              </span>
              จัดส่ง {{ i.preOrder.checkoutTime | checkoutTime }}
            </p>
            <p style="font-size: 12px;">
              <span style="margin-right: 10px">
                <i class="fas fa-user-alt" style="color:#077f7b"></i>
              </span>
              {{ i.preOrder.product.owner.name }}
            </p>
            <p style="font-size: 12px;">
              <span style="margin-right: 10px">
                <i class="fas fa-phone" style="color:#077f7b"></i>
              </span>
              {{ i.preOrder.product.owner.phoneNumber }}
            </p>
            <p style="font-size: 12px;">
              <span style="margin-right: 10px">
                <i class="fas fa-truck" style="color:#077f7b"></i>
              </span>
              {{ i.status }}
            </p>
          </div>
          <div *ngIf="canCancel" class="col-md-12">
            <a
              class="btn btn-green-pine"
              style="font-size: 12px;"
              (click)="cancelOrder()"
            >
              <span style="margin-right: 10px">
                <i class="fas fa-window-close"></i>
              </span>
              ยกเลิกออเดอร์
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./order-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCardDetailComponent implements OnInit {
  @Input() order: Order;
  @Output() cancel = new EventEmitter<Order>();

  get canCancel() {
    if (!this.order.isCanceled && this.order.status == 'รับออเดอร์แล้ว') {
      return (
        moment().format(this.order.preOrder.orderTime.end) > moment().format()
      );
    }
    return false;
  }

  constructor() {}

  ngOnInit() {}

  cancelOrder() {
    this.cancel.emit({ ...this.order });
  }
}
