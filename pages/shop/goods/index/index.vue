<template>
<view class="">
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

</template>

<script>
	export default {
		components: {

		},
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
			}
		}
	}
</script>

<style lang="scss" scoped>
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
	
</style>