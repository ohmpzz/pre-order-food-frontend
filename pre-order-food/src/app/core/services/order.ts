import { Order } from '../models/order.model';

export let mock: Order[] = [
  {
    _id: '1',
    name: '.Ohm',
    email: 'test@test.com',
    address: 'somewhere',
    phoneNumber: '08123445667',
    quantity: '2',
    status: 'รับออเดอร์แล้ว',
    isCanceled: false,
    userId: 'userId1',
    user: {
      name: '.Ohm',
      picture: '',
      uid: '1',
      email: 'test@test.com',
    },
    preOrder: {
      _id: '1',
      checkoutTime: '2019-03-20T10:00:00+07:00',
      quantityLimit: 15,
      quantity: 0,
      price: 65,
      creationTime: '2019-03-16T19:51:21+07:00',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      group: {
        _id: '1',
        title: 'หมู่บ้านเมืองเอก 1',
        description: 'หมู่บ้านจำลองเมืองเอก 1',
        pictureUrl:
          'https://images.unsplash.com/photo-1499310392581-322cec0355a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
        creationTime: '2019-03-20T23:57:15+07:00',
        lastUpdateTime: '2019-03-20T23:57:15+07:00',
        updateBy_id: 'admin1',
        updateBy_name: 'admin 1',
      },
      product: {
        _id: '1',
        lastUpdateTime: '2019-03-16T19:51:21+07:00',
        description: 'เกี๊ยวซ่า ทำเอง',
        creationTime: '2019-03-16T19:51:21+07:00',
        owner: {
          userId: 'userId1',
          name: 'user 1',
          phoneNumber: '0812345678',
          pictureUrl:
            'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
        },
        imagesUrl: [
          {
            title: 'เกี๊ยวซ่า',
            url:
              'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
          {
            title: 'เกี๊ยวซ่า',
            url:
              'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          },
          {
            title: 'เกี๊ยวซ่า',
            url:
              'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
          {
            title: 'เกี๊ยวซ่า',
            url:
              'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
        ],
        title: 'เกี๊ยวซ่า by User 1',
      },
      orderTime: {
        start: '2019-03-16T19:51:21+07:00',
        end: '2019-03-19T10:00:00+07:00',
      },
      slug: 'เกี๊ยวซ่า-by-User-1-1',
    },
  },
];
