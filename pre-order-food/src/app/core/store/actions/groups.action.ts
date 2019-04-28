import { Action } from '@ngrx/store';

import { Group } from '../../models/group.model';

export enum GroupsActionTypes {
  AddMember = '[Core] Add Member',
  AddMemberFail = '[Core] Add Member Fail',
  AddMemberSuccess = '[Core] Add Member Success',
  LoadGroups = '[Core] Load Groups',
  LoadGroupsFail = '[Core] Load Groups Fail',
  LoadGroupsSuccess = '[Core] Load Groups Success',
  LoadGroupById = '[Core] Load Group By Id',
  LoadGroupByIdFail = '[Core] Load Group By Id Fail',
  LoadGroupByIdSuccess = '[Core] Load Group By Id Success',
}

export class LoadGroups implements Action {
  readonly type = GroupsActionTypes.LoadGroups;
}

export class LoadGroupsFail implements Action {
  readonly type = GroupsActionTypes.LoadGroupsFail;
  constructor(public payload: any) {}
}

export class LoadGroupsSuccess implements Action {
  readonly type = GroupsActionTypes.LoadGroupsSuccess;
  constructor(public payload: Group[]) {}
}

// load group by id
export class LoadGroupById implements Action {
  readonly type = GroupsActionTypes.LoadGroupById;
  constructor(public payload: any) {}
}
export class LoadGroupByIdFail implements Action {
  readonly type = GroupsActionTypes.LoadGroupByIdFail;
  constructor(public payload: any) {}
}
export class LoadGroupByIdSuccess implements Action {
  readonly type = GroupsActionTypes.LoadGroupByIdSuccess;
  constructor(public payload: Group) {}
}

export class AddMember implements Action {
  readonly type = GroupsActionTypes.AddMember;
  constructor(public payload: any) {}
}
export class AddMemberFail implements Action {
  readonly type = GroupsActionTypes.AddMemberFail;
  constructor(public payload: any) {}
}
export class AddMemberSuccess implements Action {
  readonly type = GroupsActionTypes.AddMemberSuccess;
  constructor(public payload: Group) {}
}

export type GroupsAction =
  | LoadGroups
  | LoadGroupsFail
  | LoadGroupsSuccess
  | LoadGroupById
  | LoadGroupByIdFail
  | LoadGroupByIdSuccess
  | AddMember
  | AddMemberFail
  | AddMemberSuccess;
