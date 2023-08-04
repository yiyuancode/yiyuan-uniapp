<template>
	<!-- 底部导航 -->
	<view>
		<view class="d-footer">
			<view class="d-item" v-for="(item,index) in barList" :key="index" @click="goRouter(item)">
				<view class="block" v-if="item.path!= activeRouter">
					<image :src="item.image"></image>
					<view class="text">
						{{item.name}}
					</view>
				</view>
				<view class="block" v-else>
					<image :src="item.checked"></image>
					<view class="text">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
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
						checked: '/static/images/toolbar-icon/home.png',
						path: '/Index/index'
					}, {
						name: '分类',
						image: '/static/images/toolbar-icon/category.png',
						checked: '/static/images/toolbar-icon/home.png',
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
						checked: '/static/images/toolbar-icon/home.png',
						path: '/Message/index'
					},
					{
						name: '我的',
						image: '/static/images/toolbar-icon/user.png',
						checked: '/static/images/toolbar-icon/home.png',
						path: '/User/index'
					},
				]
			}
		},
		methods: {
			goRouter(item) {
				this.activeRouter = item.path
			}
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