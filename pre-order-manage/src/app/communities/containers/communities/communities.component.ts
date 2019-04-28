import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../store';
import * as fromRoot from '@app/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Community } from '../../models/community.model';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
})
export class CommunitiesComponent implements OnInit {
  groups$: Observable<Community[]>;
  mocks: Community[];

  constructor(private store: Store<fromStore.CommuState>) {}

  ngOnInit() {
    this.groups$ = this.store.select(fromStore.getAllGroups);
    this.mocks = [
      {
        _id: '1',
        title: 'หมู่บ้านจำลอง',
        description: `This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.`,
      },
      {
        _id: '2',
        title: 'หมู่บ้านจำลอง',
        description: `This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.`,
      },
      {
        _id: '3',
        title: 'หมู่บ้านจำลอง',
        description: `This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.`,
      },
    ];
  }

  onEditRoute(event: { _id: string }) {
    this.store.dispatch(
      new fromRoot.Go({
        path: ['community', event._id],
      })
    );
  }
  onViewRoute(event: { _id: string }) {
    this.store.dispatch(
      new fromRoot.Go({
        path: ['community', event._id],
      })
    );
  }
}
