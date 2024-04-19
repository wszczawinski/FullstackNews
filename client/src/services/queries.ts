import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

export enum QUERY_KEYS {
  POSTS = "posts",
}

export const usePostsQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: getPosts,
  });
};

