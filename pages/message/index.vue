<template>
	<view class="container">
		<view class="page-head" :style="{'padding-top':$uniHeight().top+50+'px'}">
			<u-navbar title="消息" :safeAreaInsetTop="true">
				<view class="u-nav-slot" slot="left">
				</view>
			</u-navbar>
		</view>
		<view class="notice">
			<view class="notice_item">
				<view class="group ">
					<view class="icon notice_bg">
						<image src="/static/images/icon/nocite.png" mode=""></image>
					</view>
					<view class="content">
						<view class="title">
							您的购买已签收
						</view>
						<view class="operate">
							已签收 山东泰安泰山区交韵公司...
						</view>
					</view>
				
				</view>
				<view class="date">
					18:00
				</view>
			</view>
			<view class="notice_item">
				<view class="group ">
					<view class="icon notice_bg">
						<image src="/static/images/icon/nocite.png" mode=""></image>
					</view>
					<view class="content">
						<view class="title">
							您的购买已签收
						</view>
						<view class="operate">
							已签收 山东泰安泰山区交韵公司...
						</view>
					</view>
				
				</view>
				<view class="date">
					18:00
				</view>
			</view>
		</view>
		<tabBar></tabBar>
	</view>
</template>

<script>
	import tabBar from '@/components/tabBar/index.vue';
	export default {
		components: {
			tabBar
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
		background: #F2F4F7;

		.notice {
			width: 94%;
			margin: 0 auto;

			&_item {
				display: flex;
				justify-content: space-between;
				padding: 24rpx;
				border-radius: 24rpx;
				box-sizing: border-box;
				background: #FFF;
				margin-bottom: 24rpx;
				.notice_bg {
					background-color: #F94E05;
				}

				.group {
					display: flex;
					
					.icon{
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						image {
							width: 40rpx;
							height: 40rpx;
						}
					}
					.content{
						margin-left: 20rpx;
						font-family: PingFang SC;
						font-weight: 400;
						.title{
							color: #000;
							font-size: 28rpx;
						}
						.operate{
							color: #939692;
							font-size: 24rpx;
						}
					}
				}
				.date{
					color: #6D746B;
					font-family: PingFang SC;
					font-size: 20rpx;
					font-weight: 400;
				}
			}
		}
		/deep/ .u-status-bar,
		{
		background-color: transparent !important;
		}
		
		/deep/ .u-navbar__content {
			background-color: transparent !important;
		}
		/deep/ .u-navbar__content__title{
			color:  #0F1E0A;
			font-family: PingFang SC;
			font-size: 32rpx;
			font-weight: 400;
		}
	}
</style>