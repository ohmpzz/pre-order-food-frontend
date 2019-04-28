import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'product-products',
  template: `
    <h1>หมู่บ้าน</h1>
  `,
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
