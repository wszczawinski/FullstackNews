import { keepPreviousData, queryOptions } from "@tanstack/react-query";

import { Post, PostsQueryParams } from "@packages/types";

import { ENDPOINTS, fetcher } from "./api";

export const postsQueryOptions = (params: PostsQueryParams) => {
  return queryOptions({
    queryKey: [ENDPOINTS.POSTS, params],
    queryFn: () => fetcher<Post[], PostsQueryParams>(ENDPOINTS.POSTS, params),
    placeholderData: keepPreviousData,
  });
};
