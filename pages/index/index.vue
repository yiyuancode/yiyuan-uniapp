<template>
	<view class="container">

		<!-- 顶部商城名字 搜索logo -->
		<homeHead></homeHead>
		<view class="page-content shop-width">
			<!-- 导航 -->
			<view class="nav-block">
				<view class="nav-bg">
					<u-scroll-list>
						<view class="scroll-list">
							<view class="scroll-list_line" v-for="(item, index) in menuArr" :key="index">
								<view class="scroll-list_line_item" v-for="(item1, index1) in item" :key="index1"
									:class="[(index1 === item.length - 1) && 'scroll-list_line_item--no-margin-right']">
									<image class="scroll-list_line_item_image" :src="item1.icon" mode="">
									</image>
									<text class="scroll-list_line_item_text">{{ item1.name }}</text>
								</view>
							</view>
						</view>
					</u-scroll-list>
				</view>

				<view class="equity">
					<view class="equity_item" v-for="(item,index) in equity" :key="index" @click="show = true">
						<image :src="item.icon" mode=""></image>
						<text>{{item.title}}</text>
					</view>
					<view class="arrow">
						<image src="/static/images/icon/arrow.png" mode=""></image>
					</view>
				</view>
				<u-popup :show="show" mode="bottom" @close="closePopup" bgColor="transparent">
					<view class="ensure">
						<view class="header">
							<view class="header_title">
								信誉保证中...
							</view>
							<view class="icon">
								<image src="/static/images/icon/soldier.png" mode=""></image>
							</view>
						</view>
						<view class="ensure_item" v-for="(item,index) in equity" :key="index">
							<view class="ensure_item_icon">
								<image :src="item.icon" mode=""></image>
							</view>
							<view class="ensure_item_desc">
								<view class="title">
									<text>{{item.title}}</text>
								</view>
								<view class="describe">
									<text>{{item.describe}}</text>
								</view>
							</view>
						</view>
					</view>
				</u-popup>
			</view>
			<!-- 营销活动 -->
			<view class="activity">
				<!-- 百亿补贴 -->
				<view class="subsidy">
					<view class="header_title">
						百亿补贴
					</view>
					<view class="product">

						<view class="subsidy_product_item" v-for="(item,index) in subsidy" :key="index">
							<image :src="item.image" class="product_image" mode="aspectFit"></image>
							<view class="subsidy_product_item_subsidy">
								<view class="">
									<image class="price" src="/static/images/icon/price.png">
										<image class="icon1" src="/static/images/icon/icon1.png">
								</view>

								<view class="subsidy_product_item_subsidy_text">
									已补￥{{item.subsidy}}
								</view>
							</view>
							<view class="subsidy_product_item_price">
								￥1998.00
							</view>
						</view>
					</view>
				</view>
				<view class="limited_time">
					<!-- 9.9包邮 -->
					<view class="free_shipping">
						<view class="header_title">
							9.9包邮
						</view>
						<view class="product">
							<view class="subsidy_product_item" v-for="(item,index) in freeShipping" :key="index">
								<image :src="item.image" class="product_image" mode="aspectFit"></image>
							</view>
						</view>
					</view>
					<view class="new-user">
						<!-- 限时降价 -->
						<view class="price-reduction common">
							<view class="header_title">
								限时降价
							</view>
							<view class="subsidy_product_item" v-for="(item,index) in priceReduction" :key="index">
								<image :src="item.image" class="product_image" mode="aspectFit"></image>
								<view class="subsidy_product_item_subsidy">
									<view class="">
										<image class="price" src="/static/images/icon/price.png">
									</view>

									<view class="subsidy_product_item_subsidy_text">
										00:00:23
									</view>
								</view>
							</view>

						</view>
						<!-- 0元领取 -->
						<view class="receive common">
							<view class="header_title">
								0元领取
							</view>
							<view class="product">
								<view class="subsidy_product_item" v-for="(item,index) in receive" :key="index">
									<image :src="item.image" class="product_image" mode="aspectFit"></image>
									<view class="subsidy_product_item_subsidy">
										<view class="">
											<image class="price" src="/static/images/icon/price.png">
										</view>

										<view class="subsidy_product_item_subsidy_text">
											立即领取
										</view>
									</view>
								</view>

							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 广告 -->
			<view class="ad">
				<image src="/static/images/ad/ad1.png" mode=""></image>
			</view>
			<u-sticky offset-top="165">

				<u-tabs :list="listTab" lineWidth="30" lineColor="#BEF000" :activeStyle="{
				            color: '#303133',
				            fontWeight: 'bold',
				            transform: 'scale(1.05)'
				        }" :inactiveStyle="{
				            color: '#606266',
				            transform: 'scale(1)'
				        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
				</u-tabs>
			

			</u-sticky>
	<view class="waterfall">
				<WaterfallFlow ref="wfp" @click="choose" :colunmNumber="colunmNumber" :flowList="list"
					:columnGap="10"></WaterfallFlow>
				</view>
		</view>
		<BottomToolBar></BottomToolBar>
	</view>
</template>

<script>
	const data = require('./data.json');
	import user from "@/api/user.js";
	import BottomToolBar from '@/components/d-BottomToolBar/index.vue';
	import homeHead from '@/components/home/top-shop-content.vue'
	import searchBar from '@/components/search-bar/index.vue'
	import WaterfallFlow from '@/components/waterfall/waterfall.vue'
	export default {
		components: {
			BottomToolBar,
			homeHead,
			searchBar,
			WaterfallFlow
		},
		data() {
			return {
				show: false,
				menuArr: [
					[{
							name: '工具',
							icon: '/static/images/nav/1.png'
						},
						{
							name: '领红包',
							icon: '/static/images/nav/2.png'
						}, {
							name: '潮玩角色',
							icon: '/static/images/nav/3.png'
						}, {
							name: '交通工具',
							icon: '/static/images/nav/4.png'
						}, {
							name: '游戏账号',
							icon: '/static/images/nav/5.png'
						},
						{
							name: '淘宝吃货',
							icon: '/static/images/nav/6.png'
						},
					],
					[{
							name: '充值中心',
							icon: '/static/images/nav/6.png'
						},
						{
							name: '机票酒店',
							icon: '/static/images/nav/7.png'
						}, {
							name: '金币庄园',
							icon: '/static/images/nav/8.png'
						}, {
							name: '阿里拍卖',
							icon: '/static/images/nav/9.png'
						}, {
							name: '淘宝吃货',
							icon: '/static/images/nav/6.png'
						},
						{
							name: '淘宝吃货',
							icon: '/static/images/nav/6.png'
						},
					]

				],
				equity: [{
						title: '三方比选',
						describe: "严格贯彻执行“安全第一，预防为主”的安全工作方针，严格执行落实有关法律、法规和民航保",
						icon: '/static/images/icon/equity.png'
					},
					{
						title: '极速响应',
						describe: "严格贯彻执行“安全第一，预防为主”的安全工作方针，严格执行落实有关法律、法规和民航保",
						icon: '/static/images/icon/time.png'
					},
					{
						title: '三方比选',
						describe: "严格贯彻执行“安全第一，预防为主”的安全工作方针，严格执行落实有关法律、法规和民航保",
						icon: '/static/images/icon/equity.png'
					}, {
						title: '极速响应',
						describe: "严格贯彻执行“安全第一，预防为主”的安全工作方针，严格执行落实有关法律、法规和民航保",
						icon: '/static/images/icon/time.png'
					}
				],
				subsidy: [{
						subsidy: 1980.00,
						price: 1980.00,
						image: "/static/images/product/p2.png"
					},
					{
						subsidy: 1980.00,
						price: 298.00,
						image: "/static/images/product/p1.png"
					},
					{
						subsidy: 1980.00,
						price: 2988.00,
						image: "/static/images/product/p2.png"
					},
					{
						subsidy: 1980.00,
						price: 798.00,
						image: "/static/images/product/p1.png"
					}
				],
				freeShipping: [{
						image: '/static/images/product/p2.png'
					},
					{
						image: '/static/images/product/p2.png'
					}
				],
				priceReduction: [{
					image: '/static/images/product/p3.png'
				}],
				receive: [{
					image: '/static/images/product/p4.png'
				}],
				listTab: [{
					name: '精选推荐',
				}, {
					name: '0元到家',
					badge: {
						isDot: true
					}
				}, {
					name: '百亿补贴'
				}, {
					name: '周边出行'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}],
				baseList: [{
						image: "/static/images/product/p5.png",
						title: '乔丹同款绿色时髦凉爽T恤衬衫1',
						price: '99',
						sold: 10
					},
					{
						image: "/static/images/product/p5.png",
						title: '乔丹同款绿色时髦凉爽T恤衬衫',
						price: '99',
						sold: 10
					}, {
						image: "/static/images/product/p5.png",
						title: '乔丹同款绿色时髦凉爽,乔丹同款绿色时髦凉爽乔丹同款绿色时髦凉爽乔丹同款绿色时髦凉爽乔丹同款绿色时髦凉爽T恤衬衫',
						price: '99',
						sold: 10
					}, {
						image: "/static/images/product/p5.png",
						title: '乔丹同款绿色时髦凉爽T恤衬衫',
						price: '99',
						sold: 10
					}, {
						image: "/static/images/product/p5.png",
						title: '乔丹同款绿色时髦凉爽T恤衬衫',
						price: '99',
						sold: 10
					},
					{
						image: "/static/images/product/p5.png",
						title: '乔丹同款绿色时髦凉爽T恤衬衫',
						price: '99',
						sold: 10
					}, {
						image: "/static/images/product/p5.png",
						title: '乔丹同款绿色时髦凉爽T恤衬衫',
						price: '99',
						sold: 10
					}
				],
				colunmNumber: 2, //列
				page: 1,
				start: 0,
				end: 0,
				list: [], // 列表
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
						console.log(this.list, '--------------------')
						this.start = this.end;
						uni.hideLoading();
					}, 1000)
				}

			},
			// 信誉保证弹出层

			closePopup() {
				this.show = false;
			}
		}
	}
