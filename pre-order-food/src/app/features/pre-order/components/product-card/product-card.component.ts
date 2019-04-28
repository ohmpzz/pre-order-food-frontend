import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'pre-order-product-card',
  template: `
    <div *ngIf="product as i" class="card box-shadow check">
      <img
        class="card-img-top card_img"
        [src]="i.imagesUrl[0].url"
        [alt]="i.imagesUrl[0].title"
      />
      <div class="card-body">
        <h5 class="card-title" style="font: 14px">
          {{ i.title | titlecase }}
        </h5>
        <p class="card-text">
          {{ i.description }}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {}
}
