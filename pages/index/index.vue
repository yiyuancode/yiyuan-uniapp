<template>
	<view class="container">
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
		components: {
			BottomToolBar,
			shopContent
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		min-height: 100vh;
	}
</style>