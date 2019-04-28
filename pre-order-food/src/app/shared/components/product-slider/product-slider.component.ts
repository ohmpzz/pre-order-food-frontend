import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { PreOrders } from '@app/core/models/pre-order.model';

@Component({
  selector: 'shared-product-slider',
  template: `
    <div *ngIf="product as i" class="card box-shadow">
      <img
        class="card-img-top card_img"
        [src]="i.product.imagesUrl[0].url"
        [alt]="i.product.imagesUrl[0].title"
      />
      <div class="card-body">
        <div class="row">
          <div class="col-md-8">
            <h5 class="card-title" style="font: 14px">
              {{ i.product.title | titlecase }}
            </h5>
          </div>
          <div class="col-md-4">
            <h5 style="color:#ec6184; float: right;">฿ {{ i.price }}</h5>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-12">
              <p style="font-size: 12px;">
                <span style="margin-right: 10px">
                  <i class="fas fa-map-marker-alt" style="color:#077f7b"></i>
                </span>
                {{ i.group.title }}
              </p>
              <p style="font-size: 12px;">
                <span style="margin-right: 10px">
                  <i class="fas fa-utensils" style="color:#077f7b"></i>
                </span>
                จัดส่ง {{ i.checkoutTime | checkoutTime }}
              </p>
            </div>
            <div class="col-md-12">
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent implements OnInit {
  @Input() product: PreOrders;
  constructor() {}

  ngOnInit() {}
}
