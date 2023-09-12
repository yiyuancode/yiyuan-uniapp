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

				<!-- 店铺首页 -->
				<goodsIndex v-if="bIndex==0"></goodsIndex>
				<!-- 店铺分类 -->
				<shopCategory v-if="bIndex==1"></shopCategory>
			</view>
		</view>
		<!-- 店铺底部bar -->
		<toolbars @barIndex="updateValue"></toolbars>
	</view>
</template>

<script>
	import toolbars from '../components/toolbars/toolbars.vue'
	import goodsIndex from '../goods/index/index.vue'
	import shopCategory from '../category/index.vue'
	export default {
		components: {
			toolbars,
			goodsIndex,
			shopCategory
		},
		data() {
			return {
				childToParent: '',
				followed: false,
				pIndex: 0,
				bIndex: 1
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

			updateValue(index) {
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