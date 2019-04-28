import { Injectable } from '@angular/core';
import { LandingPageServiceModules } from '../landing-page-service.module';

import { Observable, of } from 'rxjs';
import { Group } from '../models/group.model';

import { mock } from './group';

@Injectable({
  providedIn: LandingPageServiceModules,
})
export class GroupsService {
  constructor() {}

  getOwnGroup(): Observable<Group[]> {
    return of([...mock] as Group[]);
  }
}
