export interface Community {
  _id?: any;
  title?: string;
  slug?: string;
  description?: string;
  pictureUrl?: string;
  members?: Members;
  creationTime?: string;
  lastUpdateTime?: string;
  updateBy_name?: string;
  updateBy_id?: string;
  __v?: string;
}

export interface Members {
  [id: string]: string;
}
