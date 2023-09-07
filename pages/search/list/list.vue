<template>
	<!-- 榜单页 -->
	<view class="container">
		<view class="page-main" :style="{'padding-top':$uniHeight().top+50+'px'}">
			<u-navbar leftIconColor="#000000" safeAreaInsetTop :autoBack="true">
				<view class="u-nav-slot" slot="left">
					<image src="@/static/images/icon/round-back.png" mode=""></image>
				</view>
			</u-navbar>
			<view class="header">
				<view class="header_title">
					<view class="header_title_bold">
						一源热门榜单
					</view>
					<view class="header_title_desc">
						商品趋势一网打进
					</view>
				</view>
				<view class="trophy">
					<image src="/static/images/icon/trophy.png" mode=""></image>
				</view>
			</view>
			<view class="content">
				<view class="tabs">
					<u-tabs :list="list4" lineWidth="30" @click="tabClick" :activeStyle="{
	            color: '#303133',
	            fontWeight: 'bold',
				fontFamily:'YouSheBiaoTiHei',
				fontSize:'24px',
	        }" :inactiveStyle="{
	            color: '#293226',
				fontSize:'12px'
	        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
					</u-tabs>

				</view>
				<u-line></u-line>
				<view class="product">
					<view class="product_item" v-for="(item,index) in 10" :key="index">
						<view class="product_item_image">
							<image class="product_image" src="@/static/images/product/p5.png" mode=""></image>
							<view class="sort" v-if="pIndex==1">
								<image src="@/static/images/icon/leve1.png" mode=""></image>
								<view class="num">
									{{index+1}}
								</view>
							</view>
						</view>
						<view class="product_item_content">
							<view class="product_item_content_box">
								<view class="product_item_content_box_title">
									乔丹同款绿色时髦凉爽T恤
								</view>
								<view class="product_item_content_box_purchased">
									<u-avatar-group :urls="urls"  size="20" gap="0.4"></u-avatar-group>
									<view class="days">
										近7天有899人购买
									</view>
								</view>
							</view>
							<view class="product_item_content_box_bottom">
								<view class="product_item_content_box_bottom_price">
									<view class="text">
										¥
									</view>
									<view class="price_val">
										99
									</view>
								</view>
								<view class="buy_btn">
									去看看
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
	export default {
		data() {
			return {
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg'
				],
				list4: [{
					name: '飙升榜'
				}, {
					name: '排行榜',
				}],
				pIndex: 0
			}
		},
		methods: {
			tabClick(e) {
				this.pIndex = e.index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-main {
		background: linear-gradient(180deg, #C6FF7E 0%, #FFF 39.2%, #F2F4F7 41.75%);

		.u-nav-slot {
			image {
				width: 24px;
				height: 24px;
			}
		}

		.header {
			position: relative;
			display: flex;
			justify-content: space-around;

			&_title {
				display: flex;
				flex-direction: column;
				padding-top: 36rpx;

				&_bold {
					color: #000;
					text-align: center;
					font-family: YouSheBiaoTiHei;
					font-size: 64rpx;
					font-style: normal;
					font-weight: 400;
					line-height: normal;
				}

				&_desc {
					width: 100%;
					color: #6D746B;
					text-align: left;
					font-family: PingFang SC;
					font-size: 24rpx;
					margin-top: 6rpx;
					font-weight: 400;

				}

			}

			.trophy {
				image {
					width: 246rpx;
					height: 280rpx;
					flex-shrink: 0;
				}
			}
		}

		.content {
			margin-top: -7.5%;
			height: 646px;
			flex-shrink: 0;
			border-radius: 8px;
			border: 1px solid rgba(255, 255, 255, 0.56);
			background: linear-gradient(0deg, #FFF 78.44%, rgba(255, 255, 255, 0.36) 99.6%);
			backdrop-filter: blur(5.5px);

			.tabs {
				padding: 22rpx 0 18rpx 26rpx;
			}

			.product {
				width: 94%;
				margin: 0 auto;
				margin-top: 40rpx;

				&_item {
					display: flex;
					margin-bottom: 24rpx;

					&_image {
						position: relative;
						padding-right: 24rpx;

						.sort {
							position: absolute;
							top: 0;
							left: 0;

							image {
								width: 44.429rpx;
								height: 44rpx;
								flex-shrink: 0;
							}

							.num {
								position: absolute;
								top: 0;
								left: 15rpx;
								color: #FFF;
								font-family: PingFang SC;
								font-size: 28.143rpx;
								font-weight: 400;
							}

						}

						.product_image {
							width: 220rpx;
							height: 220rpx;
							border-radius: 8px;
							background: #F9F9F9;
						}

					}

					&_content {
						display: flex;
						flex-direction: column;

						&_box {
							flex-grow: 1;

							&_title {
								color: #293226;
								font-family: PingFang SC;
								font-size: 28.021rpx;
								font-style: normal;
								font-weight: 400;
							}

							&_purchased {
								display: flex;
								margin-top: 14rpx;
								color: #939692;
								font-family: PingFang SC;
								font-size: 22rpx;
								text-align: right;
								font-style: normal;
								font-weight: 400;
								.days {
									padding-left: 16rpx;
								}
							}

							&_bottom {
								flex-grow: 0;
								display: flex;
								justify-content: space-between;
								margin-bottom: 10px;

								&_price {
									display: flex;
									color: #F94E05;
									text-align: center;
									font-family: Roboto;
									font-size: 32.024rpx;
									font-style: normal;
									font-weight: 500;
									position: relative;

									.text {
										position: absolute;
										bottom: 0;
										left: 0;
									}

									.price_val {
										font-size: 48rpx;
										font-style: normal;
										font-weight: 500;
										padding-left: 20rpx;
									}
								}

								.buy_btn {
									margin-right: -34%;
									width: 160rpx;
									height: 64rpx;
									background-color: #F94E05;
									text-align: center;
									line-height: 64rpx;
									border-radius: 40rpx;
									color: #FFF;
									font-family: PingFang SC;
									font-size: 28.021rpx;
									font-weight: 400;
								}
							}
						}

					}

				}

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

	/deep/ .u-tabs__wrapper__nav__line {
		display: none;
	}

	/deep/ .u-tabs__wrapper__nav__item {
		padding-left: 0 !important;
	}
</style>