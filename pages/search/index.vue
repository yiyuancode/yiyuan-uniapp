<template>
	<view>
		<search :hotList="hotList" @input="input" @change="change"></search>
		<u-scroll-list style="margin-top: 48rpx;" :indicator="false">
			<view class="scroll">
				<view class="scroll_list soar"
					:style="{background:'url('+soarBgImg+') center no-repeat;background-size:100% 100%'}">
					<view class="header">
						<image src="/static/images/icon/soar.png" mode=""></image>
						<view class="title">飙升榜</view>
					</view>
					<view class="scroll_list_item">
						<view class="scroll_list_item_item" v-for="(item,index) in 5" :key="index">
							<view class="product">
								<view class="product_image">
									<image src="@/static/images/product/p5.png" mode="aspectFit"></image>
								</view>
								<view class="product_title">
									乔丹同款绿色时髦凉衬衫
								</view>
								<view class="tags">
									<view class="tag">
										新
									</view>
								</view>
							</view>
							<view class="data">
								<view class="data_ranking">
									230w+
								</view>
								<view class="data_sort">
									<image src="@/static/images/icon/asc.png" mode=""></image>
								</view>
							</view>
						</view>

					</view>
				</view>
				<view class="scroll_btn" @click="completeList">
					查看完整榜单
				</view>
			</view>
			<view class="scroll">
				<view class="scroll_list sort"
					:style="{background:'url('+sortBgImg+') center no-repeat;background-size:100% 100%'}">
					<view class="header">
						<image src="/static/images/icon/sort.png" mode=""></image>
						<view class="title">排行榜</view>
					</view>
					<view class="scroll_list_item">
						<view class="scroll_list_item_item" v-for="(item,index) in 5" :key="index">
							<view class="ranking">
							<image src="@/static/images/icon/leve1.png" mode=""></image>
							<view class="num">
								{{index+1}}
							</view>
							</view>
							<view class="product">
								<view class="product_image">
									<image src="@/static/images/product/p5.png" mode="aspectFit"></image>
								</view>
								<view class="product_title">
									乔丹同款绿色时髦凉衬衫
								</view>

							</view>
							<view class="data">
								<view class="data_ranking">
									230w+
								</view>

							</view>
						</view>
					</view>
				</view>
				<view class="scroll_btn" @click="completeList">
					查看完整榜单
				</view>
			</view>
		</u-scroll-list>

	</view>
</template>

<script>
	// import searchTool from '@/components/search-bar/index.vue'
	import search from "@/components/search/index.vue"
	export default {
		components: {
			search
		},
		data() {
			return {

				soarBgImg: "/static/images/common/soar.png",
				sortBgImg: "/static/images/common/sort.png",
				hotList: ['白酒', '苹果醋', '红酒', '笔记本', '洗衣液', '平板电脑', '电视机'], //热门搜索
				blurList: ['我的', '我要红包', '我要开红包', '我的红包', '我的世界'], //模糊搜索内容
			};
		},
		methods: {
			// 跳转榜单
			completeList(){
				uni.navigateTo({
					url:"/pages/search/list/list"
				})
			},
			//搜索回调
			change(e) {
				console.log('搜索回调信息：' + e)
			},
			//input事件
			input(e) {
				console.log('搜索框输入的内容：' + e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll {
		margin-right: 16rpx;

		&_btn {
			width: 576rpx;
			height: 72rpx;
			color: #000;
			font-family: PingFang SC;
			font-size: 24rpx;
			font-weight: 400;
			text-align: center;
			margin: 0 auto;
			border-radius: 16rpx;
			border: 1px solid #DFE4DE;
			margin-top: 26rpx;
			line-height: 72rpx;

		}

		&_list {
			width: 664rpx;
			padding: 20rpx;
			box-sizing: border-box;

			.header {
				display: flex;
				align-items: flex-end;

				image {
					margin-bottom: 5rpx;
					width: 34rpx;
					height: 34rpx;
					margin-right: 8rpx;
					vertical-align: bottom;
				}

				.title {
					vertical-align: middle;
					color: #F94E05;
					text-align: center;
					font-family: YouSheBiaoTiHei;
					font-size: 20px;
					font-weight: 400;
				}
			}
			
			&_item {
				width: 620rpx;
				// height: 576rpx;
				border-radius: 6px;
				background: #FFF;
				margin-top: 28rpx;

				&_item {
					.sort{
						.product{
							margin-left: 40rpx;
						}
					}
					display: flex;
					align-items: center;
					justify-content: space-around;
					padding: 8rpx 0;
					position: relative;
					.ranking {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						left: 16rpx;
						margin-right: 24rpx;
						image{
							width: 44.429rpx;
							height: 44rpx;
							flex-shrink: 0;
						}
						.num{
							position: absolute;
							top: 0;
							left: 15rpx;
							color: #FFF;
							font-family: PingFang SC;
							font-size: 28.143rpx;
							font-weight: 400;
						}
					}

					.product {
						display: flex;
						align-items: center;

						&_image {
							width: 96rpx;
							height: 96rpx;
							align-items: flex-start;
							gap: 2.67px;
							border-radius: 3.203px;
							border: 0.8px solid var(--B7, #F2F4F7);
							background: var(--A4, #FFF);

							image {
								width: 100%;
								height: 100%;
							}
						}

						&_title {
							color: #333;
							font-family: PingFang SC;
							font-size: 24rpx;
							font-style: normal;
							font-weight: 400;
							padding: 0 12rpx;
						}

						.tags {
							.tag {
								width: 32rpx;
								height: 32rpx;
								text-align: center;
								line-height: 32rpx;
								border-radius: 8rpx;
								font-family: PingFang SC;
								font-size: 20rpx;
								font-weight: 400;
								color: #FFF;
								background: linear-gradient(180deg, #EC6351 0%, #EB4E53 100%);
							}
						}
					}

					.data {
						display: flex;
						align-items: center;

						&_ranking {
							color: #939692;
							text-align: right;
							font-family: PingFang SC;
							font-size: 24rpx;
							font-style: normal;
							font-weight: 500;
						}

						&_sort {
							padding-left: 2rpx;

							image {
								width: 20rpx;
								height: 20rpx;
							}
						}
					}
				}
			}
		}

	}



	/deep/ .u-scroll-list {
		margin: 48rpx 20rpx;
	}
</style>