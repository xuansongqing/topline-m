/**
 * 用户相关的请求模块
*/
import request from '@/utils/request'

export const login = data => {
  return request({
    // 请求方法
    method: 'post',
    // 请求路径
    url: '/app/v1_0/authorizations',
    // // 请求头
    // headers: '',
    // // Query 查询参数
    // params: '',
    // Body 请求体参数
    data
  })
}
export const getSmsCode = mobile => {
  return request({ method: 'GET', url: `/app/v1_0/sms/codes/${mobile}` })
}
// 获取登录个人信息
export const getUserInfo = mobile => {
  return request({ method: 'GET', url: '/app/v1_0/user' })
}
