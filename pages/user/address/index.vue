<template>
	<view class="container">
		<u-navbar title="管理地址" placeholder @rightClick="rightClick" :autoBack="true">
		</u-navbar>
		<view class="address">
			<view class="address_item relative d-flex">
				<view class="d-flex d-box relative align-items-center">
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
				<view class="operate d-flex justify-content-between align-items-center">
					<view class="setup d-flex align-items-center">
						<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
							<u-checkbox shape="circle" activeColor="#BEF000" iconColor="#000">
							</u-checkbox>
						</u-checkbox-group>
						<view class="text">设置为默认地址</view>
					</view>
					<view class="button d-flex">
						<view class="edit">
							编辑
						</view>
						<view class="del">
							删除
						</view>
					</view>
				</view>
			</view>

		</view>

		<view class="addSite">
			<view class="add" @tap="toAddSite">
				新增收货地址
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUserAddress
	} from '@/config/api/user'
	export default {
		data() {
			return {
				siteList: [],
				options1: [{
					text: '删除'
				}],
				checkboxList1: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '橙子',
						disabled: false
					}
				],
			};
		},
		onLoad() {
			this.getData();
		},
		created() {
			this.getIndex()
		},
		methods: {
			getIndex() {
				getUserAddress({
					custom: {
						token: true
					}
				});
			},
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
		min-height: 100vh;

		.address {
			box-sizing: border-box;

			&_item {
				width: 94%;
				height: 303rpx;
				border-radius: 8px;
				background: #FFF;
				margin: 0 auto;
				margin-top: 16rpx;
				flex-direction: column;

				// align-items: center;
				.icon {
					margin: 0 32rpx;
					align-items: center;

					image {
						width: 56rpx;
						height: 56rpx;
					}
				}



				.d-box::after {
					content: '';
					width: 100%;
					height: 1rpx;
					background-color: #F2F4F7;
					display: block;
					position: absolute;
					bottom: 0;
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

				.operate {
					padding: 0 26rpx 0 36rpx;
					height: 100%;

					.setup {
						color: #6D746B;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;
					}

					.button {
						color: #6D746B;
						font-family: PingFang SC;
						font-size: 24rpx;
						font-weight: 400;

						.edit {
							padding-right: 42rpx;
						}
					}
				}
			}
		}

	}


	.addSite {
		width: 100%;
		height: 90px;
		background: #ffffff;
		position: absolute;
		bottom: 0;

		.add {
			width: 94%;
			margin: 0 auto;
			height: 88rpx;
			border-radius: 8px;
			background: #F94E05;
			margin-top: 14rpx;
			color: #FFF;
			text-align: center;
			line-height: 88rpx;
			font-family: PingFang SC;
			font-size: 28rpx;
		}
	}
</style>