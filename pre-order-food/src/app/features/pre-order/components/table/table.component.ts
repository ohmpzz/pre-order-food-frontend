import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { PreOrders } from '../../models/pre-order';

@Component({
  selector: 'pre-order-table',
  template: `
    <table class="table table-striped">
      <thead>
        <tr style="text-align: center;">
          <th scope="col">เลขที่พรีออเดอร์</th>
          <th scope="col">รายการ</th>
          <th scope="col">กลุ่มหมู่บ้าน</th>
          <th scope="col">วันเปิด/ปิดพรีออเดอร์</th>
          <th scope="col">วันส่งออเดอร์</th>
          <th scope="col">จำนวน</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let i of (preOrder | async)" style="text-align: center;">
          <th scope="row">{{ i._id }}</th>
          <td>{{ i.product.title }}</td>
          <td>{{ i.group.title }}</td>
          <td>
            {{ i.orderTime.start | shortDate }} -
            {{ i.orderTime.end | shortDate }}
          </td>
          <td>{{ i.checkoutTime | shortDate }}</td>
          <td>{{ i.quantity }}/{{ i.quantityLimit }}</td>
          <td ngbDropdown placement="left-bottom" class="dropdown">
            <mat-icon
              style="cursor: pointer;"
              id="optionDropdown"
              ngbDropdownToggle
              >more_horiz</mat-icon
            >
            <div ngbDropdownMenu aria-labelledby="optionDropdown">
              <a class="dropdown-item" [routerLink]="['./', i._id]"
                >รายการออเดอร์</a
              >
              <a class="dropdown-item" (click)="removePreOrder(i)">ลบ</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() preOrder: Observable<PreOrders[]> = of([]);
  @Input() filter: any;

  @Output() remove = new EventEmitter<PreOrders>();
  constructor() {}

  ngOnInit() {
    this.preOrder.subscribe(res => {
      console.log(res);
    });
  }

  removePreOrder(preOrder: PreOrders) {
    this.remove.emit({ ...preOrder });
  }
}
