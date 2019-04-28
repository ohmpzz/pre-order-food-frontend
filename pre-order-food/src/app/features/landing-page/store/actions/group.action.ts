import { Action } from '@ngrx/store';

import { Group } from '@app/features/groups/models/group.model';

export enum GroupActionTypes {
  LoadGroup = '[Landing-page] Load Own Group',
  LoadGroupFail = '[Landing-page] Load Own Group Fail',
  LoadGroupSuccess = '[Landing-page] Load Own Group Success',
}

// Load Own Group
export class LoadGroup implements Action {
  readonly type = GroupActionTypes.LoadGroup;
}

export class LoadGroupFail implements Action {
  readonly type = GroupActionTypes.LoadGroupFail;
  constructor(public payload: any) {}
}

export class LoadGroupSuccess implements Action {
  readonly type = GroupActionTypes.LoadGroupSuccess;
  constructor(public payload: Group[]) {}
}

export type GroupAction = LoadGroup | LoadGroupFail | LoadGroupSuccess;
