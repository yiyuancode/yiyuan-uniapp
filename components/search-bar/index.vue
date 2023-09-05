<template>
	<view class="search" @click="toUrl('/pages/search/index')">
		<u-notice-bar icon="search" color="#A1A4A0" bgColor="transparent" fontSize="12" :text="listText"
			direction="column"></u-notice-bar>
		<view class="search-btn">
			搜索
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
		methods: {
			toUrl(name) {
			uni.navigateTo({
				url:name
			})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		height: 80rpx;
		margin: 0 23.8rpx;
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

		/deep/ .u-icon__icon {
			font-size: 30px;
		}
	}
</style>