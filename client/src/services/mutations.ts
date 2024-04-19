import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, createPost } from "./api";
import { QUERY_KEYS } from "./queries";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Post) => createPost(data),
    onMutate: () => {
      console.log("mutate");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
    },
  });
};
