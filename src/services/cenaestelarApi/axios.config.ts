import axios, { AxiosInstance } from 'axios'
import { env } from 'src/env'

const apiClient: AxiosInstance = axios.create({
  baseURL: env.DATABASE_URL,
})

export default apiClient
