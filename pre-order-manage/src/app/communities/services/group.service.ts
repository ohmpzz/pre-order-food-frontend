import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CommunitiesServiceModule } from '../communities-service.module';

import * as fromEnv from '@env/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Community } from '../models/community.model';

@Injectable({
  providedIn: CommunitiesServiceModule,
})
export class GroupService {
  private readonly ENDPOINT = fromEnv.environment.community_endpoint;
  private readonly UPLOAD_ENDPOINT = fromEnv.environment.upload_endpoint;

  constructor(private http: HttpClient) {}

  addMember(groupId, userId): Observable<Community> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .post<Community>(
        `${this.ENDPOINT}/${groupId}/members`,
        { userId },
        {
          headers,
        }
      )
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  getGroups(): Observable<Community[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .get<Community[]>(`${this.ENDPOINT}`, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  createCommu(payload: Community): Observable<Community> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .post<Community>(`${this.ENDPOINT}`, payload, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updateCommu(payload: Community): Observable<Community> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .put<Community>(`${this.ENDPOINT}/${payload._id}`, payload, {
        headers,
      })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  uploadCoverCommu(payload: File) {
    const file = new FormData();
    file.append('cover', payload);
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
    });

    return this.http
      .post(`${this.UPLOAD_ENDPOINT}/community/cover`, file, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  removeCommu(payload: Community): Observable<Community> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .delete<any>(`${this.ENDPOINT}/${payload._id}`, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  removeMember(groupId, userId): Observable<Community> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
      'Content-Type': 'application/json',
    });
    return this.http
      .put(`${this.ENDPOINT}/${groupId}/members`, { userId }, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  private getCookie(name = 'ctr_user') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }
}
