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
