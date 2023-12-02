<template>
	<view class="container">
		<u-navbar title="新建收货地址" placeholder @rightClick="rightClick" :autoBack="true">
		</u-navbar>
		<view class="wrap">
			<view class="top">
				<u--form labelPosition="left" labelWidth="80" :model="formData" :rules="rules" ref="uForm">
					<u-form-item label="收货人" prop="userInfo.name">
						<u--input v-model="formData.userInfo.name" placeholder="请填写收货人姓名" border="none"></u--input>
					</u-form-item>
					<u-form-item label="手机号码" prop="userInfo.name">
						<u--input v-model="formData.userInfo.name" placeholder="请填写收货人手机号码" border="none"></u--input>
					</u-form-item>

					<u-form-item label="所在地区" prop="userInfo.sex" @click="show = true; hideKeyboard()" ref="item1">
						<u--input v-model="formData.userInfo.sex" disabled disabledColor="#ffffff"
							placeholder="省市区县、乡镇等" border="none"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>

					<u-form-item label="详细地址" prop="userInfo.name">
						<u--input v-model="formData.userInfo.name" placeholder="街道、楼牌号等" border="none"></u--input>
					</u-form-item>
					<u-form-item label=" " prop="intro">
						<u--textarea placeholder="试试粘贴收件人姓名、手机号、收货地址可快速识别您的收件信息" v-model="formData.intro"
							count></u--textarea>
					</u-form-item>
				</u--form>
				<u-picker title="标题太长就会显示省略号" :show="show" ref="uPicker" :loading="loading" :columns="columns"
					@change="changeHandler"></u-picker>
			</view>
			<view class="setup d-flex align-items-center">
				<u-cell-group :border="false">
					<u-cell title="设置为默认地址" :border="false" arrow-direction="down">
						<u-switch slot="right-icon" v-model="value" activeColor="#000000"></u-switch>
					</u-cell>
				</u-cell-group>
			</view>
		</view>
		<view class="add-wrap">
			<view class="add">
				保存使用
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getArea,
		addUserAddress
	} from '@/config/api/user'
	export default {
		data() {
			return {
				show: false,
				loading: false,
				value: true,
				columns: [
					['中国', '美国'],
					['深圳', '厦门', '上海', '拉萨']
				],
				columnData: [
					['深圳', '厦门', '上海', '拉萨'],
					['得州', '华盛顿', '纽约', '阿拉斯加']
				],
				formData: {
					intro: ''
				}
			};
		},
		created(){
			this.getLArea()
		},
		methods: {
			setDefault() {},
			showRegionPicker() {
				this.show = true;
			},
			addAddress() {
				addUserAddress({
					custom: {
						token: true
					}
				}).then(res=>{
					
				})
			},
			getLArea(){
				getArea()
			}
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		background: #F2F4F7;
		min-height: 100vh;

		.wrap {
			background-color: #f2f2f2;
			width: 94%;
			margin: 0 auto;
			margin-top: 16rpx;
			box-sizing: border-box;

			.top {
				background-color: #ffffff;
				padding: 26rpx;
				border-radius: 16rpx;

				/deep/ .u-form-item__body__left__content {
					color: #293226;
					font-family: PingFang SC;
					font-size: 28rpx;
					font-weight: 400;
				}

				/deep/ .u-form-item:last-child {

					.u-form-item__body__left {
						display: none !important;
					}

					.u-border {
						border-color: #F2F4F7 !important;
					}
				}




			}

			.setup {
				width: 100%;
				height: 98rpx;
				margin: 0 auto;
				border-radius: 8px;
				background: #FFF;
				margin-top: 16rpx;

				/deep/ .u-cell__right-icon-wrap--down {
					transform: rotate(0) !important;
				}

				/deep/ .u-switch__node {
					background: #BEF000;
				}

			}

		}

		.add-wrap {
			width: 100%;
			height: 180rpx;
			background: #FFF;
			position: absolute;
			bottom: 0;

			.add {
				width: 94%;
				height: 88rpx;
				margin: 0 auto;
				margin-top: 14rpx;
				color: #FFF;
				text-align: center;
				line-height: 88rpx;
				font-family: PingFang SC;
				font-size: 28rpx;
				font-weight: 400;
				border-radius: 16rpx;
				background: #F94E05;
			}
		}
	}
</style>