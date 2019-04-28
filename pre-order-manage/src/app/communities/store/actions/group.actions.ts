import { Action } from '@ngrx/store';

import { Community } from '../../models/community.model';

export enum GroupActionTypes {
  addMember = '[Communities] Add Member',
  addMemberFail = '[Communities] Add Member Fail',
  addMemberSuccess = '[Communities] Add Member Success',
  LoadGroups = '[Communities] Load Groups',
  LoadGroupsFail = '[Communities] Load Groups Fail',
  LoadGroupsSuccess = '[Communities] Load Groups Success',
  CreateGroup = '[Communities] Create Group',
  CreateGroupFail = '[Communities] Create Group Fail',
  CreateGroupSuccess = '[Communities] Create Group Success',
  UpdateGroup = '[Communities] Update Group',
  UpdateGroupFail = '[Communities] Update Group Fail',
  UpdateGroupSuccess = '[Communities] Update Group Success',
  RemoveGroup = '[Communities] Remove Group',
  RemoveGroupFail = '[Communities] Remove Group Fail',
  RemoveGroupSuccess = '[Communities] Remove Group Success',
  RemoveMember = '[Communities] Remove Member',
  RemoveMemberFail = '[Communities] Remove Member Fail',
  RemoveMemberSuccess = '[Communities] Remove Member Success',
}

export class AddMember implements Action {
  readonly type = GroupActionTypes.addMember;
  constructor(public payload: any) {}
}

export class AddMemberFail implements Action {
  readonly type = GroupActionTypes.addMemberFail;
  constructor(public payload: any) {}
}

export class AddMemberSuccess implements Action {
  readonly type = GroupActionTypes.addMemberSuccess;
  constructor(public payload: Community) {}
}

export class LoadGroups implements Action {
  readonly type = GroupActionTypes.LoadGroups;
}

export class LoadGroupsFail implements Action {
  readonly type = GroupActionTypes.LoadGroupsFail;
  constructor(public payload: any) {}
}

export class LoadGroupsSuccess implements Action {
  readonly type = GroupActionTypes.LoadGroupsSuccess;
  constructor(public payload: Community[]) {}
}

export class CreateGroup implements Action {
  readonly type = GroupActionTypes.CreateGroup;
  constructor(public payload: Community) {}
}

export class CreateGroupFail implements Action {
  readonly type = GroupActionTypes.CreateGroupFail;
  constructor(public payload: any) {}
}

export class CreateGroupSuccess implements Action {
  readonly type = GroupActionTypes.CreateGroupSuccess;
  constructor(public payload: Community) {}
}

export class UpdateGroup implements Action {
  readonly type = GroupActionTypes.UpdateGroup;
  constructor(public payload: Community) {}
}

export class UpdateGroupFail implements Action {
  readonly type = GroupActionTypes.UpdateGroupFail;
  constructor(public payload: any) {}
}

export class UpdateGroupSuccess implements Action {
  readonly type = GroupActionTypes.UpdateGroupSuccess;
  constructor(public payload: Community) {}
}

export class RemoveGroup implements Action {
  readonly type = GroupActionTypes.RemoveGroup;
  constructor(public payload: Community) {}
}

export class RemoveGroupFail implements Action {
  readonly type = GroupActionTypes.RemoveGroupFail;
  constructor(public payload: any) {}
}

export class RemoveGroupSuccess implements Action {
  readonly type = GroupActionTypes.RemoveGroupSuccess;
  constructor(public payload: Community) {}
}

export class RemoveMember implements Action {
  readonly type = GroupActionTypes.RemoveMember;
  constructor(public payload: any) {}
}

export class RemoveMemberFail implements Action {
  readonly type = GroupActionTypes.RemoveMemberFail;
  constructor(public payload: any) {}
}

export class RemoveMemberSuccess implements Action {
  readonly type = GroupActionTypes.RemoveMemberSuccess;
  constructor(public payload: Community) {}
}

export type GroupActions =
  | LoadGroups
  | LoadGroupsFail
  | LoadGroupsSuccess
  | CreateGroup
  | CreateGroupFail
  | CreateGroupSuccess
  | UpdateGroup
  | UpdateGroupFail
  | UpdateGroupSuccess
  | RemoveGroup
  | RemoveGroupFail
  | RemoveGroupSuccess
  | AddMember
  | AddMemberFail
  | AddMemberSuccess
  | RemoveMember
  | RemoveMemberFail
  | RemoveMemberSuccess;
