<template>
	<view>
		<search :hotList="hotList" @input="input" @change="change"></search>
		<u-scroll-list>
			<view class="scroll">
				<view class="scroll_item soar">

				</view>
			</view>
			<view class="scroll">
				<view class="scroll_item soar">

				</view>
			</view>
		</u-scroll-list>
	</view>
</template>

<script>
	// import searchTool from '@/components/search-bar/index.vue'
	import search from "@/components/search/index.vue"
	export default {
		components: {
			search
		},
		data() {
			return {
				list: [{
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
				}],
				hotList: ['白酒', '苹果醋', '红酒', '笔记本', '洗衣液', '平板电脑', '电视机'], //热门搜索
				blurList: ['我的', '我要红包', '我要开红包', '我的红包', '我的世界'], //模糊搜索内容
			};
		},
		methods: {
			//搜索回调
			change(e) {
				console.log('搜索回调信息：' + e)
			},
			//input事件
			input(e) {
				console.log('搜索框输入的内容：' + e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll {
		.soar {
			background: url('/static/images/common/soar.png') top no-repeat;
			// background-image: url('/static/images/common/soar.png');
		}

		&_item {
			width: 664rpx;
			height: 672rpx;
		}
	}
</style>