import { CreatePreOrderComponent } from './create-pre-order/create-pre-order.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { OrdersComponent } from './orders/orders.component';
import { PreOrdersComponent } from './pre-orders/pre-orders.component';

export const containers: any[] = [
  CreatePreOrderComponent,
  CreateProductComponent,
  OrdersComponent,
  PreOrdersComponent,
];

export * from './create-pre-order/create-pre-order.component';
export * from './create-product/create-product.component';
export * from './orders/orders.component';
export * from './pre-orders/pre-orders.component';
