import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import * as fromStore from '../../store';

@Component({
  selector: 'core-navbar-v2',
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-white"
      style="z-index:10;"
    >
      <div class="container">
        <a class="navbar-brand" routerLink="/">Pre-order Hub</a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="collapseExample"
          aria-label="Toggle navigation"
          [attr.aria-expanded]="!isCollapsed"
          (click)="toggle()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="collapseExample"
          [ngbCollapse]="isCollapsed"
          class="navbar-collapse collapse"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/g']">หมู่บ้าน</a>
            </li>
            <li class="nav-item">
              <a
                *ngIf="(userData | async)?.name"
                class="nav-link"
                [routerLink]="['/orders']"
                >สถานะการจัดส่ง</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="contact-us">ติดต่อเรา</a>
            </li>
            <li *ngIf="!(userData | async)?.name">
              <a class="btn btn-outline-primary" (click)="loginWithLine()"
                >เข้าสู่ระบบ</a
              >
            </li>
            <li
              class="nav-item dropdown"
              *ngIf="(userData | async)?.name"
              ngbDropdown
            >
              <a class="nav-link ">
                <img
                  [src]="(userData | async)?.picture"
                  width="30"
                  class="rounded-circle"
                  alt=""
                  role="button"
                  id="userNav"
                  ngbDropdownToggle
                />
                <div ngbDropdownMenu aria-labelledby="userNav">
                  <a class="dropdown-item" routerLink="/preorders"
                    >รายการพรีออเดอร์</a
                  >
                  <a class="dropdown-item" routerLink="/preorders/new-preorder"
                    >เปิดพรีออเดอร์</a
                  >
                  <a class="dropdown-item" (click)="logout()">ออกจากระบบ</a>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar-v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarV2Component implements OnInit {
  isCollapsed = true;
  userData: Observable<any>;
  constructor(private store: Store<fromStore.CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.UpdateUser());
    this.userData = this.store.select(fromStore.getUserEntities);
  }

  loginWithLine() {
    this.store.dispatch(new fromStore.LoginLine());
  }

  logout() {
    this.store.dispatch(new fromStore.Logout());
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
