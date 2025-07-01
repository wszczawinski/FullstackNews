import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useToast } from "@packages/ui";
import { CreatePost } from "@packages/types";
import { AuthResponse, LoginRequest } from "@packages/types";

import { ENDPOINTS, authLogin, authLogout, createPost } from "./api";

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreatePost) => createPost(data),
        mutationKey: ["createPost"],
        onMutate: () => {
            console.log("mutate");
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [ENDPOINTS.POSTS] });
        },
    });
};

export const useAuthLogin = ({ onSuccess }: { onSuccess: (data: AuthResponse) => void }) => {
    const { toast } = useToast();

    return useMutation({
        mutationFn: (data: LoginRequest) => authLogin(data),
        onSuccess: ({ data }) => {
            onSuccess(data);

            toast({
                title: "Success",
                description: "Login successful. Redirecting to dashboard...",
            });
        },
    });
};

export const useAuthLogout = ({ onSuccess }: { onSuccess: () => void }) => {
    const { toast } = useToast();

    return useMutation({
        mutationFn: authLogout,
        onSuccess: () => {
            onSuccess();

            toast({
                title: "Success",
                description: "Logout successful. Redirecting to login page...",
            });
        },
    });
};
