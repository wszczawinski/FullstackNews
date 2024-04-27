import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getPosts } from "./api";

export enum QUERY_KEYS {
  POSTS = "posts",
}

export const postsQueryOptions = ({ page }: { page: number }) => {
  return queryOptions({
    queryKey: [QUERY_KEYS.POSTS, page],
    queryFn: () => getPosts(page),
    placeholderData: keepPreviousData,
  });
};
