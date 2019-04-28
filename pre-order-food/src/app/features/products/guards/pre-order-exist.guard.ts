import { Injectable } from '@angular/core';
import { ProductsServiceModules } from '../products-service.module';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, take, switchMap, map, filter } from 'rxjs/operators';
import { PreOrders } from '@app/core/models/pre-order.model';

import * as fromCoreStore from '@app/core/store';

@Injectable({ providedIn: ProductsServiceModules })
export class PreOrderExistGuard implements CanActivate {
  constructor(private store: Store<fromCoreStore.CoreState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const param: string = route.params.preOrderId;
    const id = param
      .trim()
      .match(/(\w+)$/gi)
      .toString();
    return this.checkStore(id).pipe(
      switchMap(() => {
        return this.hasPreOrder(id);
      })
    );
  }

  hasPreOrder(id: string) {
    return this.store
      .select(fromCoreStore.getPreOrdersEntities)
      .pipe(map((entities: { [key: number]: PreOrders }) => !!entities[id]));
  }

  checkStore(id): Observable<boolean> {
    return this.store.select(fromCoreStore.getPreOrdersLoadedById).pipe(
      tap(loaded => {
        this.store.dispatch(new fromCoreStore.LoadPreOrderById(id));
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