</script>

<style lang="scss" scoped>

	.container {
		min-height: 100vh;
		background: #F2F4F7;
		position: absolute;

		.page-content {
			position: relative;
			top: 300rpx;
			width: calc(100% - 46rpx);
			margin: 0 auto;

			.nav-block {
				margin-top: 20rpx;
				background: var(--F3, linear-gradient(90deg, #D3FFEA 0.07%, #F1FFCB 99.99%));
				border-radius: 12px;

				/deep/ .u-scroll-list__indicator__line__bar {
					width: 30rpx !important;
					background-color: #D9D9D9 !important;
				}

				.nav-bg {
					background: #FFF;
					border-radius: 12px;

					.scroll-list {
						@include flex(column);
						border-radius: 12px;
						width: 100%;

						&_goods-item {
							margin-right: 20px;

							&_image {
								width: 60px;
								height: 60px;
								border-radius: 4px;
							}

							&_text {
								color: #f56c6c;
								text-align: center;
								font-size: 12px;
								margin-top: 5px;
							}
						}

						&_show-more {
							background-color: #fff0f0;
							border-radius: 3px;
							padding: 3px 6px;
							@include flex(column);
							align-items: center;

							&_text {
								font-size: 12px;
								width: 12px;
								color: #f56c6c;
								line-height: 16px;
							}
						}

						&_line {
							@include flex;
							margin-top: 20px;
							justify-content: center;

							&_item {
								margin-right: 15px;
								text-align: center;
								display: flex;
								justify-content: center;
								flex-direction: column;
								min-width: 21%;

								&_image {
									margin: 0 auto;
									width: 73.62rpx;
									height: 64rpx;
								}

								&_text {
									margin-top: 12rpx;
									color: #000;
									text-align: center;
									font-family: PingFang SC;
									font-size: 24rpx;
								}

								&--no-margin-right {
									margin-right: 0;
								}
							}
						}
					}

				}

				.equity {

					@include flex;
					justify-content: space-around;
					align-items: center;
					height: 80rpx;

					&_item {
						border-left: 2rpx solid #C3EC99;

						image {
							width: 24rpx;
							height: 24rpx;
							margin: 0 16rpx;
							vertical-align: middle;
						}

						text {
							color: rgba(0, 0, 0, 0.60);
							text-align: center;
							font-family: PingFang SC;
							font-size: 20rpx;
						}
					}

					&_item:nth-child(1) {
						margin-left: 0;
						border: none;
					}

					.arrow {
						image {
							width: 12rpx;
							height: 20rpx;
						}
					}
				}
			}

			// 信誉保证弹出层
			.ensure {
				width: 100%;
				height: 1000rpx;
				border-radius: 20px;
				border: 1px solid rgba(255, 255, 255, 0.70);
				background: linear-gradient(180deg, #E9FFBB 3.79%, rgba(255, 255, 255, 0.00) 22.39%), #F2F4F7;
				position: relative;

				.header {
					@include flex;
					justify-content: space-between;
					padding: 32rpx 15rpx 0 34rpx;

					&_title {
						color: #000;
						text-align: center;
						font-family: YouSheBiaoTiHei;
						font-size: 25px;
						font-style: normal;
						font-weight: 800;
						line-height: normal;
						transform: rotate(-1.285deg);
					}

					.icon {
						position: absolute;
						top: -75rpx;
						right: 16rpx;

						image {
							width: 186rpx;
							height: 212rpx;
							transform: rotate(8deg);
						}
					}
				}

				&_item {
					@include flex;
					justify-content: space-around;
					align-items: center;
					height: 182rpx;
					border-radius: 12px;
					background: #FFF;
					margin: 24rpx 32rpx;
					padding: 0 20rpx;

					&_icon {

						image {
							width: 12rpx;
							height: 12rpx;
							transform: scale(4);
						}
					}

					&_desc {
						.title {
							color: #111;
							font-family: Source Han Sans SC;
							font-size: 16px;
							font-weight: 700;
						}

						.describe {
							margin-top: 14rpx;
							width: 526rpx;
							color: rgba(0, 0, 0, 0.60);
							font-family: PingFang SC;
							font-size: 12px;
							font-weight: 400;
						}
					}

				}
			}

			// 营销活动
			.activity {
				margin-top: 20rpx;
				@include flex;
				justify-content: space-around;

				.header_title {
					padding: 16rpx 0 8rpx 20rpx;
					color: #000;
					font-family: YouSheBiaoTiHei;
					font-weight: bold;
					font-style: italic;
					font-size: 18px;
				}

				.product {
					@include flex;
					justify-content: space-around;
					flex-wrap: wrap;

				}

				// 百亿补贴
				.subsidy {
					width: 332rpx;
					height: 476rpx;
					border-radius: 12px;
					background: linear-gradient(180deg, #E9FFBB 3.79%, rgba(255, 255, 255, 0.00) 22.39%), #FFF;
					// background: linear-gradient(180deg, #E9FFBB 3.79%, rgba(255, 255, 255, 0.00) 22.39%), #FFF;



					&_product {

						&_item {
							margin: 28rpx 0;
							width: 132rpx;
							text-align: center;
							position: relative;

							&_price {
								color: #F94E05;
								text-align: center;
								font-family: Roboto;
								font-size: 30rpx;
								font-weight: 500;
								position: absolute;
								bottom: -12rpx;
							}

							.product_image {
								width: 114rpx;
								height: 86rpx;
							}

							&_subsidy {
								position: relative;
								top: -24rpx;

								.price {
									width: 144rpx;
									height: 40rpx;

								}

								.icon1 {
									width: 18rpx;
									height: 24rpx;
									position: absolute;
									top: 40%;
									transform: translateY(-50%);
									left: -4rpx;
								}

								&_text {
									position: absolute;
									top: 55%;
									left: 50%;
									transform: translate(-46%, -44%);
									text-align: center;
									width: 100%;
									height: 100%;
									color: #FFF;
									font-family: PingFang SC;
									font-size: 24rpx;
								}
							}
						}
					}
				}

				// 限时新人活动
				.limited_time {
					.subsidy_product_item:last-child {
						margin-top: -38rpx;
					}

					// 9.9包邮
					.free_shipping {
						width: 332rpx;
						height: 228rpx;
						border-radius: 12px;
						background: linear-gradient(180deg, #E9FFBB 3.79%, rgba(255, 255, 255, 0.00) 48.36%), #FFF;
					}

					.new-user {
						margin-top: 20rpx;
						@include flex;
						justify-content: space-around;

						// 限时降价, 0元领取
						.common {
							width: 156rpx;
							height: 228rpx;
							border-radius: 12px;
							background: linear-gradient(180deg, #E9FFBB 3.79%, rgba(255, 255, 255, 0.00) 22.39%), #FFF;

							.header_title {
								padding: 16rpx 0;
								text-align: center;
							}
						}

						.subsidy_product_item {
							margin: 0 auto;

						}
					}
				}
			}

			// 广告
			.ad {
				margin-top: 30rpx;

				image {
					width: 100%;
					height: 148rpx;
				}
			}

			// 吸顶菜单
			.container {
				position: relative;

				.menu {
					background-color: #f0f0f0;
					padding: 10px;
					margin-bottom: 10px;
				}


			}

	/deep/ .u-sticky{
		background-color: #F2F4F7 !important;
		    width: 100% !important;
	}
			.waterfall {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}

			.column {
				flex-basis: 48%;
				/* 设置列宽度为瀑布流容器的一半减去间距 */
			}

			.item {
				margin-bottom: 10px;
				padding: 10px;
				background-color: #f0f0f0;
			}

			.item-title {
				margin-top: 5px;
				font-size: 14px;
				text-align: center;
			}

			.load-more {
				margin-top: 20px;
				text-align: center;
			}



		}
	}
</style>