import axios from 'axios'

const createInstance = () => {
  const app = axios.create()

  console.log(process.env.API_URL)

  app.defaults.baseURL = "https://team-shuffler-api.herokuapp.com"
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