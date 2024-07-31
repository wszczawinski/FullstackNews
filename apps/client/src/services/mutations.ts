import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useToast } from "@packages/ui";

import {
  ENDPOINTS,
  LoginData,
  Post,
  authLogin,
  authLogout,
  createPost,
} from "./api";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<Post, "id">) => createPost(data),
    onMutate: () => {
      console.log("mutate");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.POSTS] });
    },
  });
};

export const useAuthLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: LoginData) => authLogin(data),
    onSuccess: (data) => {
      onSuccess();

      toast({
        title: "Success",
        description: data.data.message,
      });
    },
  });
};

export const useAuthLogout = ({ onSuccess }: { onSuccess: () => void }) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: authLogout,
    onSuccess: (data) => {
      onSuccess();

      toast({
        title: "Success",
        description: data.data.message,
      });
    },
  });
};
