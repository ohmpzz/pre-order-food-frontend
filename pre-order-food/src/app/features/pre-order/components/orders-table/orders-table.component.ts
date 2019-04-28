import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailModalComponent } from '../order-detail-modal/order-detail-modal.component';

import { Order } from '@app/core/models/order.model';

@Component({
  selector: 'pre-order-orders-table',
  template: `
    <p>เกี๊ยวซ่า</p>
    <table class="table table-striped">
      <thead>
        <tr style="text-align: center;">
          <th scope="col">เลขที่ออเดอร์</th>
          <th scope="col">ชื่อ</th>
          <th scope="col">จำนวน</th>
          <th scope="col">สถานะ</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let i of orders" style="text-align: center;">
          <td scope="row">{{ i._id }}</td>
          <td scope="row">{{ i.name }}</td>
          <td scope="row">{{ i.quantity }}</td>
          <td scope="row">{{ i.status }}</td>
          <td scope="row" ngbDropdown placement="left-bottom" class="dropdown">
            <mat-icon
              style="cursor: pointer;"
              id="optionDropdown"
              ngbDropdownToggle
              >more_horiz</mat-icon
            >
            <div ngbDropdownMenu aria-labelledby="optionDropdown">
              <a class="dropdown-item" (click)="openModal(i)">รายละเอียด</a>
              <a class="dropdown-item">ยกเลิก</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersTableComponent implements OnInit {
  @Input() orders: Order;

  @Output() update = new EventEmitter<{ _id: any; status: string }>();
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModal(order) {
    const modalRef = this.modalService.open(OrderDetailModalComponent);
    modalRef.componentInstance.order = order;
    modalRef.result
      .then(res => {
        console.log(res);
        this.update.emit(res);
      })
      .catch(e => {
        console.log(e);
      });
  }
}
