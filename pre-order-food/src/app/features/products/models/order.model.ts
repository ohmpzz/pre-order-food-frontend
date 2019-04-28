export interface Order {
  _id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  userId?: string;
  address?: string;
  groupId?: string;
  product?: {
    _id?: string;
    name?: string;
    checkoutTime?: string;
  };
  isPacked?: boolean;
  isSent?: boolean;
  creationTime?: string;
  quantity?: string;
  ownerId?: string;
}
