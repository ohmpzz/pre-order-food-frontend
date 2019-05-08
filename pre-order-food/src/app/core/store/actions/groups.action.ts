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
  LoadOwnerGroups = '[Core] Load Owner Groups',
  LoadOwnerGroupsFail = '[Core] Load Owner Groups Fail',
  LoadOwnerGroupsSuccess = '[Core] Load Owner Groups Success',
  RemoveMember = '[Communities] Remove Member',
  RemoveMemberFail = '[Communities] Remove Member Fail',
  RemoveMemberSuccess = '[Communities] Remove Member Success',
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

export class LoadOwnerGroups implements Action {
  readonly type = GroupsActionTypes.LoadOwnerGroups;
}

export class LoadOwnerGroupsFail implements Action {
  readonly type = GroupsActionTypes.LoadOwnerGroupsFail;
  constructor(public payload: any) {}
}

export class LoadOwnerGroupsSuccess implements Action {
  readonly type = GroupsActionTypes.LoadOwnerGroupsSuccess;
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

export class RemoveMember implements Action {
  readonly type = GroupsActionTypes.RemoveMember;
  constructor(public payload: any) {}
}

export class RemoveMemberFail implements Action {
  readonly type = GroupsActionTypes.RemoveMemberFail;
  constructor(public payload: any) {}
}

export class RemoveMemberSuccess implements Action {
  readonly type = GroupsActionTypes.RemoveMemberSuccess;
  constructor(public payload: Group) {}
}

export type GroupsAction =
  | LoadGroups
  | LoadGroupsFail
  | LoadGroupsSuccess
  | LoadOwnerGroups
  | LoadOwnerGroupsFail
  | LoadOwnerGroupsSuccess
  | LoadGroupById
  | LoadGroupByIdFail
  | LoadGroupByIdSuccess
  | AddMember
  | AddMemberFail
  | AddMemberSuccess
  | RemoveMember
  | RemoveMemberFail
  | RemoveMemberSuccess;
