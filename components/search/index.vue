<template>
	<view class="page-main">
		<view class="search-box">
			<view class="search" :style="{'padding-top':$uniHeight().top+50+'px'}">

				<u-navbar leftIconColor="#000000" background="transparent" leftIconSize="25px" safeAreaInsetTop>
					<view class="u-nav-slot search-header" slot="center">

						<image class="search-img" :src="searchImg"></image>
						<input class="search-input" :placeholder="placeholder" type="text" v-model.trim="searchText"
							@confirm="confirmSearch" @input="inputSearch" placeholder-class="placeholder-name" />
						<view class="search-name" @click="confirmSearch">搜索</view>
					</view>
				</u-navbar>

				<view class="search-history" v-if="historyList.length">
					<view class="history-title">
						<view class="title-name">
							搜索历史
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
							<span class="delete-icon" v-if="isDelete">
								<image src="@/static/images/icon/close.png" mode=""></image>
							</span>
						</view>
					</view>
				</view>
			</view>
			<u-gap height="6" bgColor="#F2F4F7"></u-gap>
			<view class="search-history" v-if="hotList.length">
				<view class="history-title">
					<view class="title-name">搜索发现
					</view>
					<view class="f5">
						换一换
						<image class="title-img" :src="seeMore?seeImg:noSeeImg"></image>
					</view>
				</view>
				<view class="history-list" v-if="seeMore">
					<view class="history-name" v-for="(item,index) in hotList" :key="index" @click="clickHis(item)">
						{{item}}
					</view>
				</view>
			</view>

		</view>

		<scroll-view class="blur-list" v-if="searchText && blurList.length>0" scroll-y="true" scroll-with-animation>
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
				default: '请输入搜索关键词',
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
		options: {
			styleIsolation: 'shared' // 解除样式隔离
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
		display: inline-block;
		position: relative;

		.search {
			background: url('/static/images/home/head-bg.png') top no-repeat;

		}

		.search-box {
			// background: linear-gradient(180deg, #FFF 97.21%, #F3F5F8 100%);
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

			.search-input::after {
				content: "";
				width: 1px;
				height: 14.5px;
				background-color: #000;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}

			.search-input {
				padding: 0 32rpx 0 76rpx;
				width: 63%;
				height: 64rpx;
				line-height: 24rpx;
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

			.f5 {
				color: #6D746B;
				text-align: center;
				font-family: PingFang SC;
				font-size: 12px;
				font-weight: 400;

				image {
					vertical-align: middle;
				}
			}

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
					display: inline-block;
				}

				.title-name::before {
					content: "";
					width: 100%;
					background: linear-gradient(rgba(190, 240, 0, 1), rgba(190, 240, 0, 0));
					height: 20rpx;
					position: absolute;
					left: 0;
					bottom: 0;
					// z-index: -1;
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
					background: #F2F4F7;
					height: 48rpx;
					line-height: 48rpx;
					padding: 0 24rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 10rpx 12rpx;
					color: #666666;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					position: relative;
					color: #444942;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-style: normal;
					font-weight: 400;


					.delete-icon {
						display: block;
						position: absolute;
						top: 50%;
						transform: translateY(-38%);
						font-size: 26rpx;
						color: #e4e4e5;
						right: 7rpx;
						image{
							width: 32rpx;
							height: 32rpx;
						}
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

	/deep/ .u-status-bar {
		background-color: transparent !important;
	}

	/deep/ .u-navbar__content {
		background-color: transparent !important;
	}
</style>