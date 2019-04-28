export interface Orders {
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
  status?: Status;
  creationTime?: string;
  lastUpdateTime?: string;
  quantity?: number;
  ownerId?: string;
}

type Status = 'ดำเนินการ' | 'บรรจุแล้ว' | 'กำลังจัดส่ง' | 'ส่งแล้ว';
