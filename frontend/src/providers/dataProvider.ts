import axios from "axios";
import type { BaseKey, DataProvider } from "@refinedev/core";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Attach JWT token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const dataProvider: DataProvider = {
  getList: async ({ resource }) => {
    const { data } = await axiosInstance.get(`/api/${resource}`);
    const items = data.data || data;
    return {
      data: items,
      total: Array.isArray(items) ? items.length : data.total ?? 1,
    };
  },

  getOne: async ({ resource, id }) => {
    const { data } = await axiosInstance.get(`/api/${resource}/${id}`);
    return { data: data.data || data };
  },

  create: async ({ resource, variables }) => {
    const { data } = await axiosInstance.post(`/api/${resource}`, variables);
    return { data: data.data || data };
  },

  update: async ({ resource, id, variables }) => {
    const { data } = await axiosInstance.put(`/api/${resource}/${id}`, variables);
    return { data: data.data || data };
  },

  deleteOne: async ({ resource, id }: { resource: string; id: BaseKey }) => {
    const { data } = await axiosInstance.delete(`/api/${resource}/${id}`);
    return { data: data.data || data };
  },

  getApiUrl: () => API_URL,
};
