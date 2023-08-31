<template>
	<view class="" >
		<view class="shop" :style="'padding-top:' + (titleHeight+4) + 'px'">
			<view class="shop-name">
				<image src="@/static/images/home/logo.png" class="logo" mode=""></image>
			</view>
			<view class="shop-equity">
				<view class="item" v-for="(item,index) in equity" :key="index">
					{{item.text}}
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleHeight: '',
				equity: [{
					text: '品质保证'
				}, {
					text: '七天无理由'
				}]
			}
		},
		created() {
			this.getHeight();
		},
		mounted() {

		},
		methods: {
			getHeight() {
				let res = uni.getMenuButtonBoundingClientRect();
				this.titleHeight = res.top;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.shop {
		margin: 0 23.8rpx;
		display: flex;
		&-name {
			color: var(--b-1, #0F1E0A);
			text-align: center;
			font-family: YouSheBiaoTiHei;
			font-size: 48rpx;
			font-style: italic;
			font-weight: 400;
			margin-right: 10rpx;
			.logo{
				width: 176rpx;
				height: 38rpx;
			}
		}

		&-equity {
			display: flex;
			padding: 14rpx 0;
			color: var(--b-1, #0F1E0A);
			text-align: center;
			font-family: PingFang SC;
			font-size: 24rpx;
			background: url('@/static/images/home/Rectangle.png');
			background-size: 100% 100%;
		}
		.item{
			position: relative;
			padding: 0 20rpx;
		}
		.item::before{
			content: '|';
			position: absolute;
			right: 0;
		}
		.item:last-child::before{
			content: '';
		}
	}
</style>