// store/tabBar.js
const tabBar = {
	namespaced: true, // 添加命名空间标识
	state: {
		activeTab: 0,
		barList: [{
				name: '首页',
				iconPath: '/static/images/toolbar-icon/home.png',
				selectedIconPath: '/static/images/toolbar-icon/homed.png',
				path: '/pages/index/index'
			},
			{
				name: '分类',
				iconPath: '/static/images/toolbar-icon/category.png',
				selectedIconPath: '/static/images/toolbar-icon/categoryed.png',
				path: '/pages/category/index'
			},
			{
				name: '购物车',
				iconPath: '/static/images/toolbar-icon/cart.png',
				selectedIconPath: '/static/images/toolbar-icon/carted.png',
				path: '/pages/cart/index'
			},
			{
				name: '消息',
				iconPath: '/static/images/toolbar-icon/mess.png',
				selectedIconPath: '/static/images/toolbar-icon/messed.png',
				path: '/pages/message/index'
			},
			{
				name: '我的',
				iconPath: '/static/images/toolbar-icon/user.png',
				selectedIconPath: '/static/images/toolbar-icon/usered.png',
				path: '/pages/user/index/index'
			}
		]
	},
	mutations: {
		updateActiveTab(state, tab) {
			state.activeTab = tab;
		},
		updateBarList(state, barList) {
			state.barList = barList;
		}
	}
};

export default tabBar;