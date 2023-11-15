<template>
	<view class="container">
		<u-navbar title="管理地址" placeholder @rightClick="rightClick" :autoBack="true">
		</u-navbar>
		<view class="address">
			<view class="address_item d-flex">
				<view class="d-flex d-box">
					<view class="icon d-flex ">
						<image src="@/static/images/icon/address.png"></image>
						<view class="">

						</view>
					</view>
					<view class="address_item_content">
						<view class="area">
							四川成都市武侯区桂溪街道
						</view>
						<view class="user_address">
							四川省成都市武侯区桂溪街道天府五街325号某某某小区1栋一单元
						</view>
						<view class="user d-flex">
							<view class="name">
								李某某
							</view>
							<view class="phone">
								138****8888
							</view>
						</view>
					</view>
				</view>
				<view class="operate">
					<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
						<u-checkbox :customStyle="{marginBottom: '8px'}" v-for="(item, index) in checkboxList1"
							:key="index" :label="item.name" :name="item.name">
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>

		</view>

		<view class="addSite" @tap="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				siteList: [],
				options1: [{
					text: '删除'
				}]
			};
		},
		onLoad() {
			this.getData();
		},
		methods: {
			getData() {
				this.siteList = [{
						id: 1,
						name: '游X',
						phone: '183****5523',
						tag: [{
								tagText: '默认'
							},
							{
								tagText: '家'
							}
						],
						site: '广东省深圳市宝安区 自由路66号'
					},
					{
						id: 2,
						name: '李XX',
						phone: '183****5555',
						tag: [{
							tagText: '公司'
						}],
						site: '广东省深圳市宝安区 翻身路xx号'
					},
					{
						id: 3,
						name: '王YY',
						phone: '153****5555',
						tag: [],
						site: '广东省深圳市宝安区 平安路13号'
					}
				];
			},
			toAddSite() {
				uni.navigateTo({
					url: '/pages/user/address/add'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		background: #F6F6F6;

		.address {
			box-sizing: border-box;

			&_item {
				position: relative;
				width: 94%;
				min-height: 303rpx;
				border-radius: 8px;
				background: #FFF;
				margin: 0 auto;
				margin-top: 16rpx;

				// align-items: center;
				.icon {
					margin: 0 32rpx;
					align-items: center;

					image {
						width: 56rpx;
						height: 56rpx;
					}
				}

				.d-box {
					align-items: center;
				}

				.d-box::after {
					content: '';
					width: 100%;
					height: 1rpx;
					background-color: #F2F4F7;
					display: block;
					position: absolute;
					bottom: 20rpx;
				}

				&_content {
					padding: 24rpx 0;
					padding-right: 26rpx;
					font-weight: 400;
					font-family: PingFang SC;

					.area {
						color: #6D746B;
						font-size: 24rpx;
					}

					.user_address {
						color: #0F1E0A;
						font-size: 28rpx;

					}

					.user {
						margin-top: 8px;

						.name {
							color: #293226;
							font-size: 28rpx;
						}

						.phone {
							color: #444942;
							font-family: PingFang SC;
							font-size: 24rpx;
						}
					}
				}

			}
		}

	}


	.addSite {
		display: flex;
		justify-content: space-around;
		width: 600rpx;
		line-height: 100rpx;
		position: absolute;
		bottom: 30rpx;
		left: 80rpx;
		background-color: red;
		border-radius: 60rpx;
		font-size: 30rpx;

		.add {
			display: flex;
			align-items: center;
			color: #ffffff;

			.icon {
				margin-right: 10rpx;
			}
		}
	}
</style>