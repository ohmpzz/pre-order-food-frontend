import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CommunitiesServiceModule } from '../communities-service.module';

@Injectable({
  providedIn: CommunitiesServiceModule,
})
export class UserService {
  constructor(private http: HttpClient) {}

  addPhoneNumber(id, phoneNumber) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http.patch(
      `${environment.auth_endpoint}/line/phone`,
      { id, phoneNumber },
      { headers }
    );
  }

  private getCookie(name = 'ctr_user') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }
}
