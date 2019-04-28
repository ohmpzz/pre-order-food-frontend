import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthData } from '../models/auth.model';

import { environment } from '@env/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FindUserService {
  constructor(private http: HttpClient) {}

  findUser(payload: string): Observable<AuthData[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams({ fromObject: { q: payload } });

    return this.http
      .get<AuthData[]>(`${environment.auth_endpoint}/search`, {
        headers,
        params,
      })
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
