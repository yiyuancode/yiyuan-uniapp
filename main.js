import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false;
// 引入uView
import uView from "uview-ui";
// 引入store
import store from './store'

Vue.use(uView);
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
// 引入请求封装，将app参数传递到配置中
require('./config/request.js')(app)
// 定义全局方法
// uni顶部高度
Vue.prototype.$uniHeight = function() {
	let res = uni.getMenuButtonBoundingClientRect();

	return res;
};

app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif