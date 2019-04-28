import { AuthData } from './auth.model';
import { PreOrders } from './pre-order.model';

export interface CreateOrder {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  userId?: string;
  preOrderId?: string;
  quantity?: string;
}

export interface Order {
  _id?: string;
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  userId?: string;
  user?: AuthData;
  preOrder?: PreOrders;
  quantity?: string;
  status: 'รับออเดอร์แล้ว' | 'ยกเลิกออเดอร์' | 'จัดส่ง';
  isCanceled: boolean;
}
