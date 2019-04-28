import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

import { PreOrders } from '@app/core/models/pre-order.model';
import { AuthData } from '@app/core/models/auth.model';
import { CreateOrder } from '@app/core/models/order.model';

@Component({
  selector: 'product-item',
  template: `
    <product-hero [preOrder]="preOrder$ | async">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <product-detail [preOrder]="preOrder$ | async"></product-detail>
            <product-album [preOrder]="preOrder$ | async"></product-album>
          </div>
          <div class="col-6">
            <product-order-form
              [preOrder]="preOrder$ | async"
              [user]="user$ | async"
              (create)="onCreateOrder($event)"
            ></product-order-form>
          </div>
        </div>
      </div>
    </product-hero>
  `,
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent implements OnInit {
  preOrder$: Observable<PreOrders>;
  user$: Observable<AuthData>;

  constructor(
    private store: Store<fromCoreStore.CoreState>,
    private title: Title,
    private meta: Meta,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.preOrder$ = this.store.select(fromCoreStore.getSelectedPreOrder);
    this.user$ = this.store.select(fromCoreStore.getUserEntities);
    this.setMeta();
    this.setTitle();
  }

  onCreateOrder(e: CreateOrder) {
    console.log(e);
    this.productService.createOrder(e).subscribe(res => {
      alert('สั่งจองสำเร็จ');
    });
  }

  private setTitle() {
    this.preOrder$.subscribe((res: PreOrders) => {
      console.log(res);
      this.title.setTitle(`${res.product.title} จาก${res.group.title}`);
    });
  }

  private setMeta() {
    this.preOrder$.subscribe((res: PreOrders) => {
      this.meta.updateTag({
        name: 'description',
        content: `${res.product.title} ราคา ${res.price} ${
          res.product.description
        }`,
      });
    });
  }
}
