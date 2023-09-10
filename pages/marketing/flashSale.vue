<template>
	<view class="container">
		<view class="page-main" :style="{'padding-top':$uniHeight().top+50+'px'}">
			<view class="page-head">
				<u-navbar leftIconColor="#000000" safeAreaInsetTop :autoBack="true">
					<view class="u-nav-slot" slot="left">
						<u-icon name="arrow-left" color='#ffffff' size="19"></u-icon>
						<view class="text">
							限时抢购
						</view>
						<view class="desc">
							抢购不用卷，限时更便宜
						</view>
					</view>
				</u-navbar>
				<hotsBuying></hotsBuying>
			</view>
			<view class="page-content">

				<view class="countdown">
					<u-scroll-list :indicator="false">
						<view class="countdown_item active">
							<view class="time">
								19:00
							</view>
							<view class="countdown_time">
								剩余 00:41:45
							</view>
						</view>
						<view class="countdown_item ">
							<view class="time">
								119:00
							</view>
							<view class="countdown_time">
								剩余 00:41:45
							</view>
						</view>
					</u-scroll-list>
				</view>
				<view class="product-box">
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
		color: #F94E05;
		font-family: PingFang SC;
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		width: 100%;
		text-align: center;
	}

	/deep/ .u-line-progress__background {
		height: 30rpx !important;
		background-color: rgba(249, 78, 5, .2);
	}

	/deep/ .u-line-progress__line {
		// border: 1px solid var(--C1, #F94E05);
		background-color: rgba(249, 78, 5, .1) !important;
		height: 28rpx !important;
	}


	/deep/ .u-scroll-list {
		padding-bottom: 0 !important;
	}

	.page-main {
		width: 100%;
		background: linear-gradient(326deg, #FF4838 69.75%, #FF6D3F 99.62%);

		.page-head {
			.u-nav-slot {
				display: flex;
				color: #FFF;
				text-align: center;
				font-family: YouSheBiaoTiHei;


				.text {
					padding-left: 10rpx;
					font-size: 48rpx;
					font-weight: 400;

				}

				.desc {
					padding-left: 20rpx;
					line-height: 3.1;
					color: #FFF;
					font-family: PingFang SC;
					font-size: 22rpx;
					font-style: normal;
					font-weight: 400;
				}
			}
		}

		.page-content {
			.countdown {
				margin-top: 24rpx;

				&_item {
					width: 196rpx;
					height: 110rpx;
					border-bottom-left-radius: 20rpx;

					.time {
						text-align: center;
						font-family: Roboto;
						font-size: 44rpx;
						font-style: normal;
						font-weight: 500;
						color: #FFF;
					}

					.countdown_time {
						text-align: center;
						font-family: PingFang SC;
						font-size: 22rpx;
						color: #FFF;
						font-weight: 400;
					}
				}

				.active {
					background: #D9D9D9;
					border-top-left-radius: 20rpx;
					border-top-right-radius: 20rpx;

					.time {
						color: #F94E05;
					}

					.countdown_time {
						color: #F94E05;
					}
				}
			}

			.product-box {
				background: #fff;

				.product {
					width: 94%;
					margin: 0 auto;

					&_item {
						display: flex;
						padding-top: 41rpx;

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
	}

	/deep/ .u-navbar__content {
		background: transparent !important;
	}

	/deep/ .u-status-bar {
		background: transparent !important;
	}
</style>