import axios from "axios";

import {CreatePost} from "@packages/types";
import {AuthResponse} from "@packages/types";

const apiUrl = import.meta.env.VITE_BE_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
});

export enum ENDPOINTS {
  POSTS = "posts",
  IMAGES = "images",
  AUTH_LOGIN = "auth/login",
  AUTH_LOGOUT = "auth/logout",
}

export const fetcher = async <T, K>(url: ENDPOINTS, params: K) => {
  const res = await axiosInstance.get<T>(url, { params });
  return res.data;
};

export const createPost = async (data: CreatePost) => {
  return await axiosInstance.post(ENDPOINTS.POSTS, data);
};

export const postImages = async (images: FormData) => {
  return await axiosInstance.post(ENDPOINTS.IMAGES, images, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const authLogin = async <T>(data: T) => {
  return await axiosInstance.post<AuthResponse>(ENDPOINTS.AUTH_LOGIN, data);
};

export const authLogout = async () => {
  return await axiosInstance.post<AuthResponse>(ENDPOINTS.AUTH_LOGOUT);
};
