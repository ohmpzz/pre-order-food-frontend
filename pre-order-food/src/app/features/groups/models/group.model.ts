export interface Group {
  _id?: any;
  name?: string;
  description?: string;
  pictureUrl?: string;
  members?: Member[];
  creationTime?: string;
  lastUpdateTime?: string;
  updateBy_name?: string;
  updateBy_id?: string;
}

export interface Member {
  _id?: string;
  name?: string;
  email?: string;
  picture?: string;
  uid?: string;
}
