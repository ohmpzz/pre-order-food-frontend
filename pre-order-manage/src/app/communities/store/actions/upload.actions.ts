import { Action } from '@ngrx/store';

export enum UploadActionTypes {
  UploadCover = '[Community] Upload Cover',
  UploadCoverFail = '[Community] Upload Cover Fail',
  UploadCoverSuccess = '[Community] Upload Cover Success',
}

export class UploadCover implements Action {
  readonly type = UploadActionTypes.UploadCover;
  constructor(public payload: File) {}
}

export class UploadCoverFail implements Action {
  readonly type = UploadActionTypes.UploadCoverFail;
  constructor(public payload: any) {}
}

export class UploadCoverSuccess implements Action {
  readonly type = UploadActionTypes.UploadCoverSuccess;
  constructor(public payload: { url: string }) {}
}

export type UploadActions = UploadCover | UploadCoverFail | UploadCoverSuccess;
