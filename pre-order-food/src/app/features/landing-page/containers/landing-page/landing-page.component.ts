import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ProductsService } from '../../services/products.service';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Group } from '@app/features/groups/models/group.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  groups$: Observable<Group[]>;
  lastPreorder$: Observable<Product[]>;
  ownCommuPreorder$: Observable<Product[]>;
  user$: Observable<any>;

  constructor(
    private store: Store<fromCoreStore.CoreState>,
    private productService: ProductsService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.initTitle();
    this.initMetaTags();

    this.store.dispatch(new fromCoreStore.LoadOwnerGroups());

    this.user$ = this.store.select(fromCoreStore.getUserEntities);
    this.lastPreorder$ = this.productService.getAllPreOrders();
    this.ownCommuPreorder$ = this.productService.getOwnCommunityPreorder();
    this.groups$ = this.store.select(fromCoreStore.getAllGroups);
  }

  private initTitle() {
    this.title.setTitle('Pre-order Hub - รวบรวมพรีออเดอร์อาหารจากทุกหมู่บ้าน');
  }

  private initMetaTags() {
    this.meta.updateTag({
      name: 'description',
      content:
        'Pre-order Hub ศูนย์รวมพรีออเดอร์อาหารจากทุกหมู่บ้าน มีอาหารมากมายให้เลือกไม่ว่าจะเป็นร้านอาหารดังหรืออาหารทำเองมีให้เลือกหลากหลาย',
    });
  }
}
