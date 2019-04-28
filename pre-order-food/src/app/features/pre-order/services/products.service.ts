import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PreOrderServiceModules } from '../pre-order-service.module';
import { environment } from '@env/environment';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product';
import { CreateProduct } from '@app/core/models/product.model';
import { mock } from './product';

@Injectable({
  providedIn: PreOrderServiceModules,
})
export class ProductsService {
  readonly PRODUCT_API = environment.product_endpoint;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return of([...mock]).pipe(catchError(error => throwError(error)));
  }

  createProduct(payload: CreateProduct): Observable<CreateProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post(`${this.PRODUCT_API}`, { ...payload }, { headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
