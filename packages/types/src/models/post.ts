export type Post = {
  id: number;
  title: string;
  desc: string;
  cover: string;
  created: string;
};

export type PostsQueryParams = {
  page: number;
};
