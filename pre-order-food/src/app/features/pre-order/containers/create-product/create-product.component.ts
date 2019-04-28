import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CreateProduct } from '@app/core/models/product.model';
import { MediaService } from '../../services/media.service';
import { ProductsService } from '../../services/products.service';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import * as fromRouterStore from '@app/store'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pre-order-create-product',
  template: `
    <div class="container" style="margin-top: 25px;">
      <div class="row justify-content-center">
        <div class="col-6">
          <h1>เพิ่มสินค้า</h1>
          <pre-order-product-form
            [imagesPath$]="imagesPath$"
            (create)="onCreate($event)"
            (files)="onUpload($event)"
          ></pre-order-product-form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./create-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductComponent implements OnInit {
  imagesPath$ = new BehaviorSubject<any>([]);

  constructor(
    private store: Store<fromCoreStore.CoreState>,
    private mediaService: MediaService,
    private productService: ProductsService
  ) {}

  ngOnInit() {}

  onCreate(e: CreateProduct) {
    console.log(e);
    this.store.select(fromCoreStore.getUserEntities).subscribe(res => {
      if (res) {
        this.productService
          .createProduct({ ...e, ownerId: res.uid })
          .subscribe();
          this.store.dispatch(new fromRouterStore.Back())
      } else {
        return alert('error, please sign in');
      }
    });
  }

  onUpload(e) {
    this.mediaService.uploadProductImg(e).subscribe(res => {
      console.log(res);
      this.imagesPath$.next(res);
    });
  }
}
