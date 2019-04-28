import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PreOrderService } from '../../services';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Observable } from 'rxjs';
import { PreOrders } from '../../models/pre-order';

@Component({
  selector: 'pre-order-pre-orders',
  template: `
    <div class="container">
      <h1 style="margin: 15px 0;">
        รายการเปิดพรีออเดอร์
      </h1>
    </div>
    <pre-order-table
      [preOrder]="preOrder$"
      (remove)="onRemove($event)"
    ></pre-order-table>
  `,
  styleUrls: ['./pre-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreOrdersComponent implements OnInit {
  preOrder$: Observable<PreOrders[]>;

  filter = new FormControl('');

  constructor(private store: Store<fromCoreStore.CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new fromCoreStore.LoadPreOrdersByOwner());
    this.preOrder$ = this.store.select(fromCoreStore.getAllPreOrders);
  }

  onRemove(e: PreOrders) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      console.log(e);
      this.store.dispatch(new fromCoreStore.RemovePreOrderByOwner(e));
    }
  }
}
