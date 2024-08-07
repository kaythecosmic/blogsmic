"use server";
import axios from "axios";

export const fetchTodos = async () => {
  try {
    const apiClient = axios.create({
      baseURL:
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_BACKEND_DEV_BASE_URL
          : process.env.NEXT_BACKEND_PROD_BASE_URL,
      withCredentials: true,
    });
    const response = await apiClient.get("/api/blogs");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
