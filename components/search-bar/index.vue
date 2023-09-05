<template>

	<view class="search">
		<view class="search-bg" :style="'padding-top:' + (titleHeight) + 'px;padding-bottom:22rpx'">
			<!-- <u-icon size="40" name="arrow-left"></u-icon> -->
			<!-- <u-navbar title="个人中心"  :autoBack="true">
			</u-navbar> -->
			<u-navbar  @rightClick="rightClick" :autoBack="true">
				<view class="u-nav-slot" slot="left">
					<u-icon name="arrow-left" size="19"></u-icon>
					<u-search v-model="value14" showAction>
					</u-search>
				</view>
			</u-navbar>
		</view>
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
				titleHeight: '',
			}
		},
		created() {
			this.getHeight();
		},
		methods: {
			getHeight() {
				let res = uni.getMenuButtonBoundingClientRect();
				this.titleHeight = res.top;
			},
			toUrl(name) {
				uni.navigateTo({
					url: name
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		background: linear-gradient(180deg, #FFF 97.21%, #F3F5F8 100%);

		&-bg {
			background: url('/static/images/home/head-bg.png') center no-repeat;
		}

		.search-box {
			height: 64rpx;
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
	}
</style>