import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Order } from '../models/order.model';

import { mock } from './order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  readonly ORDER_API = environment.order_endpoint;

  constructor(private http: HttpClient) {}

  getOrdersByPreOrderId(preOrderId): Observable<Order[]> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get<Order[]>(`${this.ORDER_API}/?preorder=${preOrderId}`, { headers })
      .pipe(
        map((res: any) => res.result),
        catchError((error: any) => throwError(error.json()))
      );
  }

  getOrdersByOwner(): Observable<Order[]> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get<Order[]>(`${this.ORDER_API}/owner`, { headers })
      .pipe(map((res: any) => res.result));
  }

  cancelOrder(orderId) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .patch(
        `${this.ORDER_API}/owner/${orderId}`,
        { isCanceled: true },
        { headers }
      )
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updateOrderStatus(payload: { _id: any; status: string }) {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });
    return this.http
      .patch(
        `${this.ORDER_API}/${payload._id}`,
        { status: payload.status },
        { headers }
      )
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  getCookie(name = 'token') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }
}
