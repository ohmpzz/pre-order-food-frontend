import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, take, switchMap, catchError } from 'rxjs/operators';

import * as fromCoreStore from '@app/core/store';

@Injectable({ providedIn: 'root' })
export class ProductsGuard implements CanActivate {
  constructor(private store: Store<fromCoreStore.CoreState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.groupId;
    return this.checkStore(id).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(id): Observable<boolean> {
    return this.store.select(fromCoreStore.getProductsLoaded).pipe(
      tap(loaded => {
        this.store.dispatch(new fromCoreStore.LoadProducts(id));
      }),
      take(1)
    );
  }
}
