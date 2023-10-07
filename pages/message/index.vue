<template>
	<view class="container">
		<view class="page-head"  :style="{'padding-top':$uniHeight().top+50+'px'}">
			<u-navbar  title="消息" :safeAreaInsetTop="false">
				<view class="u-nav-slot" slot="left">
					
				</view>
			</u-navbar>
		</view>
		<tabBar></tabBar>
	</view>
</template>

<script>
	import tabBar from '@/components/tabBar/index.vue';
	export default {
		components: {
			tabBar
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
		.page-head{
			height: 472rpx;
		}
	}
</style>