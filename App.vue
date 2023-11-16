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
			//隐藏pages.json里配置的导航栏，使用封装的tabbar组件
			uni.hideTabBar({
				animation: false
			})
			// #ifdef H5
			uni.getSystemInfo({
				success(e) {
					/* 窗口宽度大于420px且不在PC页面且不在移动设备时跳转至 PC.html 页面 */
					if (e.windowWidth > 420 && !window.top.isPC && !/iOS|Android/i.test(e.system)) {
						/* 若你的项目未设置根目录（默认为 / 时），则使用下方代码 */
						window.location.pathname = '/static/html/pc.html';
					}
				}
			})
			// #endif
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
		max-width: 1000rpx;
	}

	.container {
		width: 100%;
	}
	.d-flex{
		display: flex;
	}
</style>