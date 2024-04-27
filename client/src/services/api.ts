import axios from "axios";

const apiUrl = import.meta.env.VITE_BE_URL;

const axiosInstance = axios.create({ baseURL: apiUrl });

export type Post = {
  id: number;
  title: string;
  desc: string;
  cover: string;
  created: string;
};

enum ENDPOINTS {
  POSTS = "posts",
}

export const getPosts = async (page: number) => {
  return (
    await axiosInstance.get<Post[]>(ENDPOINTS.POSTS, { params: { page } })
  ).data;
};

export const createPost = async (data: Omit<Post, "id">) => {
  await axiosInstance.post(ENDPOINTS.POSTS, data);
};
