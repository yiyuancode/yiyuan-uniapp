const http = uni.$u.http

// tab菜单分类，获取商品分类列表
export const getProductCategory = (params, config = {}) => http.get('/ptm/productCategory/getTree')

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getMenu = (data) => http.get('/ebapi/public_api/index', data)