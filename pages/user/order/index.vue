<template>
	<view class="container">
		<view class="head">
			<image class="bg" src="@/static/images/common/head_bg.png" mode=""></image>
			<u-navbar title="订单提交" @rightClick="rightClick" :autoBack="true">
			</u-navbar>

		</view>
		<view class="payment">
			<view class="status">
				<view class="title">
					等待支付
				</view>
				<view class="countdown">
					请在<u-count-down :time=" 15 * 60 * 1000" format="HH:mm:ss"></u-count-down>内完成支付
				</view>
			</view>
		</view>
		<view class="address">
			<view class="group">
				<view class="icon">
					<image src="@/static/images/icon/address.png" mode=""></image>
				</view>
				<view class="detail">
					<view class="">
						<text class="name">王指导</text>
						<text class="phone">136 8711 7754</text>
					</view>
					<view class="inAddress">
						浙江省 杭州市 西湖区 蒋村街道 文一社区西文社区西文社区西文一社区28号
					</view>
				</view>
			</view>
			<view class="arrow">
				<image src="@/static/images/icon/goback.png" mode=""></image>
			</view>
		</view>
		<view class="shop">
			<view class="shop_group">
				<view class="logo">
					<image src="@/static/images/shop/shop.png" mode=""></image>
				</view>
				<view class="name">
					ONLY官方旗舰店
				</view>
			</view>
			<view class="product">
				<view class="item" v-for="(item,index) in 2" :key="index">
					<view class="image">
						<image src="@/static/images/goods/p3.png" mode=""></image>
					</view>
					<view class="products">
						<view class="title">
							ONLY2022春季新款蝙蝠袖宽松棉服外套女
						</view>
						<view class="specifications">
							颜色：灰色 ｜ 尺码：3xxl
						</view>
						<view class="price_number">
							<text class="price">1688.00</text>
							<text class="num">x1</text>
						</view>
					</view>
				</view>
			</view>
			<view class="message">
				<u--textarea v-model="value4" placeholderStyle="color:#DFE4DE" count
					placeholder="如有留言请在这里输入（选填）"></u--textarea>

			</view>
		</view>
		<view class="order_detail">
			<view class="title">
				金额明细
			</view>
			<view class="detail">
				<view class="item">
					<view class="lable">
						商品总价
					</view>
					<view class="value">
						<text class="text">￥</text>
						<text class="price">8664.00</text>
					</view>
				</view>
				<view class="item">
					<view class="lable">
						折扣
					</view>
					<view class="value orange">
						<text class="text">-￥</text>
						<text class="price">12.00</text>
					</view>
				</view>
				<view class="item">
					<view class="lable">
						运费
					</view>
					<view class="value ash">
						<text class="text">快递免费</text>
					</view>
				</view>
				<view class="item">
					<view class="lable">
						礼券
					</view>
					<view class="value ash">
						<text class="text">暂无可用礼券</text>
						<text class="price">></text>
					</view>
				</view>
				<view class="item">
					<view class="lable">
						实付款
					</view>
					<view class="value orange">
						<text class="text">￥</text>
						<text class="price">8652.00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="order_type">
			<view class="title">
				支付方式
			</view>
			<view class="order_pay">
				<view class="item" @click="checkPay(0)">
					<view class="group">
						<view class="image">
							<image src="@/static/images/common/alipay.png" mode=""></image>
						</view>
						<view class="lable">
							支付宝
						</view>
					</view>
					<view class="ischeck">
						<image src="@/static/images/icon/nocheck.png" mode=""></image>
					</view>
				</view>
				<view class="item" @click="checkPay(1)">
					<view class="group">
						<view class="image">
							<image src="@/static/images/common/wxpay.png" mode=""></image>
						</view>
						<view class="lable">
							微信
						</view>
					</view>
					<view class="ischeck">
						<image src="@/static/images/icon/check.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="submit_order">
			<view class="group">
				<text class="lable">合计:</text>
				<text class="price_icon">￥</text>
				<text class="price">8652.00</text>
			</view>
			<view class="submit">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value4: '',
				payIndex: 1
			}
		},
		methods: {
			checkPay(index) {
				this.payIndex = index
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		background: #F6F6F6;
		padding-bottom: 200rpx;
		.head {
			width: 100%;
			position: relative;

			.bg {
				height: 426rpx;
				width: 100%;
			}

			/deep/ .u-status-bar {
				background-color: transparent !important;
			}

			/deep/ .u-navbar__content {
				background-color: transparent !important;
			}

			/deep/ .u-navbar__content__title {
				color: #0F1E0A;
				font-family: PingFang SC;
				font-size: 32rpx;
				font-weight: 600;
			}


		}

		.payment {
			position: absolute;
			top: 204rpx;
			width: 94%;
			left: 50%;
			transform: translateX(-50%);

			.status {
				.title {
					color: #0F1E0A;
					font-family: PingFang SC;
					font-size: 36rpx;
					font-weight: 600;
				}

				.countdown {
					display: flex;
					color: var(--B1, #0F1E0A);
					text-align: center;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;

					/deep/ .u-count-down__text {
						line-height: normal;
						color: #0F1E0A;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
					}
				}
			}
		}

		.address {
			position: absolute;
			top: 25%;
			width: 94%;
			left: 50%;
			height: 160rpx;
			border-radius: 24rpx;
			border: 1px solid #FFF;
			background: rgba(255, 255, 255, 0.80);
			transform: translate(-50%, -50%);
			z-index: 999;
			display: flex;
			justify-content: space-between;
			padding: 24rpx 20rpx;
			box-sizing: border-box;

			.group {
				display: flex;

				.icon {
					margin-right: 14rpx;

					image {
						width: 40rpx;
						height: 40rpx;
					}

				}

				.detail {
					font-family: PingFang SC;
					font-weight: 400;

					.name {
						color: #0F1E0A;
						font-size: 28rpx;
					}

					.phone {
						color: #6D746B;
						font-size: 24rpx;
					}

					.inAddress {
						margin-top: 14rpx;
						color: #444942;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 500;
					}
				}
			}

			.arrow {
				display: flex;
				align-items: center;
				margin-bottom: 22rpx;

				image {
					margin: 0 18rpx;
					width: 14rpx;
					height: 22rpx;
					flex-shrink: 0;
				}
			}
		}

		.shop {
			width: 94%;
			height: 634rpx;
			margin: 0 auto;
			margin-top: 68rpx;
			border-radius: 12px;
			background: #FFF;
			padding: 30rpx 28rpx;
			box-sizing: border-box;

			&_group {
				display: flex;

				.logo {
					image {
						width: 40rpx;
						height: 38rpx;
						border-radius: 50%;
					}
				}

				.name {
					margin-left: 20rpx;
					color: #0F1E0A;
					font-family: PingFang SC;
					font-size: 28rpx;
					font-weight: 400;
				}
			}

			.product {
				margin-top: 38rpx;

				.item {
					margin-bottom: 16rpx;
					display: flex;

					.image {
						margin-right: 16rpx;
						width: 150rpx;
						height: 150rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}

				.products {
					.title {
						color: #0F1E0A;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 500;
					}

					.specifications {
						margin: 10rpx 0 16rpx 0;
						color: #939692;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
					}

					.price_number {
						color: #444942;
						font-family: PingFang SC;
						font-weight: 400;

						.price {

							font-size: 32rpx;
						}

						.num {
							margin-left: 5rpx;
							color: #444942;
							font-family: PingFang SC;
							font-size: 24rpx;

						}
					}
				}
			}

			.message {
				margin: 28rpx 0 24rpx 0;

				/deep/ .u-border {
					border: 1px solid #F2F4F7 !important;

				}

				/deep/ .u-textarea {
					border-radius: 9rpx;
				}
			}
		}

		.order_detail {
			width: 94%;
			margin: 0 auto;
			margin-top: 16rpx;
			background: #FFF;
			min-height: 352rpx;
			border-radius: 16rpx;
			box-sizing: border-box;
			padding: 24rpx;

			.title {
				color: #0F1E0A;
				font-family: PingFang SC;
				font-size: 28rpx;
				font-weight: 400;

			}

			.detail {

				.item {
					margin-top: 48rpx;
					display: flex;
					justify-content: space-between;

					.lable {
						color: #6D746B;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
					}

					.value {
						font-weight: 400;
						font-family: PingFang SC;
						color: #0F1E0A;

						.text {
							font-size: 24rpx;
							line-height: 1;
						}

						.price {
							font-size: 28rpx;
						}
					}

					.orange {
						color: #F94E05;
					}

					.ash {
						color: #939692;
					}
				}
			}

		}

		.order_type {
			padding: 24rpx 18rpx;
			border-radius: 24rpx;
			margin: 0 auto;
			background: #FFF;
			width: 94%;
			margin-top: 16rpx;
			box-sizing: border-box;

			.title {
				color: #000;
				font-family: PingFang SC;
				font-size: 28rpx;
				font-weight: 400;
			}

			.order_pay {
				margin-top: 8rpx;

				.item {
					display: flex;
					justify-content: space-between;
					margin-top: 32rpx;

					.group {
						display: flex;
						align-items: center;

						.image {
							image {
								width: 56rpx;
								height: 56rpx;
							}
						}

						.lable {
							margin-left: 16rpx;
							color: #000;
							font-family: PingFang SC;
							font-size: 28rpx;
							font-weight: 400;
						}
					}

					.ischeck {
						image {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}

			}
		}
		.submit_order{
			padding-bottom: calc(env(safe-area-inset-bottom) / 2);
			position: fixed;
			bottom: 0;
			width: 100%;
			background-color:rgba(255, 255, 255, 1);
			box-shadow: rgba(0, 0, 0, 0.08);
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 30rpx;
			.group{
				font-family: PingFang SC;
				font-weight: 400;
				.lable{
					color:  #939692;
					font-size: 28rpx;
				}
				.price_icon{
					color:  #0F1E0A;
					font-size: 28rpx;
				}
				.price{
					color: #0F1E0A;
					font-size: 44rpx;
				}
			}
			.submit{
				width: 260rpx;
				height: 100rpx;
				background:  #F94E05;
				text-align: center;
				line-height: 100rpx;
				color: #FFF;
				font-family: PingFang SC;
				font-size: 28rpx;
				font-weight: 400;
			}
		}
	}
</style>