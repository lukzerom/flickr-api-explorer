export type FlickrApiResponse = {
  photos: {
    total: number;
    page: number;
    pages: number;
    perpage: number;
    photo: Array<FlickrPhoto>;
  };
  stat: string;
};

export type FlickrPhoto = {
  farm: number;
  id: string;
  isfamily: 0 | 1;
  isfriend: 0 | 1;
  ispublic: 0 | 1;
  owner: string;
  secret: string;
  server: string;
  title: string;
};

export type Category = { label: string; value: string };
