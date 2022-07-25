import axios from 'axios'

const API_URL = 'http://192.168.0.238:8080/api/v1'

export const api = axios.create({
  baseURL: API_URL
})
