import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Community } from '../../models/community.model';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-community-item',
  templateUrl: './community-item.component.html',
  styleUrls: ['./community-item.component.css'],
})
export class CommunityItemComponent implements OnInit {
  users$: Observable<User[]>;
  community$: Observable<Community>;
  fileUrl$: Observable<any> = null;

  constructor(private store: Store<fromStore.CommuState>) {}

  ngOnInit() {
    this.community$ = this.store.select(fromStore.getSelectedGroup);
    this.fileUrl$ = this.store.select(fromStore.getUploadEntities);
    this.users$ = this.store.select(fromStore.getUsersFromSearch);
  }

  onAddMember(event: User) {
    this.community$
      .subscribe((commu: Community) => {
        if (commu) {
          const addUser = {
            groupId: commu._id,
            userId: event.uid,
          };
          console.log(addUser);
          this.store.dispatch(new fromStore.AddMember(addUser));
        }
      })
      .unsubscribe();
  }

  onFile(event) {
    console.log(event);
    this.store.dispatch(new fromStore.UploadCover(event));
  }

  onCreate(event: Community) {
    console.log(event);
    this.store.dispatch(new fromStore.CreateGroup(event));
  }

  onUpdate(event: Community) {
    console.log(event);
    this.store.dispatch(new fromStore.UpdateGroup(event));
  }

  onSearch(event) {
    this.store.dispatch(new fromStore.Search(event));
  }

  onRemove(event: Community) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      console.log(event);
      this.store.dispatch(new fromStore.RemoveGroup(event));
    }
  }

  onRemoveMember(event: User) {
    console.log(event);
    this.community$
      .subscribe((commu: Community) => {
        if (commu) {
          const removeUser = {
            groupId: commu._id,
            userId: event.uid,
          };
          this.store.dispatch(new fromStore.RemoveMember({ ...removeUser }));
        }
      })
      .unsubscribe();
  }
}
