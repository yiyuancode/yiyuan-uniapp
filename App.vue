<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			setTimeout(() => {
				uni.loadFontFace({
					family: 'PingFang SC',
					source: 'url("https://yicode.net/PingFangSC.ttf")',
					success(res) {
						console.log('PingFang SC success')
					},
					fail(error) {
						console.log('PingFang字体加载失败', error);
					}
				})
				uni.loadFontFace({
					family: 'YouSheBiaoTiHei',
					source: 'url("https://yicode.net/YouSheBiaoTiHei.ttf")',
					success() {
						console.log('YouSheBiaoTiHei success')
					},
					fail(error) {
						console.log('YouSheBiaoTiHei字体加载失败', error);
					}
				})
			}, 300)

		},
		onShow: function() {
			console.log('App Show')

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	/*每个页面公共css */
	page {
		width: 100%;
	}

	.container {
		width: 100%;
	}
</style>