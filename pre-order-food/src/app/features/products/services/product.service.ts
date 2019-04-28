import { Injectable } from '@angular/core';
import { ProductsServiceModules } from '../products-service.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../models/order.model';
import { CreateOrder } from '@app/core/models/order.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: ProductsServiceModules,
})
export class ProductService {
  readonly PRODUCT_API = environment.product_endpoint;
  readonly ORDER_API = environment.order_endpoint;
  constructor(private http: HttpClient) {}

  createOrder(order: CreateOrder): Observable<Order> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<Order>(`${this.ORDER_API}`, order, { headers })
      .pipe(catchError((error: any) => throwError(error)));
  }

  getProducts(groupId): Observable<Product[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .get<Product[]>(`${this.PRODUCT_API}/${groupId}`, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
