// 使用uview的http请求库
const http = uni.$u.http
// 邮箱发送验证码
export const sendEmailCode = (data) => http.post('/login/umUser/sendVerifyCode', data);

// 邮箱验证码登录
export const emailLogin = (data) => http.post('/login/umUser', data);

// 微信登陆
export const wxLogin=(params,config={})=>http.get('/wx/user/wx1e8ecdf40bf53991/login',params,config)
