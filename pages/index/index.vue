<template>
	<view class="container" >
		<!-- 顶部商城名字 logo -->
		<shopContent></shopContent>
		<BottomToolBar></BottomToolBar>
	</view>
</template>

<script>
	import user from "@/api/user.js";
	import BottomToolBar from '@/components/d-BottomToolBar/index.vue';
	import shopContent from '@/components/home/top-shop-content.vue'
	export default {
		components:{
			BottomToolBar,
			shopContent
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		mounted() {
			// user.getData('api/user?arg1=data1', 'id:1', true).then(res => {
			// 	if (res.statusCode == 200) {

			// 	} else {
			// 		uni.showToast({
			// 			icon: 'none',
			// 			title: res.errMsg
			// 		})
			// 		return false
			// 	}
			// })
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container{
		width: 100%;
		min-height: 100vh;
	}
</style>