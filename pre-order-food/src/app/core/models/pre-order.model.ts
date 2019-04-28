import { Product } from './product.model';
import { Community } from './community.model';
import { Group } from './group.model';

export interface PreOrders extends PreOrder {
  _id?: any;
  checkoutTime?: string;
  quantityLimit?: number;
  quantity?: number;
  group?: Group;
  orderTime?: OrderTime;
  price?: number;
  product?: Product;
  creationTime?: string;
  lastUpdateTime?: string;
  slug?: string;
}

export interface CreatePreOrder extends PreOrder {
  groups?: string;
  productId?: string;
}

interface PreOrder {
  checkoutTime?: string;
  quantityLimit?: number;
  quantity?: number;
  orderTime?: OrderTime;
  price?: number;
  ownerId?: string;
}

interface OrderTime {
  end?: string;
  start?: string;
}
