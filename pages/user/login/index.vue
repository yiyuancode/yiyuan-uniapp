<template>
	<view class="container">
		<view>
			<u-navbar leftText="返回" title=" " :safeAreaInsetTop="true">
				<view class="u-nav-slot" slot="left">
					<u-icon name="close" size="19" color="#000"></u-icon>
				</view>
			</u-navbar>
		</view>
		<view class="bg" :style="{'padding-top':($uniHeight().top+30)+'px'}">
			<view class="logo">
				<image src="@/static/images/home/logo.png" mode=""></image>
			</view>
			<view class="describe">
				<image src="@/static/images/icon/happy.png" mode=""></image>
				<text>Hi,欢迎开启新的购物生活</text>
			</view>
			<view class="login">
				<view class="tabs">
					<view :class="tabsIndex==index?'group current':'group'" v-for="(item,index) in tabs" :key="index"
						@click="onTabs(index)">
						{{item.text}}
					</view>
				</view>
				<view class="login_form">
					<!-- 快捷登录 -->
					<view v-if="tabsIndex==0">
						<u--form labelPosition="left" :model="form" :rules="rules" ref="uForm">
							<u-form-item label="+86" prop="phone" borderBottom ref="item1">
								<u--input v-model="form.phone" placeholder="请输入手机号" border="none"></u--input>
							</u-form-item>
							<u-form-item prop="code" labelWidth="80" borderBottom>
								<u--input v-model="form.code" border="none" placeholder="填写验证码"></u--input>
								<view class="code">
									<u-code ref="uCode" @change="codeChange" keep-running start-text="获取验证码"></u-code>
									<text @tap="getCode" :text="tips" class="u-page__code-text">{{tips}}</text>
								</view>
							</u-form-item>
						</u--form>
						<view class="user_agreement">
							<u-checkbox-group :v-model="checkBox" placement="row" @change="checkboxChange">
								<u-checkbox shape='circle'>
								</u-checkbox>
								<view class="agreement d-flex">
									<text class="lable">我已阅读并同意</text>
									<navigator url="用户协议" class="user_text ">《用户协议》</navigator>
								</view>
							</u-checkbox-group>
						</view>
						<view class="login_button">
							<view class="button" @click="loginForm">
								登录
							</view>
							<view class="href" @click="onTabs(1)">
								账号登录
							</view>
						</view>


					</view>
					<!-- 账号密码登录 -->
					<view v-if="tabsIndex==1">
						<u--form labelPosition="left" :model="form1" :rules="rules1" ref="uForm">
							<u-form-item label="+86" prop="phone" borderBottom ref="item1">
								<u--input v-model="form.phone" placeholder="请输入手机号" border="none"></u--input>
							</u-form-item>
							<u-form-item prop="passWord" borderBottom>
								<u--input v-model="form.passWord" placeholder="填写密码" border="none"></u--input>
							</u-form-item>
						</u--form>
						<view class="user_agreement">
							<u-radio-group v-model="radio" @change="groupChange">
								<u-radio :customStyle="{marginBottom: '8px'}" @change="radioChange">
								</u-radio>
								<view class="agreement d-flex">
									<text class="lable">我已阅读并同意</text>
									<navigator url="用户协议" class="user_text ">《用户协议》</navigator>
								</view>
							</u-radio-group>
						</view>
						<view class="login_button">
							<view class="button" @click="loginForm">
								登录
							</view>
							<view class="href" @click="onTabs(0)">
								快捷登录
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		sendEmailCode,
		emailLogin,
		getUserInfo
	} from '@/config/api/user.js'
	export default {
		data() {
			return {
				tabs: [{
					text: "快捷登录"
				}, {
					text: "账号登录"
				}],
				tabsIndex: 0,
				form: {
					phone: null,
					code: null
				},
				form1: {
					phone: '',
					passWord: ''
				},
				rules: {
					phone: [{
							required: true,
							message: '手机号码不能为空',
							trigger: 'blur'
						},
						{
							pattern: /^1\d{10}$/,
							message: '手机号码格式不正确',
							trigger: 'blur'
						}
					],
					code: [{
						required: true,
						message: '验证码不能为空',
						trigger: 'blur'
					}]
				},

				tips: "获取验证码",
				disabled1: false,
				radiolist1: [{
					name: '',
					disabled: false
				}, ],
				checkbox1: false
			}
		},

		methods: {
			onTabs(index) {
				this.tabsIndex = index
			},
			codeChange(text) {
				this.tips = text;
			},
			checkboxChange(n) {
				this.checkbox1 = !(Array.isArray(n) && n.length === 0);
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			getCode() {
				if (!uni.$u.test.email(this.form.phone)) return uni.$u.toast('请正确输入邮箱');
				if (this.$refs.uCode.canGetCode) {
					uni.showLoading({
						title: '正在获取验证码'
					})
					sendEmailCode({
						email: this.form.phone
					}).catch(err => {
						uni.$u.toast(err)
					})
					uni.hideLoading();
					uni.$u.toast('验证码已发送');
					this.$refs.uCode.start();
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			// 快捷登录
			loginForm() {
				this.$refs.uForm.validate().then(res => {
					if (this.checkbox1 == true) {
						emailLogin({
							phoneOrEmail: this.form.phone,
							code: this.form.code,
							type: 1,
							registryType: 2
						}).then(res => {
							uni.$u.toast('登录成功,正在前往');
						uni.switchTab({
							url:'/pages/user/index/index'
						})
							this.$u.vuex('vx_token', res.token)

						})
					} else {
						uni.$u.toast('请勾选用户协议！');
					}

				}).catch(errors => {
					uni.$u.toast(errors, '校验失败')
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #FFF;

		.bg {
			width: 100%;
			height: 664rpx;
			background: #CAFD09;
			box-sizing: border-box;
			position: relative;

			.logo {
				width: 100%;
				text-align: center;

				image {
					width: 139px;
					height: 35px;
				}
			}

			.describe {
				text-align: center;
				margin-top: 24rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
					margin-right: 8rpx;
				}

				text {
					color: #000;
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;
				}
			}

			.login {
				margin-top: 56rpx;
				width: 100%;
				border-radius: 16px;
				background: #FFF;
				height: 672px;
				box-sizing: border-box;

				.tabs {
					padding-top: 48rpx;
					display: flex;
					justify-content: space-evenly;

					.group {
						color: #939692;
						text-align: center;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
					}

					.current {
						color: #0F1E0A;

						font-family: PingFang SC;
						font-size: 32rpx;
						font-weight: 400;
					}

					.current::after {
						content: "";
						display: block;
						margin: 0 auto;
						width: 32rpx;
						height: 8rpx;
						background: #000;
					}
				}

				&_form {
					width: 90%;
					margin: 0 auto;
					margin-top: 74rpx;

					.code {
						position: absolute;
						right: 0;
						z-index: 999;
						color: #939692;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
					}
				}

				.agreement {
					font-family: PingFang SC;
					font-size: 24rpx;
					font-weight: 400;

					.lable {
						color: #939692;
					}

					.user_text {
						color: #0F1E0A;
					}
				}

				.login_button {
					.button {
						width: 94%;
						margin: 0 auto;
						height: 96rpx;
						border-radius: 60rpx;
						text-align: center;
						line-height: 96rpx;
						background: #CAFD09;
						margin-top: 164rpx;
						color: #000;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
					}

					.href {
						margin-top: 30rpx;
						text-align: center;
						color: #939692;
						font-family: PingFang SC;
						font-size: 28rpx;
						font-weight: 400;
					}
				}
			}
		}
	}

	/deep/ .u-status-bar {
		background-color: transparent !important;
	}

	/deep/ .u-navbar__content {
		background-color: transparent !important;
	}

	/deep/ .u-form-item__body__left__content__label {
		color: #939692 !important;
		font-family: PingFang SC;
		font-size: 28rpx !important;
		font-weight: 400;
	}

	/deep/ .u-input__content__field-wrapper__field {
		color: #939692 !important;
		font-family: PingFang SC;
		font-size: 28rpx !important;
		font-weight: 400;
	}

	/deep/ .u-form-item {
		margin-bottom: 36rpx;
		position: relative;
	}
</style>