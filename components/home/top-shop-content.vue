<template>
	<view class="top-shop">
		<view class="header">
			<view class="shop-width" :style="{'padding-top':$uniHeight().top+'px'}">
				<view class="shop">
					<view class="shop-name">
						<image src="@/static/images/home/logo.png" class="logo"></image>
					</view>
					<view class="shop-equity">
						<view class="item" v-for="(item,index) in equity" :key="index">
							{{item.text}}
						</view>
					</view>
				</view>
				<view class="search" @click="toUrl('/pages/search/index')">
					<u-notice-bar icon="search" color="#A1A4A0" bgColor="transparent" fontSize="12" :text="listText"
						direction="column"></u-notice-bar>
					<view class="search-btn">
						搜索
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
				titleHeight: '',
				equity: [{
					text: '品质保证'
				}, {
					text: '七天无理由'
				}],
				searchVal: "",
				listText: [
					'可生食鸡蛋',
					'软包凳子',
					'汽车膜',
					'无菌蛋',
					'板凳木头'
				],
			}
		},
		options: {
			styleIsolation: 'shared' // 解除样式隔离
		},
		created() {
			this.getHeight();
		},
		mounted() {

		},
		methods: {
			toUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			getHeight() {
				let res = uni.getMenuButtonBoundingClientRect();
				this.titleHeight = res.top;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.top-shop {
		position: fixed;
		z-index: 9999;
		width: 100%;
		top: 0;
		background: #F2F4F7;

		.header {
			background: url('/static/images/home/head-bg.png') top no-repeat;

			.shop-width {
				width: calc(100% - 46rpx);
				margin: 0 auto;
				padding-bottom: 22rpx
			}

			.shop {


				display: flex;
				align-items: center;

				&-name {
					color: var(--b-1, #0F1E0A);
					text-align: center;
					font-family: YouSheBiaoTiHei;
					font-size: 48rpx;
					font-style: italic;
					font-weight: 400;
					margin-right: 10rpx;

					.logo {
						width: 176rpx;
						height: 38rpx;
					}
				}

				&-equity {
					display: flex;
					align-items: center;
					color: var(--b-1, #0F1E0A);
					text-align: center;
					font-family: PingFang SC;
					font-size: 24rpx;
					height: 34rpx;
					background: url('@/static/images/home/Rectangle.png');
					background-size: 100% 100%;
				}

				.item {
					position: relative;
					padding: 0 20rpx;
				}

				.item::before {
					content: '|';
					position: absolute;
					right: 0;
				}

				.item:last-child::before {
					content: '';
				}
			}

			.search {
				height: 80rpx;
				margin-top: 46rpx;
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

		}
	}


	.search /deep/ .u-icon__icon {
		font-size: 62rpx !important;
		line-height: 51rpx !important;
		font-weight: bold !important;
		top: 0px;
		color: #000000 !important;
	
	}
	.search /deep/ .u-notice__swiper__item__text{
		color: rgba(0, 0, 0, 0.50) !important;
		font-family: PingFang SC;
		font-size: 24rpx !important;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>