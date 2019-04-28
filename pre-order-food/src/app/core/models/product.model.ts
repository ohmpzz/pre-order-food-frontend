export interface Product {
  _id?: string;
  creationTime?: string;
  description?: string;
  lastUpdateTime?: string;
  owner?: {
    userId?: string;
    name?: string;
    pictureUrl?: string;
    phoneNumber?: string;
  };
  imagesUrl?: imagesUrl[];
  title?: string;
}

export interface imagesUrl {
  title: string;
  url: string;
}

export interface CreateProduct {
  description?: string;
  title?: string;
  imagesUrl?: imagesUrl[];
  ownerId?: string;
}
