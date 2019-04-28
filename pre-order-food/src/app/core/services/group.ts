import { Group } from '../models/group.model';

export let mock: Group[] = [
  {
    _id: '1',
    title: 'หมู่บ้านเมืองเอก 1',
    description: 'หมู่บ้านจำลองเมืองเอก 1',
    pictureUrl:
      'https://images.unsplash.com/photo-1499310392581-322cec0355a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
    members: [
      {
        _id: 'uid1',
        name: 'user 1',
        email: 'user1@test.com',
        picture: '',
        uid: '1232141sdadasddsa',
      },
    ],
    creationTime: '2019-03-20T23:57:15+07:00',
    lastUpdateTime: '2019-03-20T23:57:15+07:00',
    updateBy_id: 'admin1',
    updateBy_name: 'admin 1',
  },
  {
    _id: '2',
    title: 'หมู่บ้านเมืองเอก 2',
    description: 'หมู่บ้านจำลองเมืองเอก 2',
    pictureUrl:
      'https://images.unsplash.com/photo-1499310392581-322cec0355a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
    members: [
      {
        _id: 'uid2',
        name: 'user 2',
        email: 'user2@test.com',
        picture: '',
        uid: '1232141sdadasddsa',
      },
    ],
    creationTime: '2019-03-20T23:57:15+07:00',
    lastUpdateTime: '2019-03-20T23:57:15+07:00',
    updateBy_id: 'admin1',
    updateBy_name: 'admin 1',
  },
  {
    _id: '3',
    title: 'หมู่บ้านเมืองเอก 3',
    description: 'หมู่บ้านจำลองเมืองเอก 3',
    pictureUrl:
      'https://images.unsplash.com/photo-1499310392581-322cec0355a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
    members: [
      {
        _id: 'uid1',
        name: 'user 1',
        email: 'user1@test.com',
        picture: '',
        uid: '1232141sdadasddsa',
      },
    ],
    creationTime: '2019-03-20T23:57:15+07:00',
    lastUpdateTime: '2019-03-20T23:57:15+07:00',
    updateBy_id: 'admin1',
    updateBy_name: 'admin 1',
  },
];
