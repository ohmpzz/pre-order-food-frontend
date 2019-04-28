import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { CommunitiesServiceModule } from '../communities-service.module';

import { User } from '../models/user.model';

import { environment } from '@env/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: CommunitiesServiceModule,
})
export class FindUserService {
  constructor(private http: HttpClient) {}

  findUser(payload: string): Observable<User[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams({ fromObject: { q: payload } });

    return this.http
      .get<User[]>(`${environment.auth_endpoint}/search`, {
        headers,
        params,
      })
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
