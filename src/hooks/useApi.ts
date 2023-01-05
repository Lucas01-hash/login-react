import axios from "axios"

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
  findUser: async (token: string) => {
    const response = await api.get('/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  },
  signin: async (email: string, password: string) => {
    const response = await api.post('/auth/login', {
      email: email,
      password: password
    })

    return response.data
  }
})