import { AuthService } from './auth.service';
import { FindUserService } from './find-user.service';
import { GroupsService } from './groups.service';
import { PreOrderService } from './pre-order.service';
import { ProductsService } from './products.service';
import { OrderService } from './order.service';

export const services: any[] = [
  AuthService,
  FindUserService,
  GroupsService,
  PreOrderService,
  ProductsService,
  OrderService,
];

export * from './auth.service';
export * from './find-user.service';
export * from './groups.service';
export * from './pre-order.service';
export * from './products.service';
export * from './order.service';
