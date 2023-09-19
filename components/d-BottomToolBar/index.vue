<template>
	<!-- 底部导航 -->
	<view>
		<u-tabbar :value="checkVal" @change="checkMenu" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true"
			:activeColor="444942" :zIndex="999">
			<u-tabbar-item :text="item.name" :icon="item.image" v-for="(item,index) in barList"
				:key="index"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeRouter: '',
				barList: [{
						name: '首页',
						image: '/static/images/toolbar-icon/home.png',
						checked: '/static/images/toolbar-icon/homed.png',
						path: '/Index/index'
					}, {
						name: '分类',
						image: '/static/images/toolbar-icon/category.png',
						checked: '/static/images/toolbar-icon/categoryed.png',
						path: '/category/index'
					},
					{
						name: '购物车',
						image: '/static/images/toolbar-icon/cart.png',
						checked: '/static/images/toolbar-icon/carted.png',
						path: 'Cart/index'
					},
					{
						name: '消息',
						image: '/static/images/toolbar-icon/mess.png',
						checked: '/static/images/toolbar-icon/messed.png',
						path: '/Message/index'
					},
					{
						name: '我的',
						image: '/static/images/toolbar-icon/user.png',
						checked: '/static/images/toolbar-icon/usered.png',
						path: '/pages/user/index/index'
					},
				],
				checkVal: 0
			}
		},
		methods: {
			goRouter(item) {
				this.activeRouter = item.path
			},
			checkMenu(name) {

				if (name === 2) return uni.$u.toast('请您先登录')
				else this.checkVal = name;
				// 循环返回选中图标
				Object.keys(this.barList).forEach(key => {

					if (name == key) {
						this.barList[key].image = this.barList[key].checked;
						uni.navigateTo({
							url: this.barList[key].path
						})
						return;
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.d-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		border-top: 1rpx solid #DDD;
		background-color: #fff;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		.d-item {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			position: relative;
			padding: 15rpx 0;

			.block {
				text-align: center;

				image {
					height: 50rpx;
					width: 50rpx;
					text-align: center;
					margin: 0 auto;
				}

				.text {
					color: #111;
					text-align: center;
					font-family: PingFang SC;
					font-size: 21.97rpx;
					font-weight: 400;
				}
			}

		}
	}
</style>