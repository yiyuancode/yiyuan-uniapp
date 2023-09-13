<template>
	<view class="coupon">
		<view class="coupon_item" v-for="(item,index) in 110" :key="index">
			<view class="money">
				<view class="value">
					<view class="text">
						￥
					</view>
					<view class="price">
						30
					</view>
				</view>
				<view class="reduction">
					满50元可用
				</view>
			</view>
			<view class="activity">
				<view class="activity_type">
					限时活动
				</view>
				<view class="activity_time">
					2022/03/30到期
				</view>
			</view>
			<view class="residue">
				<view class="residue_time">
					剩10日
				</view>
				<view class="receive">
					领取
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	.coupon {
		&_item {
			width: 100%;
			height: 241.738rpx;
			background: rgba(255, 255, 255, 1);
			margin-bottom: 17rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.money {
				.value {
					display: flex;
					color:  #F94E05;
					font-family: PingFang SC;
					font-weight: 400;
					height: 53rpx;
					.text{
						font-size: 28rpx;
						line-height: 3;
					}
					.price{
						font-size: 48rpx;
					}
				}
				.reduction{
					color:  #939692;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
					padding: 7rpx;
				}
			}
			.activity{
				
				font-family: PingFang SC;
				font-weight: 400;
				&_type{
					color:  #293226;
					font-size: 28rpx;
				}
				&_time{
					padding-top: 14rpx;
					color: #939692;
					font-size: 24rpx;
				}
			}
			.residue{
				text-align: center;
				&_time{
					color: #F94E05;
					font-family: PingFang SC;
					font-size: 24rpx;
				}
				.receive{
					margin-top: 6rpx;
					width: 144rpx;
					height: 64rpx;
					background:  #F94E05;
					border-radius: 30rpx;
					text-align: center;
					line-height: 64rpx;
					color: #FFF;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
				}
			}

		}
	}
</style>