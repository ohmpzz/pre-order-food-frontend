import { PreOrders } from '../models/pre-order';

export let preOrder: PreOrders[] = [
  {
    _id: '1',
    checkoutTime: '2019-03-29T15:34:14+07:00',
    quantity: 2,
    quantityLimit: 10,
    group: {
      _id: '1',
      name: 'หมู่บ้านเมืองเอก 1',
      description: 'หมู่บ้านจำลองเมืองเอก 1',
      pictureUrl:
        'https://images.unsplash.com/photo-1499310392581-322cec0355a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
      creationTime: '2019-03-20T23:57:15+07:00',
      lastUpdateTime: '2019-03-20T23:57:15+07:00',
      updateBy_id: 'admin1',
      updateBy_name: 'admin 1',
    },
    orderTime: {
      end: '2019-03-29T15:34:14+07:00',
      start: '2019-03-25T15:34:14+07:00',
    },
    price: 200,
    product: {
      _id: '2',
      creationTime: '2019-03-16T19:51:21+07:00',
      description: 'Pepperoni Pizza ทำจากเซฟอิตาลีแท้ ๆ',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      owner: {
        userId: 'userId1',
        name: 'user 1',
        pictureUrl:
          'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
      },
      imagesUrl: [
        {
          title: 'Pepperoni Pizza',
          url:
            'https://images.unsplash.com/photo-1542282811-943ef1a977c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
        },
      ],
      title: 'Pepperoni Pizza',
    },
    creationTime: '2019-03-25T15:34:14+07:00',
    lastUpdateTime: '2019-03-29T15:34:14+07:00',
  },
  {
    _id: '2',
    checkoutTime: '2019-03-29T15:34:14+07:00',
    quantity: 2,
    quantityLimit: 10,
    group: {
      _id: '1',
      name: 'หมู่บ้านเมืองเอก 1',
      description: 'หมู่บ้านจำลองเมืองเอก 1',
      pictureUrl:
        'https://images.unsplash.com/photo-1499310392581-322cec0355a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
      creationTime: '2019-03-20T23:57:15+07:00',
      lastUpdateTime: '2019-03-20T23:57:15+07:00',
      updateBy_id: 'admin1',
      updateBy_name: 'admin 1',
    },
    orderTime: {
      end: '2019-03-29T15:34:14+07:00',
      start: '2019-03-25T15:34:14+07:00',
    },
    price: 200,
    product: {
      _id: '3',
      creationTime: '2019-03-16T19:51:21+07:00',
      description: 'ราเม็งญี่ปุ่น ร้านประจำตรงสี่แยก ไม่ต้องรอคิดนาน',

      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      owner: {
        userId: 'userId1',
        name: 'user 1',
        pictureUrl:
          'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
      },
      imagesUrl: [
        {
          title: 'ราเม็งญี่ปุ่น',
          url:
            'https://images.unsplash.com/photo-1545729869-e4f40b34394d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      title: 'ราเม็งญี่ปุ่น',
    },
    creationTime: '2019-03-25T15:34:14+07:00',
    lastUpdateTime: '2019-03-29T15:34:14+07:00',
  },
];
