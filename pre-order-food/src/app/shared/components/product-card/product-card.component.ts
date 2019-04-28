import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { PreOrders } from '@app/core/models/pre-order.model';

@Component({
  selector: 'shared-product-card',
  template: `
    <div *ngIf="product as i" class="card box-shadow">
      <img
        class="card-img-top card_img"
        [src]="i.product.imagesUrl[0].url"
        [alt]="i.product.imagesUrl[0].title"
      />
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() product: PreOrders;

  constructor() {}

  ngOnInit() {}
}
