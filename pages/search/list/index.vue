<template>
	<!-- 搜索结果页 -->
	<view class="container">
		<view class="page_head" :style="{'padding-top':$uniHeight().top+'px'}">
			<u-navbar leftIconColor="#000000" leftIconSize="25px" safeAreaInsetTop :autoBack="true">
				<view class="u-nav-slot search-header" slot="left" @click="toUrl('/pages/search/index')">
					<image src="@/static/images/icon/back.png" mode=""></image>
					<view class="search">
						<u-notice-bar icon="search" color="#A1A4A0" bgColor="transparent" fontSize="12"
							:text="searchVal" direction="column"></u-notice-bar>
						<view class="search-btn">
							搜索
						</view>
					</view>
				</view>
			</u-navbar>
			<view class="tabs">
				<u-tabs :list="list1" lineColor="#D2F54D" @click="click"></u-tabs>
			</view>
		</view>
		<view class="page_main">
			<view class="shop" v-for="(item,index) in 5" :key="index" v-show="checkIndex==2">
				<view class="shop_head">
					<view class="shop_head_info">
						<view class="avatar">
							<u-avatar src="/static/images/shop/shop.png"></u-avatar>

						</view>
						<view class="shop_head_name">
							<view class="title">
								乔丹旗舰店
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
						<image src="@/static/images/icon/rightArrow.png" mode=""></image>
					</view>
				</view>
				<view class="shop_product">
					<view class="shop_product_item" v-for="(item,index) in 3">
						<view class="product">
							<image src="@/static/images/product/p5.png" mode=""></image>
							<view class="price">
								<text>¥</text> <text>299</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="product_list">
				<view class="product_list_head">
					<view class="item">
						综合排序
					</view>
					<view class="item">
						销量
					</view>
					<view class="item">
						价格
					</view>
				</view>
				<view class="waterfall">
					<WaterfallFlow ref="wfp" @click="choose" :colunmNumber="colunmNumber" :flowList="list"
						:columnGap="10">
					</WaterfallFlow>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const data = require('./data.json');
	import WaterfallFlow from '@/components/waterfall/waterfall.vue'
	export default {
		components: {
			WaterfallFlow
		},
		data() {
			return {
				searchVal: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',

				list1: [{
					name: '全部',
				}, {
					name: '商品列表',
				}, {
					name: '店铺列表'
				}],
				colunmNumber: 2, //列
				page: 1,
				start: 0,
				end: 0,
				list: [], // 列表
				checkIndex: 0
			}
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			this.page++;
			this.getList();
		},

		methods: {
			getList() {
				if (this.list.length < data.list.length) {
					uni.showLoading({
						title: '加载中...'
					})
					setTimeout(() => {
						//this.$refs.wfp.externalRefrensh(); //清理掉原有加载数据 避免追加
						this.end = this.page * 10; //假数据比较少 , 可以调小一点
						this.list = this.list.concat(data.list.slice(this.start, this.end));

						this.start = this.end;
						uni.hideLoading();
					}, 1000)
				}

			},
			click(item) {
				console.log('item', item);
				this.checkIndex = item.index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #F2F4F7;

		.page_head {
			height: 200rpx;
			background: url('/static/images/home/head-bg.png') top no-repeat;

			.u-nav-slot {
				width: calc(100vw - 200rpx);
				display: flex;
				align-items: center;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.search {
				width: 100%;
				height: 70rpx;
				border-radius: 24rpx;
				border: 4rpx solid #000;
				position: relative;



				&-btn {
					position: absolute;
					right: 10rpx;
					top: 50%;
					transform: translateY(-50%);
					width: 114.612rpx;
					height: 64rpx;
					border-radius: 16rpx;
					background: #000;
					color: #FFF;
					text-align: center;
					font-family: PingFang SC;
					font-size: 14px;
					line-height: 64rpx;
					font-weight: 400;
				}


			}

			.tabs {
				padding-top: 100rpx;

			}
		}

		.page_main {
			.shop {
				width: 94%;
				margin: 0 auto;
				box-sizing: border-box;
				border-radius: 8px;
				margin-bottom: 10rpx;
				background: #FFF;
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
						image {
							width: 32rpx;
							height: 32rpx;
						}
					}
				}

				&_product {
					margin-top: 30rpx;
					display: flex;
					justify-content: space-between;


					&_item {
						width: 208rpx;
						height: 208rpx;
						border-radius: 8px;
						background: #F2F4F7;

						.product {
							display: flex;
							flex-direction: column;
							align-items: center;

							image {
								width: 100%;
								height: 154rpx;
							}

							.price {
								color: #F94E05;
								text-align: center;
								font-family: Roboto;
								font-style: normal;
								font-weight: 500;

								text:first-child {
									font-size: 28rpx;

								}

								text:last-child {
									font-size: 40rpx;
								}
							}
						}
					}
				}
			}

			.product_list {
				width: 100%;
				margin: 0 auto;
				margin-top: 20rpx;
				background: linear-gradient(180deg, #FFF 0%, #F2F4F7 5.71%);
				border-radius: 24rpx;

				&_head {
					display: flex;
					color: #000;
					text-align: center;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
					padding: 24rpx 0;
					width: 94%;
					margin: 0 auto;

					.item {
						margin-right: 64rpx;
					}
				}

				.waterfall {
					width: 94%;
					margin: 0 auto;
				}
			}
		}
	}

	/deep/ .u-status-bar {
		background-color: transparent !important;
	}

	/deep/ .u-navbar__content {
		background-color: transparent !important;
	}

	.search /deep/ .u-icon__icon {
		font-size: 62rpx !important;
		line-height: 45rpx !important;
		font-weight: bold !important;
		top: 0px;
		color: #000000 !important;

	}

	.search /deep/ .u-notice__swiper__item__text {
		color: rgba(0, 0, 0, 0.50) !important;
		font-family: PingFang SC;
		font-size: 24rpx !important;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>