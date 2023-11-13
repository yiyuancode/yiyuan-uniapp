// 使用uview的http请求库
const http = uni.$u.http

// 邮箱发送验证码
export const sendEmailCode=(params, config = {}) => http.get('/login/umUser/sendVerifyCode', data);

// 邮箱验证码登录
export const emailLogin=(params, config = {}) =>http.get('/login/umUser',data);