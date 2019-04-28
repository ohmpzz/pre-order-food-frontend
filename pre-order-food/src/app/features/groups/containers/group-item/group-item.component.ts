import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMemberComponent } from '../../components/add-member/add-member.component';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Observable } from 'rxjs';
import { Product } from '@app/core/models/product.model';
import { Group } from '@app/features/groups/models/group.model';
import { AuthData } from '@app/core/models/auth.model';

@Component({
  selector: 'group-group-item',
  template: `
    <div class="container" style="margin-top:25px">
      <div *ngIf="(group$ | async) as i">
        <h1>{{ i.title }}</h1>
        <group-add-member
          [users$]="users$"
          (search)="onSearch($event)"
          (create)="onAddMember($event)"
        ></group-add-member>
        <hr />
      </div>

      <div class="row">
        <div *ngFor="let product of (products$ | async)" class="col-md-4">
          <shared-product-card [product]="product">
            <shared-product-card-detail [product]="product">
              <a
                [routerLink]="['/p', product.slug]"
                class="btn btn-green-pine"
                style="font-size: 12px;"
              >
                <span style="margin-right: 10px">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                พรีออเดอร์
              </a>
            </shared-product-card-detail>
          </shared-product-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./group-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupItemComponent implements OnInit {
  group$: Observable<Group>;
  products$: Observable<Product[]>;
  users$: Observable<AuthData[]>;

  constructor(
    private store: Store<fromCoreStore.CoreState>,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.group$ = this.store.select(fromCoreStore.getSelectedGroup);
    this.products$ = this.store.select(fromCoreStore.getAllPreOrders);

    this.users$ = this.store.select(fromCoreStore.getUsersFromSearch);

    this.initTitle();
    this.initMetaTags();
  }

  onAddMember(e: AuthData) {
    // add user
    // update phoneNumber user
    console.log(e);
    this.group$.subscribe(res => {
      if (res) {
        this.store.dispatch(
          new fromCoreStore.AddMember({ groupId: res._id, userId: e.uid })
        );
        this.store.dispatch(new fromCoreStore.AddPhoneNumber(e));
      }
    });
  }

  onSearch(event) {
    this.store.dispatch(new fromCoreStore.Search(event));
  }

  private initTitle() {
    this.title.setTitle('Pre-order Hub - รวบรวมพรีออเดอร์อาหารจากทุกหมู่บ้าน');
  }

  private initMetaTags() {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Pre-order Hub ศูนย์รวมพรีออเดอร์อาหารจากทุกหมู่บ้าน มีอาหารมากมายให้เลือกไม่ว่าจะเป็นร้านอาหารดังหรืออาหารทำเองมีให้เลือกหลากหลาย',
      },
    ]);
  }
}
