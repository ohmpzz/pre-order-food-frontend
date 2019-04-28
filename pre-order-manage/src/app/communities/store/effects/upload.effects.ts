import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as uploadActions from '../actions/upload.actions';
import * as fromServices from '../../services';

@Injectable()
export class UploadEffects {
  constructor(
    private action$: Actions,
    private groupService: fromServices.GroupService
  ) {}

  @Effect()
  uploadCover$ = this.action$.pipe(
    ofType(uploadActions.UploadActionTypes.UploadCover),
    map((action: uploadActions.UploadCover) => action.payload),
    switchMap(file => {
      return this.groupService.uploadCoverCommu(file).pipe(
        map(
          (url: { url: string }) => new uploadActions.UploadCoverSuccess(url)
        ),
        catchError(error => of(new uploadActions.UploadCoverFail(error)))
      );
    })
  );
}
