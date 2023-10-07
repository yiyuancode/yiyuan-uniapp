<template>
	<!-- 底部导航 -->
	<view>
		<u-tabbar :value="activeTab" @change="handleChangeTab" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true" :activeColor="444942" :zIndex="999">
			<u-tabbar-item :text="item.name" :icon="getIcon(item, index)" v-for="(item, index) in barList" :key="index"
				:active="activeTab === index"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		computed: {
			...mapState('tabBar', ['activeTab', 'barList'])
		},
		methods: {
			...mapMutations('tabBar', ['updateActiveTab', 'updateBarList']),
			handleChangeTab(tab) {
				const previousTab = this.activeTab;
				const selectedTab = this.barList[tab];

				this.updateActiveTab(tab);
				uni.switchTab({
					url: selectedTab.path
				});
			},
			getIcon(item, index) {
				return this.activeTab === index ? item.selectedIconPath : item.iconPath
			}
		}
	};
</script>
<style lang="scss">
	.d-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		border-top: 1rpx solid #DDD;
		background-color: #fff;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		.d-item {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			position: relative;
			padding: 15rpx 0;

			.block {
				text-align: center;

				image {
					height: 50rpx;
					width: 50rpx;
					text-align: center;
					margin: 0 auto;
				}

				.text {
					color: #111;
					text-align: center;
					font-family: PingFang SC;
					font-size: 21.97rpx;
					font-weight: 400;
				}
			}

		}
	}
</style>