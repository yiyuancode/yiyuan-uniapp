<template>
	<view class="container">
		<view class="page-main" :style="{'padding-top':$uniHeight().top+50+'px'}">
			<view class="page-head">
				<u-navbar leftIconColor="#000000" safeAreaInsetTop :autoBack="true">
					<view class="u-nav-slot" slot="left">
						<u-icon name="arrow-left" color='#ffffff' size="19"></u-icon>
						<view class="text">
							百亿补贴
						</view>
					</view>
				</u-navbar>
				<hotsBuying></hotsBuying>
			</view>
			<view class="page-content">
				<u-tabs :list="list4" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
				            color: '#0F1E0A',
							fontFamily:'PingFang SC',
				            fontSize:'18px'
				        }" :inactiveStyle="{
				            color: '#0F1E0A',
							fontFamily:'PingFang SC',
				            fontSize:'14px'
				        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
				</u-tabs>
				<view class="product">
					<view class="product_item" v-for="(item,index) in 3">
						<view class="product_item_image">
							<image src="@/static/images/product/p5.png" mode=""></image>
						</view>
						<view class="product_item_content">
							<view class="top">
								<view class="title">
									乔丹同款绿色时髦凉爽T恤
								</view>
								<view class="progress">
									<u-line-progress :percentage="30">
										<text class="u-percentage-slot">仅剩{{90}}%</text>
									</u-line-progress>
								</view>
							</view>
							<view class="product_item_content_subsidy">
								<view class="scribe">
									￥188.88
								</view>
								<view class="price">
									<text class="text">补贴后 ¥</text> <text class="value">99.7</text>
								</view>
								<view class="arrow">
									<image src="@/static/images/icon/rarrow.png" mode=""></image>
									<view class="subsidy_price">
										<view class="text">
											已补贴
										</view>
										<view class="num">
											998元
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import hotsBuying from './components/hotsBuying.vue'
	export default {
		components: {
			hotsBuying
		},
		data() {
			return {
				list4: [{
					name: '乔丹衣服'
				}, {
					name: '家用电器',

				}, {
					name: '居家必备',
				}, {
					name: '周边出行'
				}, {
					name: '周边出行'
				}, {
					name: '周边出行'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-percentage-slot {
		// background-color: $u-warning;
	
		
		// border: 1px solid var(--C1, #F94E05);
		color: var(--C1, #F94E05);
		font-family: PingFang SC;
		font-size: 20rpx;
		font-style: normal;
		width: 100%;
		text-align: center;
	}
	/deep/ .u-line-progress__background{
		height: 30rpx !important;
	}
	/deep/ .u-line-progress__line{
		background-color: #fff !important;
		border: 1px solid var(--C1, #F94E05);
		height: 26rpx !important;
	}

	.page-main {
		width: 100%;
		height: 489px;
		background: linear-gradient(326deg, #FF4838 69.75%, #FF6D3F 99.62%);

		.page-head {
			.u-nav-slot {
				display: flex;
				color: #FFF;
				text-align: center;
				font-family: YouSheBiaoTiHei;
				font-size: 48rpx;
				font-weight: 400;

				.text {
					padding-left: 10rpx;
				}
			}
		}

		.page-content {
			margin-top: 26rpx;
			width: 100%;
			height: 502px;
			flex-shrink: 0;
			border-radius: 16px;
			border: 1px solid rgba(255, 255, 255, 0.56);
			background: linear-gradient(0deg, #FFF 88.78%, rgba(255, 255, 255, 0.74) 99.6%);
			backdrop-filter: blur(5.5px);
			box-sizing: border-box;
			padding: 32rpx 12rpx;

			.product {

				&_item {
					display: flex;
					margin: 17rpx 0;

					&_image {
						width: 240rpx;
						height: 240rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					&_content {
						margin-left: 29rpx;
						display: flex;
						flex-direction: column;

						.top {
							flex-grow: 1;

							.title {
								color: #293226;
								font-family: PingFang SC;
								font-size: 28.021rpx;
								font-style: normal;
								font-weight: 400;
								margin-bottom: 18rpx;
							}
						}


						&_subsidy {
							position: relative;
							flex-grow: 0;
							width: 358rpx;
							height: 88rpx;
							background: rgba(249, 78, 5, .1);
							box-sizing: border-box;
							padding: 10rpx 20rpx;
							border-radius: 20rpx;

							.scribe {
								text-decoration: line-through;
								color: #FE964A;
								font-family: PingFang SC;
								font-size: 10px;
								font-weight: 400;
							}

							.price {
								color: #F94E05;
								font-family: Roboto;

								.text {
									text-align: center;
									font-size: 24rpx;
									font-style: normal;
									font-weight: 400;
									line-height: 100%;

								}

								.value {
									font-family: Roboto;
									font-size: 44rpx;
									font-style: normal;
									font-weight: 500;
									line-height: 100%;
									padding-left: 10rpx;
								}
							}

							.arrow {
								position: absolute;
								right: -20%;
								top: 0;

								image {
									width: 150.49rpx;
									height: 86.75rpx;

								}

								.subsidy_price {
									position: absolute;
									top: 50%;
									transform: translateY(-55%);
									width: 100%;
									text-align: center;
									color: #FFF;
									font-family: PingFang SC;

									.text {
										font-size: 20rpx;
										font-style: normal;
										font-weight: 400;
									}

									.num {
										font-size: 24rpx;
										font-style: normal;
										font-weight: 400;
									}
								}
							}
						}
					}
				}
			}
		}
	}

	/deep/ .u-navbar__content {
		background: transparent !important;
	}

	/deep/ .u-status-bar {
		background: transparent !important;
	}
</style>