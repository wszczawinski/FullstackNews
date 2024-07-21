import axios from "axios";

const apiUrl = import.meta.env.VITE_BE_URL;

export const axiosInstance = axios.create({ baseURL: apiUrl });

const authApi = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

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

export type LoginData = {
  username: string;
  password: string;
};

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

export const createPost = async (data: Omit<Post, "id">) => {
  return await axiosInstance.post(ENDPOINTS.POSTS, data);
};

export const postImages = async (images: FormData) => {
  return await axiosInstance.post(ENDPOINTS.IMAGES, images, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

type LoginResponse = {
  status: string;
  access_token: string;
  message: string;
};

export const authLogin = async <T>(data: T) => {
  return await authApi.post<LoginResponse>(ENDPOINTS.AUTH_LOGIN, data);
};

type LogoutResponse = {
  status: string;
  message: string;
};

export const authLogout = async () => {
  return await authApi.post<LogoutResponse>(ENDPOINTS.AUTH_LOGOUT);
};
