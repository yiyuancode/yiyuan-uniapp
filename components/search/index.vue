<template>
	<view class="page-main">
		<view class="search-box">
			<!-- 		<image class="search-img" :src="searchImg"></image>
			<input class="search-input" :placeholder="placeholder" type="text" v-model.trim="searchText"
				@confirm="confirmSearch" @input="inputSearch" placeholder-class="placeholder-name" />
			<view class="search-name" @click="confirmSearch">搜索</view> -->
			<u-navbar leftIconColor="#000000" leftIconSize="25px" safeAreaInsetTop bgColor="#F3F5F8">
				<view class="u-nav-slot search-header" slot="center">

					<image class="search-img" :src="searchImg"></image>
					<input class="search-input" :placeholder="placeholder" type="text" v-model.trim="searchText"
						@confirm="confirmSearch" @input="inputSearch" placeholder-class="placeholder-name" />
					<view class="search-name" @click="confirmSearch">搜索</view>
				</view>
			</u-navbar>
			<view class="search-history" v-if="historyList.length" style="margin-top: 12vh;">
				<view class="history-title">
					<view class="title-name">
						<view class="text">
							搜索历史
						</view>
						<view class="bg">

						</view>
					</view>
					<view class="history-delete" v-if="isDelete">
						<view class="delete-all" @click="deleteAll">全部删除</view>
						<view class="delete-line"></view>
						<view class="delete-complete" @click="deleteHistory">完成</view>
					</view>
					<image v-else class="title-img" :src="deleteImg" @click="deleteHistory"></image>
				</view>
				<view class="history-list">
					<view class="history-name" :style="isDelete?'padding:0 32rpx 0 16rpx;':''"
						v-for="(item,index) in historyList" :key="index" @click="clickHis(item,index)">
						{{item}}
						<span class="delete-icon" v-if="isDelete">x</span>
					</view>
				</view>
			</view>
		</view>

		<view class="search-history" v-if="hotList.length">
			<view class="history-title">
				<view class="title-name">搜索发现<view class="bg">

					</view>
				</view>
				<view class="f5">
					换一换
					<image class="title-img" :src="seeMore?seeImg:noSeeImg" ></image>
				</view>
			</view>
			<view class="history-list" v-if="seeMore">
				<view class="history-name" v-for="(item,index) in hotList" :key="index" @click="clickHis(item)">
					{{item}}
				</view>
			</view>
		</view>
		<scroll-view class="blur-list" v-if="searchText && blurList.length>0" scroll-y="true" scroll-with-animation>1111111111
			<view class="blur-item" v-for="(item,index) in blurList" :key="index" @click.stop="clickHis(item)">{{item}}
			</view>
		</scroll-view>
	</view>

</template>
<script>
	export default {
		props: {
			//搜索历史缓存key(多个页面使用时需要传)
			storageKey: {
				type: String,
				default: 'liu-search-name-list',
			},
			//输入框placeholder
			placeholder: {
				type: String,
				default: '请输入',
			},
			//模糊搜索内容
			blurList: {
				type: Array,
				default () {
					return []
				}
			},
			//热门搜索
			hotList: {
				type: Array,
				default () {
					return []
				}
			},
		},
		data() {
			return {
				seeImg: '/static/images/icon/f5.png',
				noSeeImg: '/static/images/icon/nosee.png',
				deleteImg: '/static/images/icon/delete.png',
				searchImg: '/static/images/icon/search.png',
				historyList: [],
				searchText: '', //搜索内容
				seeMore: true,
				isDelete: false
			}
		},
		mounted() {
			this.historyList = uni.getStorageSync(this.storageKey) || []
		},
		methods: {
			//删除历史或者完成
			deleteHistory() {
				this.isDelete = !this.isDelete
			},
			//全部删除
			deleteAll() {
				uni.setStorageSync(this.storageKey, '')
				this.historyList = []
				this.isDelete = !this.isDelete
			},
			//点击热门搜索
			clickHis(name, index) {
				if (this.isDelete) {
					this.historyList.splice(index, 1)
					uni.setStorageSync(this.storageKey, this.historyList)
				} else {
					this.searchText = name
					this.confirmSearch()
				}
			},
			//搜索框输入事件
			inputSearch() {
				this.$emit('input', this.searchText)
			},
			//搜索
			confirmSearch() {
				let oldList = uni.getStorageSync(this.storageKey) || []
				let hasName = false
				oldList.forEach(res => {
					if (res == this.searchText) hasName = true
				})
				if (!hasName && this.searchText) {
					oldList.push(this.searchText)
					uni.setStorageSync(this.storageKey, oldList)
					this.historyList = uni.getStorageSync(this.storageKey) || []
				}
				this.$emit('change', this.searchText)
			}
		}
	}
