<template>
	<view class="container">
		<view class="goods">
			<view class="goods_head">
				<view class="main_image">
					<u-swiper :list="list1" @change="autoChange" height="462"> </u-swiper>
					<view class="page">
						<text class="active">{{pageIndex+1}}</text>/<text class="page_size">{{list1.length}}</text>
					</view>
				</view>
				<view class="limited">
					<view class="bg">
						<image src="@/static/images/product/bg.png" mode=""></image>
					</view>

				</view>
				<view class="goods_content">
					<view class="main">
						<view class="" style="display: flex;justify-content: space-between;">
							<view class="goods_data">
								<view class="price">
									<view class="text">
										￥
									</view>
									<view class="money">
										8961
									</view>
									<view class="desc">
										券后价
									</view>
								</view>
								<view class="browse">
									7人想要/1335浏览
								</view>
							</view>
							<view class="share">
								<view class="group">
									<view class="icon">
										<image src="@/static/images/icon/share.png" mode=""></image>
									</view>
									<view class="text">
										分享
									</view>
								</view>
							</view>
						</view>
						<view class="preferential">
							<view class="coupon">
								<view class="group">
									立减200
								</view>
								<view class="group">
									包邮券
								</view>
							</view>
							<view class="expiration">
								08:09:52后过期
							</view>
						</view>
						<view class="title">
							大S联名设计】意式浪漫月相白系列 肤白貌美大长腿大长腿大长腿大长腿
						</view>
						<view class="goods_address">
							<view class="icon">
								<image src="@/static/images/icon/gaddress.png" mode=""></image>
							</view>
							<view class="text">
								发货地
							</view>
							<view class="address">
								杭州
							</view>
						</view>
					</view>
					<view class="guarantee">
						<view class="auth">
							保障
						</view>
						<view class="equity">
							<text>正品保证</text>
							<text>假一赔十</text>
							<text>30天无忧退换货</text>
						</view>
						<view class="icon">
							<image src="@/static/images/icon/goback.png" mode=""></image>
						</view>
					</view>
					<view class="subsidy">
						<view class="group">
							<view class="text">
								优惠
							</view>
							<view class="content">
								补贴￥399 已售999/件
							</view>
						</view>
						<view class="group">
							<view class="text">
								发货时间
							</view>
							<view class="content">
								现在至明天前下单，预计01月29日 （周六）送到
							</view>
						</view>
					</view>
				</view>
				<view class="evaluate">
					<view class="head">
						<view class="head_title">
							<view class="text">
								用户评价
							</view>
							<view class="data">
								（999）
							</view>
						</view>
						<view class="head_comment">
							<text class="text">好评</text>
							<text class="data">99.9%</text>
							<view class="icon">
								<image src="@/static/images/icon/goback.png" mode=""></image>
							</view>
						</view>
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
				list1: [
					'/static/images/goods/p1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				pageIndex: 0
			}
		},
		methods: {
			autoChange(index) {
				this.pageIndex = index.current
			}
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		background: #F4F6F7;

		.goods {
			&_head {
				position: relative;

				.main_image {
					position: relative;

					image {
						width: 100%;
					}

					.page {
						position: absolute;
						bottom: 60rpx;
						width: 74rpx;
						height: 40rpx;
						border-radius: 24rpx 0px 0px 24rpx;
						// opacity: 0.4;
						background: rgba(147, 150, 146, 1);
						right: 0;
						color: #FFF;
						font-family: PingFang SC;
						font-size: 20rpx;
						font-weight: 400;
						line-height: 40rpx;
						text-align: center;

						.active {
							font-size: 28rpx;
						}

					}
				}

				.limited {
					position: absolute;
					bottom: -64rpx;
					width: 100%;
					height: 124rpx;
					border-radius: 24px;
					display: none;

					.bg {
						image {
							height: 103px;
							width: 100%;
						}
					}
				}

			}

			&_content {
				background: #F4F6F7;

				.main {
					width: 94%;
					height: 370rpx;
					margin: 0 auto;
					margin-top: 32rpx;
					border-radius: 12px;
					border: 1px solid rgba(255, 255, 255, 0.56);
					background: linear-gradient(0deg, #FFF 88.78%, rgba(255, 255, 255, 0.74) 99.6%);
					backdrop-filter: blur(5.5px);
					padding: 24rpx;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;

					.goods_data {
						.price {
							display: flex;
							align-items: flex-end;

							.text {
								color: #F94E05;
								text-align: center;
								font-family: Roboto;
								font-size: 30rpx;
								font-weight: 500;
							}

							.money {
								color: #F94E05;
								font-family: Roboto;
								font-size: 64rpx;
								line-height: 1;
								font-weight: 500;
							}

							.desc {
								color: #293226;
								font-family: PingFang SC;
								font-size: 24rpx;
								font-weight: 400;
							}
						}

						.browse {
							margin-top: 4rpx;
							color: #939692;
							font-family: PingFang SC;
							font-size: 22rpx;
							font-style: normal;
							font-weight: 500;
						}
					}

					.share {
						position: relative;
						padding-right: 12rpx;
						top: 20rpx;

						.group {

							text-align: center;

							.icon {
								image {
									width: 27rpx;
									height: 30rpx;
									margin-bottom: 6rpx;
								}
							}

							.text {
								color: #939692;
								font-family: PingFang SC;
								font-size: 20rpx;
								font-weight: 500;
							}

						}
					}

					.share::after {
						content: '';
						position: absolute;
						left: -32rpx;
						top: 0;
						width: 1px;
						height: 68rpx;
						background-color: rgba(151, 151, 151, 1);
						display: block;
					}

					.preferential {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 22rpx;
						margin-bottom: 26rpx;

						.coupon {
							display: flex;

							.group {
								position: relative;
								display: inline-flex;
								padding: 4px 12px;
								justify-content: center;
								align-items: center;
								gap: 10px;
								background: rgba(249, 78, 5, 0.10);
								color: #F94E05;
								font-family: PingFang SC;
								font-size: 20rpx;
								text-align: center;
								font-weight: 400;
								margin-right: 10rpx;
							}

							.group::after {
								content: "";
								display: inline-block;
								width: 14rpx;
								height: 14rpx;
								background: #ffffff;
								position: absolute;
								left: -5rpx;
								border-radius: 50%;
							}

							.group::before {
								content: "";
								display: inline-block;
								width: 14rpx;
								height: 14rpx;
								background: #ffffff;
								position: absolute;
								right: -5rpx;
								border-radius: 50%;
							}
						}

						.expiration {
							color: #939692;
							font-family: PingFang SC;
							font-size: 22rpx;
							font-weight: 500;
						}
					}

					.title {
						color: #111;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
					}

					.goods_address {
						margin-top: 20rpx;
						display: flex;
						color: #939692;
						font-family: PingFang SC;
						font-size: 22rpx;
						font-weight: 500;

						.icon {
							margin-right: 12.8rpx;

							image {
								width: 20rpx;
								height: 24rpx;
							}

						}

						.text {
							padding-right: 28rpx;
						}
					}
				}

				.guarantee {
					width: 94%;
					margin: 0 auto;
					margin-top: 16rpx;
					height: 114rpx;
					border-radius: 24rpx;
					border: 1px solid rgba(255, 255, 255, 0.56);
					background: #FFF;
					backdrop-filter: blur(5.5px);
					flex-shrink: 0;
					display: flex;
					justify-content: space-around;
					align-items: center;

					.auth {
						width: 70rpx;
						height: 36rpx;
						background: #293226;
						color: #BEF000;
						text-align: center;
						font-family: YouSheBiaoTiHei;
						font-size: 24rpx;
					}

					.equity {
						color: #111;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;

						text {
							padding: 0 10rpx;
						}
					}

					.icon {
						image {
						width: 14rpx;
						height: 22rpx;
						}
					}
				}

				.subsidy {
					width: 94%;
					margin: 0 auto;
					margin-top: 16rpx;
					height: 196rpx;
					border-radius: 12px;
					border: 2rpx solid rgba(255, 255, 255, 0.56);
					background: #FFF;
					backdrop-filter: blur(5.5px);
					display: flex;
					flex-direction: column;
					padding: 0 24rpx;
					justify-content: space-evenly;
					box-sizing: border-box;

					.group {
						display: flex;

						.text {
							width: 106rpx;
							color: #6D746B;
							font-family: PingFang SC;
							font-size: 24rpx;
							font-weight: 400;
							padding-right: 34rpx;
						}

						.content {
							color: #000;
							font-family: PingFang SC;
							font-size: 24rpx;
							font-weight: 400;
						}
					}
				}
			}

			.evaluate {
				width: 94%;
				height: 606rpx;
				border-radius: 12px;
				border: 1px solid rgba(255, 255, 255, 0.56);
				background: var(--A4, #FFF);
				backdrop-filter: blur(5.5px);
				margin: 0 auto;
				margin-top: 16rpx;
				padding: 20rpx;
				box-sizing: border-box;

				.head {
					display: flex;
					justify-content: space-between;

					&_title {
						display: flex;
						align-items: center;
						color: #111;
						font-family: PingFang SC;
						font-weight: 400;
						font-size: 28rpx;
						.data {
							color: #939692;
						}
					}

					&_comment {
						display: flex;
						align-items: center;
						color: #939692;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 500;
						.data{
							color: #444942;
							padding: 0 8rpx;
							font-size: 28rpx;

						}
						.icon {
							margin-top: 3rpx;
							image {
								width: 14rpx;
								height: 22rpx;
							}
						}
					}
				}
			}
		}

	}
</style>