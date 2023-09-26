<template>
	<view class="container">
		<view class="head">
			<view class="bg">
				<image src="@/static/images/common/user_bg.png" mode=""></image>
			</view>
			<view class="user">
				<view class="user_group" v-if="!noLogin">
					<view class="avatar">
						<u-avatar size="60" :src="avatar"></u-avatar>
					</view>
					<view class="nologin">
						请登录
					</view>
				</view>
				<view class="user_group">
					<view class="avatar">
						<u-avatar size="60" :src="avatar"></u-avatar>
					</view>
					<view class="user_info">
						<view class="name">
							乔丹官方超级旗舰店
						</view>
						<view class="rate">
							<u-rate :value="3.7" activeColor="#222" readonly></u-rate>
						</view>
					</view>
					<view class="signin">
						签到
					</view>
				</view>
				<view class="user_data">
					<view class="group">
						<view class="value">
							56
						</view>
						<view class="lable">
							我的收藏
						</view>
					</view>
					<view class="group">
						<view class="value">
							78
						</view>
						<view class="lable">
							购物车
						</view>
					</view>
					<view class="group">
						<view class="value">
							78
						</view>
						<view class="lable">
							我的足迹
						</view>
					</view>
					<view class="group">
						<view class="value">
							27
						</view>
						<view class="lable">
							我的卡券
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="order">
			<view class="group">
				<view class="title">
					我的订单
				</view>
				<view class="all_order">
					全部订单 >
				</view>
			</view>
			<view class="order_status">
				<view class="item">
					<view class="icon">
						<image src="@/static/images/icon/obligation.png" mode=""></image>
					</view>
					<view class="lable">
						待付款
					</view>
				</view>
				<view class="item">
					<view class="icon">
						<image src="@/static/images/icon/tobeshipped.png" mode=""></image>
					</view>
					<view class="lable">
						待发货
					</view>
				</view>
				<view class="item">
					<view class="icon">
						<image src="@/static/images/icon/goodstobe.png" mode=""></image>
					</view>
					<view class="lable">
						待收货
					</view>
				</view>
				<view class="item">
					<view class="icon">
						<image src="@/static/images/icon/aftersales.png" mode=""></image>
					</view>
					<view class="lable">
						售后退款
					</view>
				</view>
			</view>
		</view>
		<BottomToolBar></BottomToolBar>
	</view>
</template>

<script>
	import BottomToolBar from '@/components/d-BottomToolBar/index.vue';
	export default {
		components: {
			BottomToolBar
		},
		data() {
			return {
				avatar: "/static/images/user/avatar.png",
				noLogin: true
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #F5F5F5;

		.head {
			position: relative;

			.bg {
				image {
					width: 100%;
					height: 604rpx;
				}
			}

			.user {
				position: absolute;
				top: 50%;
				width: 94%;
				left: 50%;
				transform: translate(-50%, -50%);

				&_group {
					position: relative;
					display: flex;

					.nologin {
						margin-top: 15rpx;
						margin-left: 32rpx;
						color: #000;
						font-family: PingFang SC;
						font-size: 32rpx;
						font-weight: 400;
					}

					.user_info {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 32rpx;

						.name {
							color: #000;
							font-family: PingFang SC;
							font-size: 32rpx;
							font-weight: 400;
						}
					}

					.signin {
						position: absolute;
						right: -3%;
						bottom: 0;
						width: 88rpx;
						height: 50rpx;
						border-radius: 4px 0px 0px 4px;
						background: #0F1E0A;
						color: #FFF;
						text-align: center;
						line-height: 50rpx;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 600;
					}
				}

				&_data {

					display: flex;
					justify-content: space-between;
					margin-top: 48rpx;

					.group {
						width: calc(100% / 4);
						text-align: center;

						.value {
							color: #293226;
							text-align: center;
							font-family: PingFang SC;
							font-size: 44rpx;
							font-weight: 600;
						}

						.lable {
							color: #6D746B;
							text-align: center;
							font-family: PingFang SC;
							font-size: 24rpx;
							font-weight: 400;
						}
					}
				}
			}
		}

		.order {
			position: relative;
			top: -140rpx;
			width: 94%;
			margin: 0 auto;
			height: 242rpx;
			padding: 32rpx 24rpx;
			box-sizing: border-box;
			border-radius: 16rpx;
			background: #FFF;

			.group {
				display: flex;
				justify-content: space-between;
				font-family: PingFang SC;
				font-weight: 400;

				.title {
					color: #0F1E0A;
					font-size: 28rpx;
				}

				.all_order {
					color: #939692;
					font-size: 24rpx;

				}

			}
			&_status{
				display: flex;
				.item{
					width: calc(100% / 4);
					text-align: center;
					.icon{
						image{
							width: 80rpx;
							height: 80rpx;
						}
					}
				}
			}
		}
	}
</style>