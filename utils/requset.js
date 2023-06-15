import Request from '@/js_sdk/luch-request/luch-request/index.js'
export const apiBaseUrl = 'http://www.baidu.com'


const api = new Request()
const http = new Request()

http.config.header = {
	website: '123dfdf465132'
}
api.config.header = {
	website: '123dfdf465132'
}

/* 设置全局配置 */
api.setConfig((config) => {
	config.header = {
		...config.header,
		a: 1111111,
		b: 2222
	}
	return config
})


//请求前拦截，用来动态加参,例如token
api.interceptors.request.use((config) => { // 可使用async await 做异步操作
	config.baseURL = apiBaseUrl
	config.header = {
		...config.header,
		token: "not setting"
	}

	// 演示custom 用处
	// if (config.custom.auth) {
	//   config.header.token = 'token'
	// }
	if (config.custom.loading) {
		uni.showLoading({
			title: "加载中..."
		})
		setTimeout(() => {
			uni.hideLoading()
		}, 2000)
	}
	/**
	 /* 演示
	 if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
	    return Promise.reject(config)
	  }
	 **/
	return config
}, config => { // 可使用async await 做异步操作
	return Promise.reject(config)
})


// 请求后
api.interceptors.response.use(async (response) => {
	//   console.log(response)
	if (response.config.custom.loading) {
		uni.hideLoading()
	}
	return response
}, (response) => {
	/*  对响应错误做点什么 （statusCode !== 200）*/
	//   console.log(response)
	//   console.log(response.statusCode);
	//   //未登录时清空缓存跳转
	//   if(response.statusCode ==401){
	//    uni.clearStorageSync();
	//    uni.switchTab({
	//      url:"/pages/user/user"
	//    })
	//   }
	return Promise.reject(response)
})


export {
	http,
	api
}