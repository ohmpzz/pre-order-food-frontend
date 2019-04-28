import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Group } from '../models/group.model';

import { mock } from './group';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  readonly GROUP_API = environment.community_endpoint;
  constructor(private http: HttpClient) {}

  addMember(groupId, userId) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .post(`${this.GROUP_API}/${groupId}/members`, { userId }, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  getGroups(): Observable<Group[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .get<Group[]>(`${this.GROUP_API}`, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));

    // return of([...mock]);
  }

  getGroupById(groupId) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get<Group>(`${this.GROUP_API}/${groupId}`, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));

    // const group = mock.find(g => g._id == groupId);
    // return of(group);
  }

  getCookie(name = 'token') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }
}
