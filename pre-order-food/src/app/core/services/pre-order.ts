import { PreOrders } from '../models/pre-order.model';

export const mock: PreOrders[] = [
  {
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
  {
    _id: '2',
    checkoutTime: '2019-03-20T10:00:00+07:00',
    quantityLimit: 5,
    quantity: 0,
    price: 250,
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
      _id: '2',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      description: 'Pepperoni Pizza ทำจากเซฟอิตาลีแท้ ๆ',
      creationTime: '2019-03-16T19:51:21+07:00',
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
    orderTime: {
      start: '2019-03-16T19:51:21+07:00',
      end: '2019-03-19T10:00:00+07:00',
    },
    slug: 'Pepperoni-Pizza-2',
  },
  {
    _id: '3',
    checkoutTime: '2019-03-20T10:00:00+07:00',
    quantityLimit: 10,
    quantity: 0,
    price: 150,
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
      _id: '3',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      description: 'ราเม็งญี่ปุ่น ร้านประจำตรงสี่แยก ไม่ต้องรอคิดนาน',
      creationTime: '2019-03-16T19:51:21+07:00',
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
    orderTime: {
      start: '2019-03-16T19:51:21+07:00',
      end: '2019-03-19T10:00:00+07:00',
    },
    slug: 'ราเม็งญี่ปุ่น-3',
  },
  {
    _id: '4',
    checkoutTime: '2019-03-20T10:00:00+07:00',
    quantityLimit: 10,
    quantity: 0,
    price: 450,
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
      _id: '4',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      description: 'ซาชิมิแซลมอล เนื้อดี',
      creationTime: '2019-03-16T19:51:21+07:00',
      owner: {
        userId: 'userId1',
        name: 'user 1',
        pictureUrl:
          'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
      },
      imagesUrl: [
        {
          title: 'ซาชิมิแซลมอล',
          url:
            'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/48952927_2117443145016456_5804804796267364352_o.jpg?_nc_cat=111&_nc_oc=AQnudQkDDXKx0aTa9aAgk6LXpvgpnvnUjUhts5wVQbwSZTOaaq_MFe8C7-fhivogaZY&_nc_ht=scontent.fbkk2-7.fna&oh=c0820683624538949bb8e5000859035f&oe=5D1A4927',
        },
      ],
      title: 'ซาชิมิแซลมอล',
    },
    orderTime: {
      start: '2019-03-16T19:51:21+07:00',
      end: '2019-03-19T10:00:00+07:00',
    },
    slug: 'ซาชิมิแซลมอล-4',
  },
  {
    _id: '5',
    checkoutTime: '2019-03-20T10:00:00+07:00',
    quantityLimit: 10,
    quantity: 0,
    price: 500,
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
      _id: '5',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      description: 'ลูกพีชนำเข้า จากสวนโดยตรง ราคาถูก 5 ลูก/กล่อง',
      creationTime: '2019-03-16T19:51:21+07:00',
      owner: {
        userId: 'userId1',
        name: 'user 1',
        pictureUrl:
          'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
      },
      imagesUrl: [
        {
          title: 'ลูกพีช',
          url:
            'https://images.unsplash.com/photo-1532704868953-d85f24176d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      title: 'ลูกพีช',
    },
    orderTime: {
      start: '2019-03-16T19:51:21+07:00',
      end: '2019-03-19T10:00:00+07:00',
    },
    slug: 'ลูกพีช-5',
  },
  {
    _id: '6',
    checkoutTime: '2019-03-20T10:00:00+07:00',
    quantityLimit: 5,
    quantity: 0,
    price: 650,
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
      _id: '6',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      description: 'ซี่โครงวัว bbq จากร้าน xxx เต็ม rib',
      creationTime: '2019-03-16T19:51:21+07:00',
      owner: {
        userId: 'userId1',
        name: 'user 1',
        pictureUrl:
          'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
      },
      imagesUrl: [
        {
          title: 'ซี่โครงวัว bbq',
          url:
            'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
        },
      ],
      title: 'ซี่โครงวัว bbq',
    },
    orderTime: {
      start: '2019-03-16T19:51:21+07:00',
      end: '2019-03-19T10:00:00+07:00',
    },
    slug: 'ซี่โครงวัว-bbq-6',
  },
  {
    _id: '7',
    checkoutTime: '2019-03-20T10:00:00+07:00',
    quantityLimit: 20,
    quantity: 0,
    price: 240,
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
      _id: '7',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      description: 'Beer IPA นำเข้าจากต่างประเทศ',
      creationTime: '2019-03-16T19:51:21+07:00',
      owner: {
        userId: 'userId1',
        name: 'user 1',
        pictureUrl:
          'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
      },
      imagesUrl: [
        {
          title: 'Beer IPA นำเข้าจากต่างประเทศ',
          url:
            'https://images.unsplash.com/photo-1551046394-ade451f541d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
      ],
      title: 'Beer IPA นำเข้าจากต่างประเทศ',
    },
    orderTime: {
      start: '2019-03-16T19:51:21+07:00',
      end: '2019-03-19T10:00:00+07:00',
    },
    slug: 'Beer-IPA-นำเข้าจากต่างประเทศ-7',
  },

  {
    _id: '8',
    checkoutTime: '2019-03-20T10:00:00+07:00',
    quantityLimit: 20,
    quantity: 0,
    price: 50,
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
      _id: '8',
      lastUpdateTime: '2019-03-16T19:51:21+07:00',
      description: 'Pop corn น้ำผึ้งทำเอง',
      creationTime: '2019-03-16T19:51:21+07:00',
      owner: {
        userId: 'userId1',
        name: 'user 1',
        pictureUrl:
          'https://profile.line-scdn.net/0h4-stfbYMawJODUFFJkcUVXJIZW85I21KNj4nZjkFZTBkPH5Xdm8hZ2IOYTMzaC9SezggYmhZPWA3',
      },
      imagesUrl: [
        {
          title: 'Pop corn น้ำผึ้ง',
          url:
            'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1245&q=80',
        },
      ],
      title: 'Pop corn น้ำผึ้ง',
    },
    orderTime: {
      start: '2019-03-16T19:51:21+07:00',
      end: '2019-03-19T10:00:00+07:00',
    },
    slug: 'Pop corn น้ำผึ้ง',
  },
];
