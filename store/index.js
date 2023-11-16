import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config/config.js';
import tabBar from './modules/tabBar';
Vue.use(Vuex)
let lifeData = {};
try {
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync(config.projectKey);
} catch (e) {}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vx_isChecked', 'vx_token', 'vx_userInfo', 'vx_pushInfo'];

// 保存变量到本地存储中
const saveLifeData = function(key, value) {
	if (saveStateKeys.indexOf(key) != -1) {
		let tmp = uni.getStorageSync(config.projectKey);
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		uni.setStorageSync(config.projectKey, tmp);
	}
}
const baseUserInfo = {
	nickname: "guest",
	avatar: "/static/icon-guest.png"
};
const store = new Vuex.Store({
	state: {
		vx_isChecked: lifeData.vx_isChecked || '',
		vx_token: lifeData.vx_token || false,
		vx_userInfo: lifeData.vx_userInfo || baseUserInfo,
		vx_pushInfo: lifeData.vx_pushInfo || false, // unipush 客户端信息
		vx_systemInfo: null
	},
	modules: {
		tabBar,
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if (nameArr.length >= 2) {
				let obj = state[nameArr[0]];
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地
			saveLifeData(saveKey, state[saveKey])
		},
		updatePushInfo(state, payload) {
			state.vx_pushInfo = payload;
			saveLifeData('vx_pushInfo', state.vx_pushInfo);
			this.dispatch('updatePushClient');
		},
		// 退出曾路
		logout(state) {
			state.vx_token = false;
			saveLifeData('vx_token', state.token);
			state.vx_userInfo = baseUserInfo;
			saveLifeData('vx_userInfo', state.vx_userInfo);
			uni.reLaunch({
				url: '/pages/public/login'
			});
		},
	},
	actions: {
		// 向服务端更新用户推送信息
		async updatePushClient({
			state
		}) {
			if (state.vx_token && state.vx_pushInfo) {
				try {
					// 请求接口保存vx_pushInfo
				} catch (e) {
					console.log(e);
				}
			}
		}
	},
	getters: {

	}
})

export default store;