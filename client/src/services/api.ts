import axios from "axios";

const apiUrl = import.meta.env.VITE_BE_URL;

const axiosInstance = axios.create({ baseURL: apiUrl });

export interface Post {
  id: number;
  title: string;
  desc: string;
  cover: string;
}

enum ENDPOINTS {
  POSTS = "posts",
}

export const getPosts = async () => {
  return (await axiosInstance.get<Post[]>(ENDPOINTS.POSTS)).data;
};

export const createPost = async (data: Post) => {
  await axiosInstance.post(ENDPOINTS.POSTS, data);
};
