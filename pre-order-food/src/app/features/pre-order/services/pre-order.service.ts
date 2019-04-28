import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PreOrderServiceModules } from '../pre-order-service.module';
import { environment } from '@env/environment';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CreatePreOrder } from '../models/pre-order';

@Injectable({
  providedIn: PreOrderServiceModules,
})
export class PreOrderService {
  readonly PREORDER_API = environment.preorder_endpoint;
  constructor(private http: HttpClient) {}

  createPreOrder(payload: CreatePreOrder) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.PREORDER_API}`, { ...payload }, { headers });
  }

  getCookie(name = 'token') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }
}
