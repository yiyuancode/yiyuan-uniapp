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
					background: linear-gradient(326deg, #FF4838 69.75%, #FF6D3F 99.62%);
				}
			}
		}

	}
</style>