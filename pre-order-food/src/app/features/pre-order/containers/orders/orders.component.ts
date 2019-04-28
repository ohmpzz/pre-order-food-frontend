import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Order } from '@app/core/models/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'pre-order-orders',
  template: `
    <div class="container">
      <h1 style="margin: 15px 0;">
        รายการออเดอร์
      </h1>
      <pre-order-orders-table
        [orders]="orders$ | async"
        (update)="onUpdate($event)"
      ></pre-order-orders-table>
    </div>
  `,
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  constructor(
    private store: Store<fromCoreStore.CoreState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res);
      if (res) {
        this.store.dispatch(new fromCoreStore.LoadOrders(res.preorderId));
      }
    });
    this.orders$ = this.store.select(fromCoreStore.getAllOrders);
  }

  onUpdate(e: Order) {
    this.store.dispatch(new fromCoreStore.UpdateOrderById(e));
  }
}
