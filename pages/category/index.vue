<template>
	<view class="container">
		<view class="search_box" :style="{'padding-top':$uniHeight().top+'px'}">
			<view class="lable">
				分类
			</view>
			<view class="search" @click="toUrl('/pages/search/index')">
				<u-notice-bar icon="search" color="#A1A4A0" bgColor="transparent" fontSize="12" :text="listText"
					direction="column"></u-notice-bar>
				<view class="search-btn">
					搜索
				</view>
			</view>
		</view>
		<view class="category">

			<!-- 左侧导航 -->
			<view class="category_left">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view v-for="(item,index) in categoryList" :key="index"
						:class="index==categoryId?'row active':'row '" @click="showCategory(index)">
						{{ item.name }}
					</view>
				</scroll-view>
			</view>
			<view class="category_right">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view v-for="(item,index) in categoryList" :key="index" @click="showCategory(index)">

						<view v-for="(category,idx) in item.children" :key="idx" v-show="index==categoryId">
							<view class="name">
								{{category.name}}
							</view>
							<view class="product">

								<view class="item" v-for="(product,p) in category.children" :key="p"
									@click="toUrl(product.id)">
									<view class="product_image">
										<image class="image" :src="`https://javaqn.crmeb.net/${product.icon}`"
											mode="aspectFit"></image>
									</view>
									<view class="title">
										{{product.name}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<tabBar></tabBar>
	</view>

</template>

<script>
	import tabBar from '@/components/tabBar/index.vue';
	import {
		getProductCategory
	} from '@/config/api/product.js'
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				listText: [
					'可生食鸡蛋',
					'软包凳子',
					'汽车膜',
					'无菌蛋',
					'板凳木头'
				],
				searchImg: '/static/images/icon/search.png',
				categoryList: [],
				categoryId: 0

			}
		},
		mounted() {
			this.getCategory();
		},
		methods: {
			// get分类列表
			getCategory() {

				getProductCategory().then(response => {

					this.categoryList = response
				}).catch(error => {

				})
			},
			// 分类切换显示
			showCategory(index) {
				this.categoryId = index;
			},
			scroll() {

			},
			upper() {

			},
			lower() {

			},
			toUrl(id) {
				uni.$u.route('/pages/goods/index', {
					id: id,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #F2F4F7;

		.search_box {
			padding-left: 16rpx;
			display: flex;
			background: #FFF;
			padding-bottom: 28rpx;

			.lable {
				color: #000;
				font-family: PingFang SC;
				font-size: 32rpx;
				line-height: 64rpx;
				font-weight: 400;
			}
		}

		.search {

			height: 64rpx;
			width: 60%;
			border-radius: 24rpx;
			border: 4rpx solid #000;
			position: relative;
			left: 18rpx;

			&-btn {
				position: absolute;
				right: 10rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 114rpx;
				height: 50rpx;
				border-radius: 16rpx;
				background: #000;
				color: #FFF;
				text-align: center;
				font-family: PingFang SC;
				font-size: 14px;
				line-height: 50rpx;
				font-weight: 400;
			}


		}


		.category {
			border-radius: 12px;
			border: 1px solid rgba(255, 255, 255, 0.56);
			background: linear-gradient(0deg, #FFF 91.87%, rgba(255, 255, 255, 0.65) 99.6%);
			backdrop-filter: blur(5.5px);
			margin: 0 auto;
			display: flex;
			margin-top: 10rpx;

			.scroll-Y {
				height: calc(100vh - 21.7vh);
			}

			&_left {
				width: 192rpx;
				height: 100%;
				background: rgba(242, 244, 247, 0.50);



				.row {
					text-align: center;
					height: 88rpx;
					line-height: 88rpx;
					position: relative;
					color: #6D746B;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
					width: 90%;
					margin-left: auto;
				}

				.active {

					border-radius: 24rpx 0px 0px 0;
					background: #FFF;
					color: #293226;
					font-size: 24rpx;
				}

				.active::after {
					content: "";
					display: block;
					width: 8rpx;
					height: 30rpx;
					background: #0F1E0A;
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
				}
			}

			&_right {
				width: calc(100% - 192rpx);
				border-radius: 12px;
				background: linear-gradient(0deg, #FFF 91.87%, rgba(255, 255, 255, 0.65) 99.6%);
				backdrop-filter: blur(5.5px);

				.name {
					color: #0F1E0A;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
					padding: 22rpx 0 16rpx 24rpx;
				}

				.product {
					display: flex;
					flex-wrap: wrap;
					padding-left: 24rpx;

					.item {
						width: calc(100% / 3);

						.product_image {
							text-align: center;

							.image {
								width: 148rpx;
								height: 196rpx;
							}
						}


						.title {
							color: #000;
							text-align: center;
							font-family: PingFang SC;
							font-size: 20rpx;
						}
					}
				}
			}
		}

	}

	.search /deep/ .u-icon__icon {
		font-size: 62rpx !important;
		line-height: 51rpx !important;
		font-weight: bold !important;
		top: 0px;
		color: #000000 !important;

	}

	.search /deep/ .u-notice-bar {
		padding: 4px 0 !important;
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