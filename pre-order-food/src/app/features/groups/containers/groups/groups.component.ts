import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import * as fromCoreStore from '@app/core/store';
import { Observable } from 'rxjs';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groups$: Observable<Group[]>;

  constructor(
    private store: Store<fromCoreStore.CoreState>,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.groups$ = this.store.select(fromCoreStore.getAllGroups);
    this.title.setTitle('กลุ่มหมู่บ้าน | Pre-order Food');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Pre-order food เป็นเว็บช่วยให้พรีออเดอร์อาหารในกลุ่มหมู่บ้านเป็นเรื่องง่าย',
      },
    ]);
  }
}
