<template>
	<view class="hots">
		<view class="hots_header">
			<view class="hots_header_title">
				<text>热门抢购</text>
				<view class="hotImg">
					<image src="@/static/images/icon/hot.png" mode=""></image>
				</view>
			</view>
			<view class="hots_header_buy">
				<u-avatar-group :urls="urls" size="20" gap="0.4"></u-avatar-group>
				<view class="hots_header_buy_text">
					999.9万+人正在疯抢
				</view>
			</view>
		</view>
		<view class="hots_product">
			<view class="hots_product_item" v-for="(item,index) in 3">
				<view class="subsidy">
					<image src="@/static/images/icon/subsidy.png" mode=""></image>
					<text class="subsidy_price">已补贴199元</text>
				</view>
				<view class="hots_product_item_image">
					<image src="@/static/images/product/p2.png" mode=""></image>
				</view>
				<view class="hots_product_item_title">
					<u--text :lines="1" text="我用十年青春我用十年青春我用十年青春我用十年青春,赴你最后之约"></u--text>

				</view>
				<view class="hots_product_item_price">
					<view class="money">
						<text class="text">￥</text>
						<text class="value">99</text>
					</view>
					<view class="discount">
						￥188.88
					</view>
				</view>
				<view class="hots_product_item_buy">
					<!-- <image src="@/static/images/icon/lootAll.png" mode=""></image> -->
					<image src="@/static/images/icon/price.png" mode=""></image>
					<view class="buys">
						立即抢购
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
					'https://cdn.uviewui.com/uview/album/7.jpg',
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 热门抢购
	.hots {
		width: 94%;
		height: 482rpx;
		margin: 0 auto;
		border-radius: 34rpx;
		box-sizing: border-box;
		padding: 26rpx 20rpx 34rpx 32rpx;
		background: linear-gradient(180deg, #FFDCDC 0%, rgba(255, 255, 255, 0.00) 18.38%), #FFF;

		&_header {
			display: flex;
			justify-content: space-between;

			&_title {
				color: #0F1E0A;
				font-family: YouSheBiaoTiHei;
				font-size: 36rpx;
				font-weight: 400;
				display: flex;

				.hotImg {
					image {
						width: 86rpx;
						height: 38rpx;
					}
				}
			}

			&_buy {
				display: flex;
				align-items: center;

				&_text {
					color: #6D746B;
					font-family: PingFang SC;
					font-size: 20rpx;
					font-weight: 400;
					padding-left: 11rpx;
				}
			}
		}

		&_product {
			margin-top: 24rpx;
			display: flex;
			justify-content: space-between;

			&_item {
				margin: 0 8rpx;
				position: relative;
				.subsidy{
					position: absolute;
					top: 5%;
					image{
						width: 154rpx;
						height: 42rpx;
						flex-shrink: 0;
					}
					&_price{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						line-height: 2;
						color: #FFF;
						text-align: center;
						font-family: PingFang SC;
						font-size: 10px;
						font-weight: 400;
					}
				}
				&_image {
					width: 198rpx;
					height: 198rpx;
					border-radius: 8px;
					background: #F7F7F7;

					image {
						width: 100%;
						height: 100%;
					}
				}

				&_title {
					color: #000;
					text-align: center;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-style: normal;
					font-weight: 400;
					margin: 12rpx 0;
				}

				&_price {
					display: flex;

					.money {
						color: #F94E05;

						font-family: Roboto;
						font-style: normal;

						.text {
							font-size: 32.024rpx;
							font-weight: 500;
							line-height: 100%;
						}

						.value {
							font-size: 44rpx;
							font-weight: 500;
							line-height: 100%;
						}
					}

					.discount {
						line-height: 3;
						color: #939692;
						font-family: PingFang SC;
						font-size: 20rpx;
						font-weight: 500;
						padding-left: 6rpx;
						text-decoration: line-through;
						text-decoration-line: strikethrough;
					}
				}

				&_buy {
					position: relative;

					image {

						width: 182rpx;
						height: 42rpx;
					}

					.buys {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-30%, -59%);
						width: 100%;
						color: #FFF;

						font-family: PingFang SC;
						font-size: 24rpx;
						font-style: normal;
						font-weight: 400;
						line-height: normal;
					}
				}
			}
		}
	}
</style>