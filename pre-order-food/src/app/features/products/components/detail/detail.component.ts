import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { PreOrders } from '@app/core/models/pre-order.model';

@Component({
  selector: 'product-detail',
  template: `
    <div class="product_detail" *ngIf="preOrder as i">
      <h4>{{ i?.product.title }}</h4>
      <p class="product_detail_description">{{ i.product.description }}</p>
      <p class="product_detail_list">
        <span><mat-icon>money</mat-icon></span> ฿ {{ i.price }}
      </p>
      <p class="product_detail_list">
        <span><mat-icon>shopping_cart</mat-icon></span> เหลือ
        {{ i?.quantityLimit - i?.quantity }} ออเดอร์
      </p>
      <p class="product_detail_list">
        <span><mat-icon>location_on</mat-icon></span>
        พรีออเดอร์ใน {{ i?.group.title }}
      </p>
      <p class="product_detail_list">
        <span><mat-icon>account_circle</mat-icon></span>
        พรีออเดอร์โดย {{ i?.product.owner.name }}
      </p>
    </div>
  `,
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  @Input() preOrder: PreOrders;

  constructor() {}

  ngOnInit() {}
}
