import axios from 'axios'
import { LOCALSTORAGE } from '@/const/localStorage'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCALSTORAGE.TOKEN)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  } else {
    delete config.headers['Authorization']
  }
  return config
})