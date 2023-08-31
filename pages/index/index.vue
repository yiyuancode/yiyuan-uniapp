<template>
	<view class="container">

		<!-- 顶部商城名字 logo -->
		<shopContent></shopContent>
		<!-- 搜索框 -->
		<searchBar></searchBar>
		<div class="page-content">
			
		</div>
		<BottomToolBar></BottomToolBar>
	</view>
</template>

<script>
	import user from "@/api/user.js";
	import BottomToolBar from '@/components/d-BottomToolBar/index.vue';
	import shopContent from '@/components/home/top-shop-content.vue'
	import searchBar from '@/components/search-bar/index.vue'
	export default {
		components: {
			BottomToolBar,
			shopContent,
			searchBar
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

<style lang="scss" scoped>
	.container {
		width: 100%;
		min-height: 100vh;
	}
</style>