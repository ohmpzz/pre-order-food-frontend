import { Injectable } from '@angular/core';
import { PreOrderServiceModules } from '../pre-order-service.module';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Community } from '../models/community';
import { mock } from './commu';

@Injectable({
  providedIn: PreOrderServiceModules,
})
export class CommunityService {
  constructor() {}

  getCommunities(): Observable<Community[]> {
    return of([...mock]).pipe(catchError(error => throwError(error)));
  }
}
