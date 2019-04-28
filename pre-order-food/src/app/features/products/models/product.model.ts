export interface Product {
  _id?: string;
  creationTime?: string;
  description?: string;
  group?: Group;
  lastUpdateTime?: string;
  owner?: {
    userId?: string;
    name?: string;
    pictureUrl?: string;
  };
  orderTime?: OrderTime;
  checkoutTime?: string;
  quantity?: number;
  price?: number;
  imagesUrl?: imagesUrl[];
  title?: string;
}

interface imagesUrl {
  title: string;
  url: string;
}

interface OrderTime {
  start?: string;
  end?: string;
}

interface Group {
  _id?: string;
  name?: string;
}
