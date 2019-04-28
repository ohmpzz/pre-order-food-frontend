import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Community } from '../../models/community.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members$: Observable<any>;
  users$: Observable<User[]>;
  constructor(private store: Store<fromStore.CommuState>) {}

  ngOnInit() {
    this.members$ = this.store.select(fromStore.getMembersSelectedGroup);
    this.users$ = this.store.select(fromStore.getUsersFromSearch);
  }

  onSearch(q) {
    this.store.dispatch(new fromStore.Search(q));
  }

  onAdd({ email }) {
    this.store
      .select(fromStore.getSelectedGroup)
      .pipe(take(1))
      .subscribe((group: Community) => {
        this.store.dispatch(new fromStore.AddMember({ id: group._id, email }));
      });
  }

  onRemove({ memberId }) {
    const remove = confirm('Are you sure?');
    if (remove) {
      this.store
        .select(fromStore.getSelectedGroup)
        .pipe(take(1))
        .subscribe((group: Community) => {
          this.store.dispatch(
            new fromStore.RemoveMember({ id: group._id, memberId })
          );
        });
    }
  }
}