</script>
<style>
	/deep/ ::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}
</style>
<style lang="scss" scoped>
	.page-main {
		width: 100%;
		background-color: #F2F4F7;
		display: inline-block;
		position: relative;

		.search-box {
			background: url('/static/images/home/head-bg.png') center no-repeat;
		}

		.search-header {
			width: calc(100% - 150rpx);
			padding: 0 32rpx;
			height: 112rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;

			.search-img {
				position: absolute;
				left: 64rpx;
				width: 32rpx;
				height: 32rpx;
			}

			.search-input {
				padding: 0 32rpx 0 76rpx;
				width: 63%;
				height: 64rpx;
				line-height: 24rpx;
				background-color: #F2F3F5;
				font-size: 30rpx;
				color: rgba(0, 0, 0, 0.45);
				border-radius: 16rpx;
				border: 4rpx solid rgba(0, 0, 0, 0.85);
			}

			.placeholder-name {
				font-size: 30rpx;
				color: #999999;
			}

			.search-name {
				position: absolute;
				right: 25%;
				width: 50rpx;
				padding: 4px 16px;
				justify-content: center;
				align-items: center;
				border-radius: 4px;
				background: rgba(0, 0, 0, 0.85);
				color: #FFF;
				text-align: center;
				font-family: PingFang SC;
				font-size: 24rpx;
				font-weight: 400;
			}
		}

		.search-history {
			padding: 0 20rpx;
			margin-top: 24rpx;
			.f5{
				color:  #6D746B;
				text-align: center;
				font-family: PingFang SC;
				font-size: 12px;
				font-weight: 400;
				image{
					vertical-align: middle;
				}
			}
			// background: linear-gradient(180deg, #FFF 97.21%, #F3F5F8 100%);
			.history-title {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.title-name {
					font-size: 30rpx;
					color: #666666;
					font-weight: bold;
					margin-left: 12rpx;
					position: relative;
					.text{
						// position: absolute;
						// width: 100%;
						// z-index: 999;
					}
				}

				.bg {
					width: 100%;
					height: 20rpx;
					background: linear-gradient(rgba(190, 240, 0, 1), rgba(190, 240, 0, 0));
					position: absolute;
					bottom: 2rpx;
				}

				.title-img {
					width: 34rpx;
					height: 34rpx;
					margin-right: 12rpx;
				}

				.history-delete {
					height: auto;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					.delete-all {
						font-size: 26rpx;
						color: #666666;
					}

					.delete-line {
						width: 1px;
						height: 20rpx;
						background-color: #999999;
						margin: 0 12rpx;
					}

					.delete-complete {
						font-size: 26rpx;
						color: #F71E1E;
					}
				}
			}

			.history-list {
				width: 100%;
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				flex-wrap: wrap;
				padding: 12rpx 0;

				.history-name {
					border-radius: 88rpx;
					// background:  #F2F4F7;
					background-color: #FFFFFF;
					height: 48rpx;
					line-height: 48rpx;
					padding: 0 24rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 10rpx 12rpx;
					font-size: 26rpx;
					color: #666666;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					position: relative;

					.delete-icon {
						position: absolute;
						font-size: 26rpx;
						color: #e4e4e5;
						right: 12rpx;
						bottom: 2rpx;
					}
				}
			}
		}

		.blur-list {
			width: 100%;
			height: calc(100vh - 112rpx);
			background-color: #f8f8f8;
			position: absolute;
			top: 112rpx;
			box-sizing: border-box;
			padding: 0 32rpx;

			.blur-item {
				width: 100%;
				height: 96rpx;
				line-height: 96rpx;
				color: #666666;
				font-size: 28rpx;
				border-bottom: solid #f0f0f0 1px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
			}
		}
	}
</style>