import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { PreOrders } from '@app/core/models/pre-order.model';

@Component({
  selector: 'product-album',
  template: `
    <div class="album">
      <img
        *ngFor="let i of (preOrder.product.imagesUrl | slice: 0:3)"
        [src]="i.url"
        [alt]="i.title"
        class="img-thumbnail"
      />
    </div>
  `,
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// todo กดรูปแล้วแสดงรูปใหญ่
export class AlbumComponent implements OnInit {
  @Input() preOrder: PreOrders;
  constructor() {}

  ngOnInit() {}
}
