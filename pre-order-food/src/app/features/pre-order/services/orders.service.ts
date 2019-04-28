import { Injectable } from '@angular/core';
import { PreOrderServiceModules } from '../pre-order-service.module';

import { Observable, of } from 'rxjs';
import { Orders } from '../models/order';
import { mock } from './order';

@Injectable({
  providedIn: PreOrderServiceModules,
})
export class OrdersService {
  constructor() {}

  getOrdersByGroupId(): Observable<Orders[]> {
    return of([...mock]);
  }
}
