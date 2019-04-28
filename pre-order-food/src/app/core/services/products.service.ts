import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';

import { mock } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly PRODUCT_API = environment.product_endpoint;
  readonly ORDER_API = environment.order_endpoint;

  constructor(private http: HttpClient) {}

  getProducts(ownerId): Observable<Product[]> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get<Product[]>(`${this.PRODUCT_API}/owner/${ownerId}`, { headers })
      .pipe(
        map((res: any) => res.result),
        catchError((error: any) => throwError(error.json()))
      );
  }

  getProductById(productId): Observable<Product> {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.getCookie('token')}`,
      'Content-Type': 'application/json',
    });

    return this.http
      .get<Product>(`${this.PRODUCT_API}/${productId}`, { headers })
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
