import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { PreOrders } from '@app/core/models/pre-order.model';

@Component({
  selector: 'product-hero',
  template: `
    <div class="product" *ngIf="preOrder.product.imagesUrl[0] as i">
      <div
        class="product_background product_background_filter "
        [style.background-image]="trustUrl(i.url)"
      >
        <div class="product_panel">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  @Input() preOrder: PreOrders;

  constructor(private sanitization: DomSanitizer) {}

  ngOnInit() {}

  trustUrl(url) {
    return this.sanitization.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
