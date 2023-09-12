<template>
	<u-tabbar :value="value6" @change="onChange" :fixed="true" :placeholder="true"
		:safeAreaInsetBottom="true">
		<u-tabbar-item text="首页" icon="home"></u-tabbar-item>
		<u-tabbar-item text="分类" icon="photo"></u-tabbar-item>
		<u-tabbar-item text="优惠券" icon="play-right"></u-tabbar-item>
		<u-tabbar-item text="客服" icon="account"></u-tabbar-item>
	</u-tabbar>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},methods:{
			onChange(index){
				// 选中index传值给父 显示隐藏店铺首页组件
				this.$emit('barIndex',index);
				
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>