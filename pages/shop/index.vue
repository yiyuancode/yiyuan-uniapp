<template>
	<!-- 榜单页 -->
	<view class="container">
		<view class="page-main" :style="{'padding-top':$uniHeight().top+50+'px'}">
			<u-navbar leftIconColor="#000000" safeAreaInsetTop :autoBack="true">
				<view class="u-nav-slot" slot="left">
					<image src="@/static/images/icon/round-back.png" mode=""></image>
				</view>
			</u-navbar>
			<view class="shop">
				<view class="shop_head">
					<view class="shop_head_info">
						<view class="avatar">
							<u-avatar src="/static/images/shop/shop.png"></u-avatar>

						</view>
						<view class="shop_head_name">
							<view class="title">
								乔丹旗舰店 <image src="@/static/images/icon/shopArrow.png" mode=""></image>
							</view>
							<view class="score">
								<view class="evaluate">
									★★★★
								</view>
								<view class="time">
									10年老店
								</view>
							</view>
						</view>
					</view>

					<view class="shop_head_url">
						<view :class="followed==true?'state active':'state'" @click="followedClick(true)">
							<text v-if="!followed">关注</text>
							<text v-if="followed">已关注</text>
						</view>
					</view>
				</view>

			</view>

		</view>
		<view class="page_bg">
			<view class="page_content">
				<view class="product_box">
					<view class="product_box_head">
						<view class="title">
							爆款推荐
						</view>
						<view class="desc">
							口碑新品 畅销必买
						</view>
					</view>
					<view class="product">
						<view class="product_item" v-for="(item,index) in 6">
							<view class="image">
								<image src="@/static/images/product/p2.png" mode=""></image>
							</view>
							<view class="title">
								IPhone 14 Pro Max
							</view>
							<view class="price">
								<text class="text">￥</text>
								<text class="value">99</text>
								<text class="desc">券后价</text>
							</view>
							<view class="payment">
								822人付款
							</view>
						</view>
					</view>
				</view>
				<view class="product_box store_list">
					<view class="product_box_head">
						<view class="title">
							店铺榜单
						</view>
						<view class="desc">
							跟着大家一起买买买
						</view>
					</view>
					<view class="store_button">
						<view :class="bIndex==item.index?'active':'button'" v-for="(item,index) in list5" :key="index"
							@click="onClick(item.index)">
							{{item.name}}
						</view>
					</view>
					<view class="products">
						<view class="products_item" v-for="(item,index) in 10" :key="index">
							<view class="products_item_image">
								<image class="products_image" src="@/static/images/product/p5.png" mode=""></image>
								<view class="sort" v-if="pIndex==1">
									<image src="@/static/images/icon/leve1.png" mode=""></image>
									<view class="num">
										{{index+1}}
									</view>
								</view>
							</view>
							<view class="products_item_content">
								<view class="products_item_content_box">
									<view class="products_item_content_box_title">
										乔丹同款绿色时髦凉爽T恤
									</view>
									<view class="products_item_content_box_purchased">
										<u-avatar-group :urls="urls" size="20" gap="0.4"></u-avatar-group>
										<view class="days">
											近7天有899人购买
										</view>
									</view>
								</view>
								<view class="products_item_content_box_bottom">
									<view class="products_item_content_box_bottom_price">
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
		<u-tabbar :value="value6" @change="name => value6 = name" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true">
			<u-tabbar-item text="首页" icon="home"></u-tabbar-item>
			<u-tabbar-item text="分类" icon="photo"></u-tabbar-item>
			<u-tabbar-item text="优惠券" icon="play-right"></u-tabbar-item>
			<u-tabbar-item text="客服" icon="account"></u-tabbar-item>
		</u-tabbar>
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
				list5: [{
						index: 0,
						name: '销量榜'
					},
					{
						index: 1,
						name: '收藏榜'
					},
					{
						index: 2,
						name: '新品榜'
					}
				],
				followed: false,
				pIndex: 0,
				bIndex: 0
			}
		},
		methods: {
			// 关注已关注
			followedClick(val) {
				this.followed = !this.followed
			},
			tabClick(e) {
				this.pIndex = e.index;
			},
			onClick(index) {
				this.bIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #F2F4F7;
		position: relative;

		.page-main {
			background: linear-gradient(180deg, #C6FF7E 0%, #DFF9C2 85.29%);
			height: 472rpx;

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

			.shop {
				width: 94%;
				margin: 0 auto;
				box-sizing: border-box;
				border-radius: 8px;
				margin-bottom: 10rpx;

				padding: 20rpx 24rpx;

				&_head {
					display: flex;
					justify-content: space-between;
					align-items: center;

					&_info {
						display: flex;

						image {
							background-color: #F2F4F7;
							border-radius: 50%;
							width: 80rpx;
							height: 80rpx;
						}

						.title {
							color: #000;
							font-family: PingFang SC;
							font-size: 32rpx;
							font-weight: 400;
							margin-bottom: 8rpx;

							image {
								margin-left: 10rpx;
								width: 32rpx;
								height: 32rpx;
							}
						}

						.score {
							display: flex;
							align-items: center;

							.time {
								color: #6D746B;
								text-align: center;
								font-family: PingFang SC;
								font-size: 24rpx;
								font-weight: 400;
								margin-left: 16rpx;
							}
						}
					}

					&_name {
						margin-left: 24rpx;
					}

					&_url {
						.state {
							width: 144rpx;
							height: 56rpx;
							line-height: 56rpx;
							text-align: center;
							border-radius: 70rpx;
							background: #F94E05;
							color: #FFF;
							font-family: PingFang SC;
							font-size: 28rpx;
						}

						.active {
							border-radius: 70rpx;
							background: #0F1E0A;
						}
					}
				}


			}

		}

		.page_bg {
			background: #F2F4F7;
			min-height: 30vh;
		}

		.page_content {
			position: relative;
			top: 50%;
			left: 50%;
			width: calc(100% - 4%);
			transform: translate(-50%, -9%);

			.product_box {

				border-radius: 12px;
				background: #FFF;
				margin-bottom: 16rpx;

				&_head {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 24rpx 16rpx;

					.title {
						color: #0F1E0A;
						font-family: YouSheBiaoTiHei;
						font-size: 40rpx;
					}

					.desc {
						color: #939692;
						font-family: PingFang SC;
						font-size: 20rpx;
						font-weight: 500;
					}
				}

				.product {
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;

					&_item {
						margin-bottom: 16rpx;

						.image {
							width: 216.666rpx;
							height: 216.666rpx;
							background: rgba(217, 217, 217, 0.26);

							image {
								border-radius: 8px;
								width: 100%;
								height: 100%;
							}
						}

						.title {
							color: #000;
							font-family: PingFang SC;
							font-size: 12px;
							font-weight: 400;
							margin: 9rpx 0;
						}

						.price {
							color: #F94E05;
							font-family: Roboto;
							font-weight: 500;

							text {
								margin-right: 5rpx;
							}

							.text {
								font-size: 26rpx;
							}

							.value {
								font-size: 36rpx;
							}

							.desc {
								font-size: 20rpx;
								font-weight: 400;
							}
						}

						.payment {
							color: #939692;
							font-family: PingFang SC;
							font-size: 20rpx;
							font-weight: 500;
						}
					}
				}

			}

			.store_list {

				.store_button {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 94%;
					margin: 0 auto;
					height: 80rpx;
					margin-bottom: 24rpx;
					border-radius: 8px;
					background: #F2F4F7;
					text-align: center;

					.button {
						color: #444942;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
						height: 100%;
						width: calc(100% / 3);
						line-height: 3.5;
					}

					.active {
						width: 222rpx;
						height: 72rpx;
						font-family: PingFang SC;
						margin-left: 5rpx;
						line-height: 72rpx;
						border-radius: 6px;
						background: #FFF;
					}
				}

				.products {


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

							.products_image {
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