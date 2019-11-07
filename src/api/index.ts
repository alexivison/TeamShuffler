import axios from 'axios'

const BASE_URL = "http://localhost:8080"

const createInstance = () => {
  const app = axios.create()
  app.defaults.baseURL = BASE_URL
  app.interceptors.response.use(({ data }) => data)
  app.interceptors.request.use((config) => {
    if (config.method !== 'get') {
      config.headers['Content-Type'] = 'application/json'
      config.headers['X-Requested-With'] = 'XMLHttpRequest'
    }
    return config
  })

  return app
}

const api = createInstance()

export default api