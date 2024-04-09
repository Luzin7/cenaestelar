import { env } from "@/env";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: env.MOVIES_API_URL,
  params: {
    include_adult: "true",
    language: "pt-BR",
    page: "1",
  },
  headers: {
    Accept: "application/json",
    Authorization: env.MOVIES_API_TOKEN,
  },
});

export default apiClient;
