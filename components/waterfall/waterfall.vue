<template>
	<view class="waterfall-layout" :style="'margin:'+columnGap+'px 0px' ">
		<view class="water-flow-column" :style="{ 'margin-right': columnGap + 'px' }" v-for="(col, c) in colunmList"
			:key="c">
			<view class="item" :id="col.id" style="width: 100%;">
				<view v-for="(item, index) in col.list" :key="index" class="item_content"
					:style="{ 'margin-bottom': columnGap + 'px', background: item.background }" @click="choose(item)">
					<view class="water-flow-image">
						<image mode="widthFix" :lazy-load="true" :src="item.image" style="width: 100%;">
						</image>
					</view>
					<view class="water-flow-box">
						<view class="tag">
							优惠价
						</view>

						<view class="water-flow-tietle">
							{{ item.nftName }}
						</view>
					</view>
					<view class="data-price">
						<view class="price">
							￥99
						</view>
						<view class="sold">
							已售99
						</view>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'grass-water-flow',
		props: {
			fieldKey: {
				//关键比对key
				type: String,
				default: 'id'
			},
			idPrefix: {
				//前缀
				type: String,
				default: 'water-flow-'
			},
			colunmNumber: {
				//瀑布流列数
				type: Number,
				default: 2
			},
			columnGap: {
				//列间隔
				type: Number,
				default: 10
			},
			flowList: {
				// 瀑布流数据
				type: Array,
				required: true,
				default: function() {
					return [];
				}
			},
			value: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				colunmList: [], //列
				internalDataList: [], //内部操作数据
				refrenshColunmDataList: [] //记录加载的数据
			};
		},
		watch: {
			colunmNumber: function(v) {
				this.internalDataList = Object.assign([], this.refrenshColunmDataList);
				// this.calculateColumn(v, false);
			},
			flowList: function(v) {
				console.log(v,"++++++++++")
				this.internalDataList = Object.assign(this.internalDataList, v);
				if (this.internalDataList.length > 0) {
					this.getPushContainer();
				}
			},
			colunmList: {

				handler() {
					this.$nextTick(function() {
						this.getPushContainer();
					});
				},
				deep: true
			}
		},
		created() {
			this.internalDataList = Object.assign([], this.flowList);
			this.calculateColumn(this.colunmNumber, true);
		},
		mounted() {
			console.log(this.colunmList)
			if (this.internalDataList.length > 0) {
				this.colunmList[0].list.push(this.internalDataList[0]);
				let shiftObj = this.internalDataList.shift();
				this.pushLoadData(shiftObj);
			}
		},
		methods: {
			// 选中点击
			choose(item) {
				uni.$u.route('pages/secondary/product_details', {
					tokenId: item.tokenId,
					chainId: item.credential.chainId,
					contract: item.credential.contractAddress,
					owner: item.credential.owner
				});
			},
			/**
			 * 计算列
			 * @param {Object} size       列数
			 * @param {Object} isCreate   是否初始化创建(created生命周期)
			 */
			calculateColumn: function(size, isCreate) {
				this.colunmList = [];
				for (let i = 1; i <= size; i++) {
					let obj = {};
					// console.log(this.idPrefix + i)
					obj.id = this.idPrefix + i;
					obj.list = [];
					this.colunmList.push(obj);
				}
				if (!isCreate) {
					if (this.internalDataList.length > 0) {
						this.colunmList[0].list.push(this.internalDataList[0]);
						let shiftObj = this.internalDataList.shift();
						this.pushLoadData(shiftObj);
					}
				}
			},
			/**
			 * 获取节点信息
			 */
			getPushContainer() {
				let sortList = [];
				const query = uni.createSelectorQuery().in(this);
				query
					.selectAll('.item')
					.boundingClientRect()
					.exec(res => {
						if (res) {
							sortList = res[0];
							sortList.sort(function(a, b) {
								return a.height - b.height;
							});
							this.pushShiftData(sortList[0]);
						}
					});
			},
			/**
			 * 处理数据
			 * @param {Object} pushObj
			 */
			pushShiftData(pushObj) {
				if (this.internalDataList.length > 0) {
					for (let i = 0; i < this.colunmList.length; i++) {

						if (this.colunmList[i].id == pushObj.id) {
							this.colunmList[i].list.push(this.internalDataList[0]);
							let shiftObj = this.internalDataList.shift();
							this.pushLoadData(shiftObj);
						}
					}
				}
			},
			/**
			 * 记录加载的数据
			 * @param {Object} obj
			 */
			pushLoadData(obj) {
				if (this.refrenshColunmDataList.length > 0) {
					let result = this.refrenshColunmDataList.some(item => {
						if (item[this.fieldKey] == obj[this.fieldKey]) {
							return true;
						}
					});
					if (!result) {
						this.refrenshColunmDataList.push(obj);
					}
				} else {
					this.refrenshColunmDataList.push(obj);
				}
			},
			/**
			 * 外部刷新数据时，调用此方法，清理掉原有加载数据
			 */
			externalRefrensh() {
				this.refrenshColunmDataList = [];
				for (let i = 0; i < this.colunmList.length; i++) {
					this.colunmList[i].list = [];
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.waterfall-layout {
		display: flex;
		flex-direction: row;
		height: auto;

		.water-flow-column {
			display: flex;
			flex-flow: column wrap;
			width: 100%;
			.data-price{
				display: flex;
				margin: 0 10rpx;
				justify-content: space-between;
				padding: 20rpx 0 46rpx 0;
				.price{
					color: #F94E05;
					font-family: Roboto;
					font-size: 40rpx;
					font-weight: 500
				}
				.sold{
					color: #939692;
					text-align: right;
					font-family: PingFang SC;
					font-size: 22rpx;
					line-height: 55rpx;
				}
			}
			.water-flow-box {
				display: flex;
				padding: 19rpx 0;
				margin: 0 10rpx;
				

				.tag {
					width: 94.434rpx;
					height: 32rpx;
					background: #293226;
					color: #D2F54D;
					font-family: PingFang SC;
					font-size: 20rpx;
					font-style: normal;
					font-weight: 400;
					text-align: center;
					line-height: 32rpx;
				}

			}



			.item_content {
				border-radius: 8px;
				background: #FFF;
			}

			.water-flow-tietle {
				width: 100%;
				margin-left: 10rpx;
				// white-space: nowrap;
				// overflow: hidden;
				// text-overflow: ellipsis;

				// font-weight: 700;

				color: #293226;
				font-family: PingFang SC;
				font-size: 27.424rpx;
				font-style: normal;
				font-weight: 400;
			}

			.water-flow-bot {
				width: 90%;
				margin: 0 auto;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 8rpx;
			}



			.water-flow-height {
				height: 34rpx;
			}

			.exchange-time {
				font-size: 24rpx;
				color: #666666;
				width: 90%;
				margin: 0 auto;
			}
		}

		.water-flow-column:last-child {
			margin-right: 0px !important;
		}
	}
</style>