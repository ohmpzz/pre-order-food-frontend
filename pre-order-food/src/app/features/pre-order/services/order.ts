import { Orders } from '../models/order';

export let mock: Orders[] = [
  {
    _id: '1',
    name: '.ohm',
    email: 'ohm.piromrak@gmail.com',
    phoneNumber: '08000000',
    userId: '1',
    address: 'fake address',
    groupId: '1',
    product: {
      _id: '1',
      name: '',
      checkoutTime: '',
    },
    isPacked: false,
    isSent: false,
    status: 'ดำเนินการ',
    creationTime: '',
    quantity: 1,
    lastUpdateTime: '',
    ownerId: '1',
  },
];
