import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import decode from 'jwt-decode';

import { AuthData } from '../models/auth.model';

import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly ENDPOINT = environment.auth_endpoint;
  private user = new BehaviorSubject<AuthData | null>(null);
  userData = this.user.asObservable();

  constructor(private http: HttpClient) {}

  addPhoneNumber(id, phoneNumber) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http.patch(
      `${this.ENDPOINT}/line/phone`,
      { id, phoneNumber },
      { headers }
    );
  }

  decodeJwt(jwt) {
    return decode(jwt);
  }

  lineLogin() {
    return (window.location.href = `${this.ENDPOINT}/line`);
  }

  lineLogout() {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });
    const token = this.getCookie('token');
    if (!token) return of(false);
    console.log(token);

    return this.http.post(
      `${this.ENDPOINT}/line/logout`,
      { token },
      {
        headers,
        withCredentials: true,
      }
    );
  }

  getCookie(name = 'token') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }

  updateUserData(cookie = 'token') {
    const jwt = this.getCookie(cookie);
    if (jwt == null) {
      return this.user.next(null);
    }

    const { name, picture, sub } = this.decodeJwt(jwt);
    return this.user.next({ name, picture, uid: sub });
  }
}
