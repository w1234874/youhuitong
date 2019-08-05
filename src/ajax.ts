import axios from 'axios'
import qs from 'qs'

// 添加公共header
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      // 错误逻辑处理
    }
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default (url: string, data: object, type: string = 'get') => {
  const options: any = {
    url,
    method: type
  }
  if (type === 'get') { // 如果是get请求, 参数需要定义在params
    options.params = data
  } else { // 如果是post请求, 参数需要定义在data
    options.data = qs.stringify(data)
  }
  return axios(options)
}
