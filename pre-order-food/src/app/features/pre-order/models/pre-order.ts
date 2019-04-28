import { Product } from './product';
import { Community } from './community';

export interface PreOrders extends PreOrder {
  _id?: string;
  checkoutTime?: string;
  quantityLimit?: number;
  quantity?: number;
  group?: Community;
  orderTime?: OrderTime;
  price?: number;
  product?: Product;
  creationTime?: string;
  lastUpdateTime?: string;
}

export interface CreatePreOrder extends PreOrder {
  groups?: string[];
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
