import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PreOrders } from '../models/pre-order.model';

import { mock } from './pre-order';

@Injectable({
  providedIn: 'root',
})
export class PreOrderService {
  readonly PREORDER_API = environment.preorder_endpoint;

  constructor(private http: HttpClient) {}

  getPreOrderByGroupId(groupId: string): Observable<PreOrders[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .get(`${this.PREORDER_API}/?group=${groupId}`, { headers })
      .pipe(map((res: any) => res.result));
  }

  getPreOrderById(preOrderId: string): Observable<PreOrders> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get(`${this.PREORDER_API}/${preOrderId}`, { headers })
      .pipe(map((res: any) => res.result));
  }

  getOwnPreOrders(): Observable<PreOrders[]> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get<PreOrders[]>(`${this.PREORDER_API}/owner`, { headers })
      .pipe(map((res: any) => res.result));
  }

  getOwnPreOrderById(preorderId: string): Observable<PreOrders> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get<PreOrders>(`${this.PREORDER_API}/owner/${preorderId}`, { headers })
      .pipe(map((res: any) => res.result));
  }

  removeOwnPreOrderById(preorderId: string) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.delete<PreOrders>(
      `${this.PREORDER_API}/owner/${preorderId}`,
      { headers }
    );
  }

  getCookie(name = 'token') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }
}
