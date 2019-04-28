export interface Product {
  _id?: string;
  creationTime?: string;
  description?: string;
  lastUpdateTime?: string;
  owner?: {
    userId?: string;
    name?: string;
    pictureUrl?: string;
  };
  imagesUrl?: imagesUrl[];
  title?: string;
}

interface imagesUrl {
  title: string;
  url: string;
}
