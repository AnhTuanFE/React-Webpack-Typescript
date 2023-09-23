import axios from 'axios'

const request = axios.create({
  baseURL: 'https://d981-14-186-238-117.ngrok-free.app', // Địa chỉ gốc của request
  headers: {
    // Các headers yêu cầu (nếu cần)
    'Content-Type': 'application/json'
    // Các headers khác (nếu có)
  }
})

// Intercept các request trước khi gửi đi
request.interceptors.request.use(
  (config) => {
    // Thực hiện các xử lý trước khi gửi request (nếu cần)
    return config
  },
  (error) => {
    // Xử lý các lỗi xảy ra trong quá trình tạo request
    return Promise.reject(error)
  }
)

// Intercept các response trước khi trả về
request.interceptors.response.use(
  (response) => {
    // Thực hiện các xử lý trước khi trả về response (nếu cần)
    return response
  },
  (error) => {
    // Xử lý các lỗi xảy ra trong quá trình nhận response
    return Promise.reject(error)
  }
)

export default request
