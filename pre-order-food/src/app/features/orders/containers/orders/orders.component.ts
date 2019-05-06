import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Observable } from 'rxjs';
import { Order } from '@app/core/models/order.model';

@Component({
  selector: 'order-orders',
  template: `
    <div class="container" style="margin-top:25px">
      <h1>สถานะการจัดส่ง</h1>
      <hr />
      <div class="row">
        <div *ngFor="let order of orders$ | async" class="col-md-4">
          <shared-product-card [product]="order.preOrder">
            <order-order-card-detail
              [order]="order"
              (cancel)="onCancel($event)"
            ></order-order-card-detail>
          </shared-product-card>
        </div>
        <div *ngIf="!(orders$ | async)?.length" class="col-md-12">
          <p style="text-align: center;">ไม่มีรายการออเดอร์</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  constructor(
    private store: Store<fromCoreStore.CoreState>,
    private title: Title
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromCoreStore.LoadOrdersByOwner());
    this.orders$ = this.store.select(fromCoreStore.getAllOrders);

    this.setTitle();
  }

  onCancel(e: Order) {
    const cancel = confirm('ต้องการยกเลิกออเดอร์');
    if (cancel) {
      this.store.dispatch(new fromCoreStore.CancelOrderById(e._id));
    }
  }

  private setTitle() {
    this.title.setTitle('สถานะการจัดส่ง - Pre-order Hub');
  }
}
