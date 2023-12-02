// 使用uview的http请求库
const http = uni.$u.http

// 邮箱发送验证码
export const sendEmailCode = (data) => http.post('/login/umUser/sendVerifyCode', data);

// 邮箱验证码登录
export const emailLogin = (data) => http.post('/login/umUser', data);

// 获取用户信息
export const getUserInfo =(params,config = {})  => http.get('/login/getUserInfo/um',  params, config)

// 获取用户收货地址
export const getUserAddress=(params,config={}) => http.get('/um/userAddress/list',params,config);

// 添加收货地址
export const addUserAddress=(params,config={})=>http.post('/um/userAddress/add',params,config);

// 获取省市区(懒加载)
export const getArea=(params,config={})=>http.get('/sys/area/Query/0',params,config)