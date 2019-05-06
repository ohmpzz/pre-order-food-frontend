import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { LandingPageServiceModules } from '../landing-page-service.module';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { PreOrders } from '@app/core/models/pre-order.model';

import { mock } from './mock';

@Injectable({
  providedIn: LandingPageServiceModules,
})
export class ProductsService {
  readonly PREORDER_API = environment.preorder_endpoint;

  constructor(private http: HttpClient) {}

  getAllPreOrders(): Observable<PreOrders[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .get(`${this.PREORDER_API}/all`, { headers })
      .pipe(map((res: any) => res.result));
  }

  getLastProducts(): Observable<Product[]> {
    return of([...mock] as Product[]);
  }

  getOwnCommunityPreorder(): Observable<Product[]> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get(`${this.PREORDER_API}/my-group`, { headers })
      .pipe(map((res: any) => res.result));
  }

  getCookie(name = 'token') {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
    return null;
  }
}
