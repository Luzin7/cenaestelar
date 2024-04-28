import { env } from "@/env";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: env.DATABASE_URL,
});

export default apiClient;
