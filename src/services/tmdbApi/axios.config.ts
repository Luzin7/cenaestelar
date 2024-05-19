import axios, { AxiosInstance } from 'axios'
import { env } from 'process'

const apiClient: AxiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    Authorization: env.MOVIES_API_TOKEN,
  },
})

export default apiClient
