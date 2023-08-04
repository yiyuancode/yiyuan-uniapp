<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<BottomToolBar></BottomToolBar>
	</view>
</template>

<script>
	import user from "@/api/user.js";
	import BottomToolBar from '@/components/d-BottomToolBar/index.vue';
	export default {
		components:{
			BottomToolBar
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		mounted() {
			user.getData('api/user?arg1=data1', 'id:1', true).then(res => {
				if (res.statusCode == 200) {

				} else {
					uni.showToast({
						icon: 'none',
						title: res.errMsg
					})
					return false
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>