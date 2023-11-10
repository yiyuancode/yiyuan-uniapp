<template>
	<view class="container">
		<view class="header">
			<u-navbar title=" " @rightClick="rightClick" :autoBack="true">
			</u-navbar>
		</view>
		<view class="goods">
			<view class="goods_head">
				<view class="main_image">
					<u-swiper :list="list1" @change="autoChange" height="462"> </u-swiper>
					<view class="page">
						<text class="active">{{pageIndex+1}}</text>/<text class="page_size">{{list1.length}}</text>
					</view>
				</view>
				<view class="limited">
					<view class="bg">
						<image src="@/static/images/product/bg.png" mode=""></image>
					</view>

				</view>
				<view class="goods_content">
					<view class="main">
						<view class="" style="display: flex;justify-content: space-between;">
							<view class="goods_data">
								<view class="price">
									<view class="text">
										￥
									</view>
									<view class="money">
										8961
									</view>
									<view class="desc">
										券后价
									</view>
								</view>
								<view class="browse">
									7人想要/1335浏览
								</view>
							</view>
							<view class="share">
								<view class="group">
									<view class="icon">
										<image src="@/static/images/icon/share.png" mode=""></image>
									</view>
									<view class="text">
										分享
									</view>
								</view>
							</view>
						</view>
						<view class="preferential">
							<view class="coupon">
								<view class="group">
									立减200
								</view>
								<view class="group">
									包邮券
								</view>
							</view>
							<view class="expiration">
								08:09:52后过期
							</view>
						</view>
						<view class="title">
							大S联名设计】意式浪漫月相白系列 肤白貌美大长腿大长腿大长腿大长腿
						</view>
						<view class="goods_address">
							<view class="icon">
								<image src="@/static/images/icon/gaddress.png" mode=""></image>
							</view>
							<view class="text">
								发货地
							</view>
							<view class="address">
								杭州
							</view>
						</view>
					</view>
					<view class="guarantee">
						<view class="auth">
							保障
						</view>
						<view class="equity">
							<text>正品保证</text>
							<text>假一赔十</text>
							<text>30天无忧退换货</text>
						</view>
						<view class="icon">
							<image src="@/static/images/icon/goback.png" mode=""></image>
						</view>
					</view>
					<view class="subsidy">
						<view class="group">
							<view class="text">
								优惠
							</view>
							<view class="content">
								补贴￥399 已售999/件
							</view>
						</view>
						<view class="group">
							<view class="text">
								发货时间
							</view>
							<view class="content">
								现在至明天前下单，预计01月29日 （周六）送到
							</view>
						</view>
					</view>
				</view>
				<view class="evaluate">
					<view class="head">
						<view class="head_title">
							<view class="text">
								用户评价
							</view>
							<view class="data">
								（999）
							</view>
						</view>
						<view class="head_comment">
							<text class="text">好评</text>
							<text class="data">99.9%</text>
							<view class="icon">
								<image src="@/static/images/icon/goback.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="tags">
						<view class="group" v-for="(item,index) in 5" :key="index">
							<text>超级好看</text>
							<text>88</text>
						</view>
					</view>
					<view class="evaluate_content">
						<view class="album">
							<view class="album__avatar">
								<u-avatar :src="src"></u-avatar>
							</view>
							<view class="album__content">
								<view class="user_info">
									<view class="group">
										<view class="" style="display: flex;">
											<view class="name">
												良松
											</view>
											<view class="tag">
												再次回购
											</view>
										</view>
										<view class="time">
											2022.01.24
										</view>
									</view>
									<view class="" style="margin-bottom: 20rpx;">
										<u-rate :value="3.7" readonly></u-rate>
									</view>
								</view>
								<view :style="{marginBottom: '8px',width: albumWidth + 'px'}">
									<u--text text="太好看了，买来送朋友的"
										style="color: #111;font-family: PingFang SC;font-size: 12px;font-weight: 400;"
										:customStyle="{width: albumWidth + 'px'}"></u--text>
								</view>
								<u-album :urls="urls2" @albumWidth="width => albumWidth = width"
									multipleSize="95"></u-album>
							</view>
						</view>
					</view>
				</view>

			</view>
			<view class="shop">
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
								<view class="rate">
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
				<view class="shop_desc">
					<view class="">
						<text class="text">宝贝描述</text><text class="value">：4.0 低</text>
					</view>
					<view class="">
						<text class="text">卖家服务</text><text class="value">：4.0 低</text>
					</view>
					<view class="">
						<text class="text">物流服务</text> <text class="value">：4.0 低</text>
					</view>
				</view>
				<view class="shop_tools">
					<view class="text">
						进店逛逛
					</view>
					<view class="text">
						全部宝贝
					</view>
				</view>

			</view>
			<view class="goods_detail">
				<view class="head">
					<u-divider text="宝贝详情"></u-divider>
				</view>
				<view class="content">
					<image src="@/static/images/goods/p2.png" mode=""></image>
					<!-- 富文本 -->
					<!-- <u-parse :content="content"></u-parse> -->
				</view>
			</view>
			<view class="goods_recommend">
				<view class="lable_text">
					相关商品推荐
				</view>
				<view class="product">
					<view class="item" v-for="(item,index) in 9" :key="index">
						<view class="image">
							<image src="@/static/images/product/p5.png" mode=""></image>
						</view>
						<view class="content">
							<view class="head">
								<view class="tags">
									优惠价
								</view>
								<view class="title">
									乔丹同款绿色时衫
								</view>
							</view>
							<view class="data">
								<view class="price">
									<text>￥</text>
									<text>99</text>
								</view>
								<view class="sold">
									已售99
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="shop_bar ">
			<view class="action">
				<view class="home">
					<image src="@/static/images/toolbar-icon/shop-home.png" mode=""></image>
				</view>
				首页
			</view>

			<view class="action">
				<view class="cart">
					<u-badge class="badge" max="99" bgColor="#dd514c" value="99"></u-badge>
					<image src="@/static/images/toolbar-icon/shop-car.png" mode=""></image>
				</view>
				购物车
			</view>
			<view class="bg_green submit">加入购物车</view>
			<view class="bg_red submit" @click="showPopup=true">立即抢购</view>
		</view>
		<!-- 商品规格弹出层 -->
		<u-popup :show="showPopup" @close="close" closeable round="20">
			<view class="product_detail">
				<view class="header">
					<view class="image">
						<image src="@/static/images/goods/p1.png" mode=""></image>
					</view>
					<view class="group">
						<view class="price">
							<text>￥</text>
							<text>1998.0</text>
						</view>
						<view class="select_val">
							<text class="lable_text">已选</text>
							<text class="check">蓝色</text>
							<text class="check">XL</text>
							<text class="inventory">库存10件</text>
						</view>
					</view>
				</view>
				<view class="address">
					<view class="group">
						<view class="icon">
							<image src="@/static/images/icon/address.png" mode=""></image>
						</view>
						<view class="content">
							<view class="name">
								王指导
							</view>
							<view class="add">
								浙江省杭州市西湖区蒋村街道文一社区西...
							</view>
						</view>
					</view>
					<view class="arrow">
						<image src="@/static/images/icon/goback.png" mode=""></image>
					</view>
				</view>
				<!-- 规格 -->
				<view class="specifications">
					<view class="title">
						颜色
					</view>
					<view class="spec1">
						<view :class="spec1==index?'item active':'item'" v-for="(item,index) in 8" :key="index"
							@click="check(index)">
							<image src="@/static/images/goods/p3.png" mode=""></image>
						</view>
					</view>
					<view class="title">
						尺寸
					</view>
					<view class="spec2">
						<view :class="spec2==index?'item active':'item'" v-for="(item,index) in 4" :key="index"
							@click="spec2 = index">
							S
						</view>
					</view>
					<view class="title">
						购买数量
					</view>
					<view class="spec3">
						<view class="number_box">
							<u-number-box v-model="number" @change="valChange"></u-number-box>
						</view>
					</view>
				</view>
				<view class="payment">
					<navigator url='/pages/user/order/index'>
						<view class="button">
							立即支付
						</view>
					</navigator>
				</view>
			</view>
		</u-popup>
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
				number: 1,
				src: '/static/images/goods/avatar.png',
				pageIndex: 0,
				albumWidth: 0,
				urls2: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
				],
				showPopup: false,
				spec1: 0,
				spec2: 0,
				followed:false
			}
		},
		methods: {
			autoChange(index) {
				this.pageIndex = index.current
			},
			check(index) {
				this.spec1 = index
			},
			close() {
				this.showPopup = false
			}
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		background: #F4F6F7;

		/deep/ .u-status-bar {
			background-color: transparent !important;
		}

		/deep/ .u-navbar__content {
			background-color: transparent !important;
		}

		.goods {
			padding-bottom: 150rpx;

			&_head {
				position: relative;

				.main_image {
					position: relative;

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
					display: none;

					.bg {
						image {
							height: 103px;
							width: 100%;
						}
					}
				}

			}

			&_content {
				background: #F4F6F7;

				.main {
					width: 94%;
					height: 370rpx;
					margin: 0 auto;
					margin-top: 32rpx;
					border-radius: 12px;
					border: 1px solid rgba(255, 255, 255, 0.56);
					background: linear-gradient(0deg, #FFF 88.78%, rgba(255, 255, 255, 0.74) 99.6%);
					backdrop-filter: blur(5.5px);
					padding: 24rpx;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;

					.goods_data {
						.price {
							display: flex;
							align-items: flex-end;

							.text {
								color: #F94E05;
								text-align: center;
								font-family: Roboto;
								font-size: 30rpx;
								font-weight: 500;
							}

							.money {
								color: #F94E05;
								font-family: Roboto;
								font-size: 64rpx;
								line-height: 1;
								font-weight: 500;
							}

							.desc {
								color: #293226;
								font-family: PingFang SC;
								font-size: 24rpx;
								font-weight: 400;
							}
						}

						.browse {
							margin-top: 4rpx;
							color: #939692;
							font-family: PingFang SC;
							font-size: 22rpx;
							font-style: normal;
							font-weight: 500;
						}
					}

					.share {
						position: relative;
						padding-right: 12rpx;
						top: 20rpx;

						.group {

							text-align: center;

							.icon {
								image {
									width: 27rpx;
									height: 30rpx;
									margin-bottom: 6rpx;
								}
							}

							.text {
								color: #939692;
								font-family: PingFang SC;
								font-size: 20rpx;
								font-weight: 500;
							}

						}
					}

					.share::after {
						content: '';
						position: absolute;
						left: -32rpx;
						top: 0;
						width: 1px;
						height: 68rpx;
						background-color: rgba(151, 151, 151, 1);
						display: block;
					}

					.preferential {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 22rpx;
						margin-bottom: 26rpx;

						.coupon {
							display: flex;

							.group {
								position: relative;
								display: inline-flex;
								padding: 4px 12px;
								justify-content: center;
								align-items: center;
								gap: 10px;
								background: rgba(249, 78, 5, 0.10);
								color: #F94E05;
								font-family: PingFang SC;
								font-size: 20rpx;
								text-align: center;
								font-weight: 400;
								margin-right: 10rpx;
							}

							.group::after {
								content: "";
								display: inline-block;
								width: 14rpx;
								height: 14rpx;
								background: #ffffff;
								position: absolute;
								left: -5rpx;
								border-radius: 50%;
							}

							.group::before {
								content: "";
								display: inline-block;
								width: 14rpx;
								height: 14rpx;
								background: #ffffff;
								position: absolute;
								right: -5rpx;
								border-radius: 50%;
							}
						}

						.expiration {
							color: #939692;
							font-family: PingFang SC;
							font-size: 22rpx;
							font-weight: 500;
						}
					}

					.title {
						color: #111;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
					}

					.goods_address {
						margin-top: 20rpx;
						display: flex;
						color: #939692;
						font-family: PingFang SC;
						font-size: 22rpx;
						font-weight: 500;

						.icon {
							margin-right: 12.8rpx;

							image {
								width: 20rpx;
								height: 24rpx;
							}

						}

						.text {
							padding-right: 28rpx;
						}
					}
				}

				.guarantee {
					width: 94%;
					margin: 0 auto;
					margin-top: 16rpx;
					height: 114rpx;
					border-radius: 24rpx;
					border: 1px solid rgba(255, 255, 255, 0.56);
					background: #FFF;
					backdrop-filter: blur(5.5px);
					flex-shrink: 0;
					display: flex;
					justify-content: space-around;
					align-items: center;

					.auth {
						width: 70rpx;
						height: 36rpx;
						background: #293226;
						color: #BEF000;
						text-align: center;
						font-family: YouSheBiaoTiHei;
						font-size: 24rpx;
					}

					.equity {
						color: #111;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
						padding-right: 58rpx;

						text {
							padding: 0 10rpx;
						}
					}

					.icon {
						image {
							width: 14rpx;
							height: 22rpx;
						}
					}
				}

				.subsidy {
					width: 94%;
					margin: 0 auto;
					margin-top: 16rpx;
					height: 196rpx;
					border-radius: 12px;
					border: 2rpx solid rgba(255, 255, 255, 0.56);
					background: #FFF;
					backdrop-filter: blur(5.5px);
					display: flex;
					flex-direction: column;
					padding: 0 24rpx;
					justify-content: space-evenly;
					box-sizing: border-box;

					.group {
						display: flex;

						.text {
							width: 106rpx;
							color: #6D746B;
							font-family: PingFang SC;
							font-size: 24rpx;
							font-weight: 400;
							padding-right: 34rpx;
						}

						.content {
							color: #000;
							font-family: PingFang SC;
							font-size: 24rpx;
							font-weight: 400;
						}
					}
				}
			}

			.evaluate {
				width: 94%;
				height: 606rpx;
				border-radius: 12px;
				border: 1px solid rgba(255, 255, 255, 0.56);
				background: var(--A4, #FFF);
				backdrop-filter: blur(5.5px);
				margin: 0 auto;
				margin-top: 16rpx;
				padding: 20rpx;
				box-sizing: border-box;

				.head {
					display: flex;
					justify-content: space-between;

					&_title {
						display: flex;
						align-items: center;
						color: #111;
						font-family: PingFang SC;
						font-weight: 400;
						font-size: 28rpx;

						.data {
							color: #939692;
						}
					}

					&_comment {
						display: flex;
						align-items: center;
						color: #939692;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 500;

						.data {
							color: #444942;
							padding: 0 8rpx;
							font-size: 28rpx;

						}

						.icon {
							margin-top: 3rpx;

							image {
								width: 14rpx;
								height: 22rpx;
							}
						}
					}

				}

				.tags {
					margin-top: 32rpx;
					display: flex;
					flex-wrap: wrap;

					.group {
						margin-right: 16rpx;
						margin-bottom: 16rpx;
						display: flex;
						justify-content: space-between;
						display: inline-flex;
						max-width: 264rpx;
						padding: 12rpx 16rpx;
						border-radius: 9rpx;
						border: 1px solid #F2F4F7;
						font-family: PingFang SC;
						font-weight: 400;

						text:first-child {
							color: #444942;
							font-size: 24rpx;
						}

						text:last-child {
							color: #6D746B;
							font-size: 26rpx;
						}
					}
				}

				&_content {
					.album {
						@include flex;
						align-items: flex-start;

						&__avatar {
							// background-color: $u-bg-color;
							padding: 5px;
							border-radius: 50%;
						}

						&__content {
							margin-left: 10px;
							flex: 1;
						}
					}

					.user {
						margin-top: 32rpx;
						display: flex;

						&_info {

							.group {
								display: flex;
								font-weight: 400;
								margin-bottom: 8rpx;
								justify-content: space-between;

								.name {
									color: #333;
									font-family: PingFang SC;
									font-size: 28rpx;
									margin-right: 8rpx;
								}

								.tag {
									width: 122rpx;
									height: 36rpx;
									border-radius: 4rpx;
									border: 1px solid #979797;
									color: #999;
									font-family: PingFang SC;
									font-size: 22rpx;
									font-weight: 400;
									text-align: center;
									line-height: 36rpx;
									opacity: 0.2017;
								}
							}

							.time {
								color: #666;
								font-family: PingFang SC;
								font-size: 24rpx;
								font-weight: 400;
							}
						}
					}
				}



			}

			.shop {
				width: 94%;
				margin: 0 auto;
				height: 312rpx;
				border-radius: 24rpx;
				border: 1px solid rgba(255, 255, 255, 0.56);
				background: #FFF;
				backdrop-filter: blur(5.5px);
				margin-top: 16rpx;
				box-sizing: border-box;
				padding: 32rpx 24rpx;

				&_head {
					display: flex;
					justify-content: space-between;

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

				&_desc {
					display: flex;
					margin: 32rpx 0 48rpx 0;
					justify-content: space-around;

					.text {
						color: #6D746B;
						font-family: PingFang SC;
						font-size: 20rpx;
						font-weight: 400;
					}

					.value {
						color: #000;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
					}

					view {
						position: relative;
					}

					view::after {
						content: "";
						display: block;
						width: 2rpx;
						height: 24rpx;
						background-color: #DFE4DE;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						right: -20rpx;
					}
				}

				&_tools {
					display: flex;

					.text {
						width: 50%;
						text-align: center;
						color: #000;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
						position: relative;
					}

					.text:first-child::after {
						content: "";
						position: absolute;
						right: 0;
						width: 1px;
						height: 32rpx;
						background-color: #DFE4DE;
					}
				}
			}

			&_detail {
				.head {
					width: 40%;
					margin: 0 auto;
				}

				.content {
					image {
						width: 100%;
						height: 554px;
					}
				}
			}

			&_recommend {

				color: #000;
				font-family: PingFang SC;
				font-size: 28rpx;
				font-weight: 400;
				margin-top: 49rpx;

				.lable_text {
					width: 94%;
					margin: 0 auto;
					color: #000;
					font-family: PingFang SC;
					font-size: 28rpx;
					font-weight: 400;
				}

				.product {
					display: flex;
					flex-wrap: wrap;
					margin: 38rpx 20rpx;

					.item {
						width: calc(96% / 2);
						border-radius: 16rpx;
						margin-bottom: 16rpx;
						background-color: #FFF;
						margin-right: 14rpx;

						.image {

							image {
								width: 100%;
								height: 175.313px;
							}
						}

						.content {
							padding: 18rpx 10rpx 0 10rpx;

							.head {
								display: flex;

								.tags {
									width: 74rpx;
									height: 32rpx;
									text-align: center;
									line-height: 32rpx;
									color: #D2F54D;
									font-family: PingFang SC;
									font-size: 20rpx;
									font-weight: 400;
									background-color: #293226;
								}

								.title {
									color: #293226;
									font-family: PingFang SC;
									font-size: 26rpx;
									font-weight: 400;
								}
							}

							.data {
								display: flex;
								justify-content: space-between;
								padding: 26rpx 0 48rpx 0;

								.price {

									color: #F94E05;
									font-family: Roboto;
									font-weight: 500;

									.text:first-child {
										font-size: 28rpx;
									}

									.text:last-child {
										font-size: 40rpx;
									}
								}

								.sold {
									color: #939692;
									font-family: PingFang SC;
									font-size: 21rpx;
									font-weight: 500;
								}
							}

						}
					}
				}
			}
		}

		.shop_bar {
			display: flex;
			position: fixed;
			align-items: center;
			min-height: 100rpx;
			width: 100%;
			bottom: 0;
			justify-content: space-between;
			padding: 0;
			padding-bottom: calc(env(safe-area-inset-bottom) / 2);
			background-color: #ffffff;

			.action {
				font-size: 22rpx;
				position: relative;
				flex: 1;
				text-align: center;
				padding: 0;
				display: block;
				height: auto;
				line-height: 1;
				color: #666;
				font-family: PingFang SC;
				font-size: 20rpx;
				font-weight: 400;

				.home {
					image {
						width: 46rpx;
						height: 46rpx;
					}
				}

				.cart {
					position: relative;

					/deep/ .u-badge {
						position: absolute;
						right: 8rpx;
						top: 0;
					}

					image {
						width: 48rpx;
						height: 48rpx;
					}
				}

				.shop {
					.action {
						width: 140rpx;
						flex: initial;
					}
				}
			}

			.submit {
				align-items: center;
				display: flex;
				justify-content: center;
				text-align: center;
				position: relative;
				flex: 2;
				align-self: stretch;
				width: 254rpx;
				height: 98rpx;
				color: #000;
				font-family: PingFang SC;
				font-size: 28rpx;
				font-weight: 400;
			}

			.submit:last-child {
				color: #FFF;

			}

			.bg_red {
				border-radius: 0px 2px 2px 0px;
				background: #F94E05;
			}

			.bg_green {
				border-radius: 2px;
				background: #D2F54D;
			}
		}

		.product_detail {
			width: 100%;
			height: 648px;
			background-color: rgba(244, 246, 247, 1);
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;

			.header {
				padding: 20rpx 18rpx;
				display: flex;

				.image {
					width: 96rpx;
					height: 96rpx;
					margin-right: 18rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.group {
					.price {
						color: #293226;
						font-family: Roboto;
						font-style: normal;
						font-weight: 500;
						line-height: 1;
						margin-bottom: 14rpx;

						text:first-child {
							font-size: 32rpx;
						}

						text:last-child {
							font-weight: 700;
							font-size: 48rpx;
						}
					}

					.select_val {
						font-family: PingFang SC;
						font-weight: 400;
						font-size: 24rpx;

						.lable_text {
							color: #939692;
						}

						.check {
							color: #6D746B;
							margin-left: 16rpx;
						}

						.inventory {
							margin-left: 20rpx;
							color: #939692;
							font-weight: 500;
						}
					}
				}
			}

			.address {
				width: 94%;
				height: 126rpx;
				display: flex;
				align-items: center;
				margin: 0 auto;
				border-radius: 24rpx;
				background: #FFF;
				justify-content: space-between;

				.group {
					font-weight: 400;
					display: flex;

					.icon {
						margin-left: 8rpx;
						width: 56rpx;
						height: 56rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.content {
						margin-left: 24rpx;

						.name {
							color: #000;
							font-family: PingFang SC;
							font-size: 28rpx;
						}

						.add {
							color: #6D746B;
							font-family: PingFang SC;
							font-size: 24rpx;
						}
					}

				}

				.arrow {
					margin-right: 10rpx;

					image {
						width: 14rpx;
						height: 22rpx;
					}
				}
			}

			.specifications {
				border-radius: 12px;
				background: #FFF;
				width: 94%;
				margin: 0 auto;
				min-height: 752rpx;
				margin-top: 16rpx;
				box-sizing: border-box;
				padding: 24rpx 0 0 10rpx;

				.title {
					color: #000;
					font-family: PingFang SC;
					font-size: 28rpx;
					font-weight: 400;

				}

				.spec1 {
					display: flex;
					flex-wrap: wrap;
					margin-top: 24rpx;

					.item {
						width: 158rpx;
						height: 160rpx;
						border-radius: 8rpx;
						border: 1px solid #F2F4F7;
						margin-right: 14rpx;
						margin-bottom: 16rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.active {
						border-radius: 4px;
						border: 1px solid var(--A1, #BEF000);
						background: rgba(190, 240, 0, 0.05);
					}
				}

				.spec2 {
					margin-top: 24rpx;
					display: flex;
					margin-bottom: 32rpx;

					.item {
						width: 98rpx;
						height: 54rpx;
						text-align: center;
						line-height: 54rpx;
						color: #0F1E0A;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
						border-radius: 2px;
						border: 1px solid #F2F4F7;
						margin-right: 24rpx;

					}

					.active {
						border: 1px solid #BEF000;
						background: rgba(190, 240, 0, 0.05);
					}
				}

				.spec3 {
					padding-top: 32rpx;

					.number_box {
						float: right;
						margin-right: 18rpx;

						/deep/ .u-number-box__minus {
							background-color: #ffffff !important;
							border: 1px solid #F2F4F7;
						}

						/deep/ .u-number-box__input {
							background-color: #ffffff !important;
							border: 1px solid #F2F4F7;
							margin: 0 10rpx;
						}

						/deep/ .u-number-box__plus {
							background-color: #ffffff !important;
							border: 1px solid #F2F4F7;
						}

					}

				}
			}

			.payment {
				padding-bottom: calc(env(safe-area-inset-bottom) / 2);
				background: #FFF;
				box-shadow: 0px -2px 4px 0px rgba(15, 30, 10, 0.03);
				min-height: 190rpx;
				width: 100%;
				position: fixed;

				.button {
					width: 90%;
					height: 88rpx;
					background-color: rgba(249, 78, 5, 1);
					text-align: center;
					margin: 0 auto;
					margin-top: 20.4rpx;
					line-height: 88rpx;
					color: #FFF;
					font-family: PingFang SC;
					font-size: 32rpx;
					font-weight: 400;
					border-radius: 32rpx;
				}
			}
		}
	}
</style>