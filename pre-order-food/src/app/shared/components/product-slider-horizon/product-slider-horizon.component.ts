import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PreOrders } from '@app/core/models/pre-order.model';

@Component({
  selector: 'shared-product-slider-horizon',
  template: `
    <div *ngIf="product as i" class="card box-shadow">
      <div class="row">
        <div class="col-7">
          <div class="card-body">
            <h5 class="card-title">
              {{ i.product.title | titlecase }}
            </h5>
            <h5 style="color:#ec6184; font-size: 15px">฿{{ i.price }}</h5>
            <ng-content></ng-content>
          </div>
        </div>
        <div class="col-5">
          <img
            class="card-img-top card_img_child rounded float-right"
            [src]="i.product.imagesUrl[0].url"
            [alt]="i.product.imagesUrl[0].title"
            [title]="i.product.imagesUrl[0].title"
          />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-slider-horizon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderHorizonComponent {
  @Input() product: PreOrders;
}
