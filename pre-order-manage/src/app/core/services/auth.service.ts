import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreServiceModule } from '../core-service.module';

import * as fromEnv from '@env/environment';

import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: CoreServiceModule,
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getCookie(name = 'ctr_user') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }

  loadAuth(): Observable<User> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<User>(`${fromEnv.environment.auth_endpoint}/admin`, {
      headers,
    });
  }

  login({ email, password }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      `${fromEnv.environment.auth_endpoint}/admin/login`,
      { email, password },
      { headers, withCredentials: true}
    );
  }

  logout() {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie()}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(
      `${fromEnv.environment.auth_endpoint}/admin/logout`,
      {},
      { headers, withCredentials: true }
    );
  }
}
