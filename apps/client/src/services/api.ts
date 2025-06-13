import axios from "axios";

const apiUrl = import.meta.env.VITE_BE_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl
});

export enum ENDPOINTS {
  POSTS = "posts",
}

export const fetcher = async <T, K>(url: ENDPOINTS, params: K) => {
  const res = await axiosInstance.get<T>(url, { params });
  return res.data;
};
