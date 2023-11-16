# yiyuan-uniapp
🔥🔥🔥一源移动端商城源码，一群可爱的人，未来可期。
1、安装执行
npm install 或者 yarn install
npm 安装yarn
npm install -g yarn
前端框架uview
网址：[https://www.uviewui.com/](https://www.uviewui.com/)
vue2.0 node版本是16.20.0

修改api地址
config/request.js

## Vuex
使用的uview vux 网址:[https://www.uviewui.com/guide/globalVariable.html#vuex%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F](https://www.uviewui.com/guide/globalVariable.html#vuex%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F)
需要被 vuex 管理的数据声明在 `state` 中，变量名称以 `VX_` 开头，避免和其他变量命名冲突，比如 `VX_test`；
页面中使用这些变量可以直接 `this.变量名称`，比如： `this.VX_test`；
修改 `VX_test` 的值：`this.$u.vuex('VX_test', '目标值')`；

需要持久化存储的变量需要把变量名添加至数组 `saveStateKeys` 中；
#pre
get请求传参
api
export const getUserInfo =(params,config = {})  => http.get('/login/getUserInfo/um',  params, config)

	getUserInfo({data:{'jsoncode':1}, custom: { token: true }}).then(res => {
					console.log(res)
				})