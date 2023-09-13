<template>
	<view class="category">
		<!-- 左侧导航 -->
		<view class="category_left">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll">
				<view v-for="(item,index) in categoryList" :key="index"
					:class="item.cid==categoryId?'row active':'row '" @click="showCategory(item)">
					{{ item.main_name }}
				</view>
			</scroll-view>
		</view>
		<view class="category_right">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll">
				<view v-for="(item,index) in categoryList" :key="index" @click="showCategory(item)">
					<view class="" v-for="(category,idx) in item.data" :key="idx" v-show="item.cid==categoryId">
						<view class="name">
							{{category.next_name}}
						</view>
						<view class="product">
							<view class="item" v-for="(product,p) in category.info" :key="p">
								<view class="product_image">
									<image class="image" :src="product.imgurl" mode="aspectFit"></image>
								</view>
								<view class="title">
									IPhone 14 Pro Max
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [{
						cid: 1,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 2,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 3,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 4,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 5,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 6,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 7,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 8,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},
					{
						cid: 9,
						main_name: '女装',
						data: [{
								next_name: '裙装',
								info: [{
										son_name: '连衣裙',
										imgurl: 'http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600'
									},
									{
										son_name: '雪纺裙',
										imgurl: 'http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600'
									},
									{
										son_name: '半身裙',
										imgurl: 'http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600'
									},
									{
										son_name: '印花裙',
										imgurl: 'http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600'
									},
									{
										son_name: '吊带裙',
										imgurl: 'http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600'
									},
									{
										son_name: '纯色裙',
										imgurl: 'http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600'
									}
								]
							},
							{
								next_name: '套装',
								info: [{
										son_name: '两件套',
										imgurl: 'http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600'
									},
									{
										son_name: '夏季套装',
										imgurl: 'http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600'
									},
									{
										son_name: '大码女装',
										imgurl: 'http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600'
									},
									{
										son_name: '妈妈装',
										imgurl: 'http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600'
									},
									{
										son_name: '婚纱',
										imgurl: 'http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600'
									},
									{
										son_name: '小香风',
										imgurl: 'http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600'
									},
									{
										son_name: '运动套装',
										imgurl: 'http://img.haodanku.com/97340565f9420afafc7a37966095da75-600'
									},
									{
										son_name: '雪纺套装',
										imgurl: 'http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600'
									}
								]
							},
							{
								next_name: 'T恤',
								info: [{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600'
									},
									{
										son_name: '一字肩',
										imgurl: 'http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600'
									},
									{
										son_name: '印花雪纺',
										imgurl: 'http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600'
									},
									{
										son_name: '吊带T恤',
										imgurl: 'http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600'
									},
									{
										son_name: '娃娃衫',
										imgurl: 'http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600'
									},
									{
										son_name: '情侣T恤',
										imgurl: 'http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600'
									},
									{
										son_name: '白衬衣',
										imgurl: 'http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600'
									},
									{
										son_name: '纯色T恤',
										imgurl: 'http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600'
									},
									{
										son_name: '蕾丝拼接',
										imgurl: 'http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600'
									},
									{
										son_name: '蕾丝衫',
										imgurl: 'http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600'
									},
									{
										son_name: '防晒衫',
										imgurl: 'http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600'
									},
									{
										son_name: '露肩上衣',
										imgurl: 'http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600'
									},
									{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600'
									}
								]
							},
							{
								next_name: '内搭',
								info: [{
										son_name: '喇叭袖',
										imgurl: 'http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600'
									},
									{
										son_name: '打底毛衣',
										imgurl: 'http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600'
									},
									{
										son_name: '棉服',
										imgurl: 'http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600'
									},
									{
										son_name: '毛呢',
										imgurl: 'http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600'
									},
									{
										son_name: '牛仔',
										imgurl: 'http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600'
									},
									{
										son_name: '短外套',
										imgurl: 'http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600'
									},
									{
										son_name: '羽绒',
										imgurl: 'http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600'
									},
									{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600'
									}
								]
							},
							{
								next_name: '裤子',
								info: [{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/047d30183d119f6805767a2649e05047-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600'
									},
									{
										son_name: '棉麻裤',
										imgurl: 'http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600'
									},
									{
										son_name: '破洞牛仔裤',
										imgurl: 'http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600'
									},
									{
										son_name: '裤子',
										imgurl: 'http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600'
									},
									{
										son_name: '阔腿裤',
										imgurl: 'http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600'
									}
								]
							}
						]
					},

					{
						cid: 10,
						main_name: '男装',
						data: [{
								next_name: '内搭',
								info: [{
										son_name: '长袖T恤',
										imgurl: 'http://img.haodanku.com/0cd092e3914e60ed74954bbba638d093-600'
									},
									{
										son_name: 'polo衫',
										imgurl: 'http://img.haodanku.com/0503477c4c5d9618b5be5dc3f7712dcf-600'
									},
									{
										son_name: 'T恤',
										imgurl: 'http://img.haodanku.com/439ba8ee07892f939714783e5f5fa49d-600'
									},
									{
										son_name: '卫衣',
										imgurl: 'http://img.haodanku.com/fa31cffcb202ac6523853af99810afb9-600'
									},
									{
										son_name: '短袖T恤',
										imgurl: 'http://img.haodanku.com/c12f373877a7a4b9e4856d552c91e3b3-600'
									},
									{
										son_name: '衬衣',
										imgurl: 'http://img.haodanku.com/9d792370897c7f393059514b17a0cb14-600'
									}
								]
							},
							{
								next_name: '外套',
								info: [{
										son_name: '马甲',
										imgurl: 'http://img.haodanku.com/325254ca7f6e1f03c438d818cb4c67cb-600'
									},
									{
										son_name: '呢大衣',
										imgurl: 'http://img.haodanku.com/f3c0fd52abf5945b5d253a64f8fce62d-600'
									},
									{
										son_name: '夹克',
										imgurl: 'http://img.haodanku.com/250eefdd7acef0934e9f0fafffa75c88-600'
									},
									{
										son_name: '棉衣',
										imgurl: 'http://img.haodanku.com/6b5cd4e0f1c6f346b552651209cf78a3-600'
									},
									{
										son_name: '棒球服',
										imgurl: 'http://img.haodanku.com/2c296a0d7e6600da4b5f572c1c1878e4-600'
									},
									{
										son_name: '牛仔外套',
										imgurl: 'http://img.haodanku.com/d55f8511d3916346c8a808dbe5b0868a-600'
									},
									{
										son_name: '皮衣',
										imgurl: 'http://img.haodanku.com/14f79fee301aa6bb5a69318d9d95a2ef-600'
									},
									{
										son_name: '羽绒服',
										imgurl: 'http://img.haodanku.com/51ee457f0c7b8c2ddb6f4e5e9dd9818e-600'
									},
									{
										son_name: '西装',
										imgurl: 'http://img.haodanku.com/09290b9079002c5d957b245bf8d5dc22-600'
									},
									{
										son_name: '风衣',
										imgurl: 'http://img.haodanku.com/16a6f06b799c96f30289e124ee084f9a-600'
									}
								]
							},
							{
								next_name: '下装',
								info: [{
										son_name: '七分裤',
										imgurl: 'http://img.haodanku.com/cc410e901bbb46c0ccb39de7d834186d-600'
									},
									{
										son_name: '九分裤',
										imgurl: 'http://img.haodanku.com/fae33cdacda6852a7628c206f9cc3691-600'
									},
									{
										son_name: '休闲裤',
										imgurl: 'http://img.haodanku.com/28261afc8638e81810396e804be7bb4e-600'
									},
									{
										son_name: '哈伦裤',
										imgurl: 'http://img.haodanku.com/87ee360c875520d8df6d1fc326fceebf-600'
									},
									{
										son_name: '工装裤',
										imgurl: 'http://img.haodanku.com/de243065fe1031a3b673911ca3f5d554-600'
									},
									{
										son_name: '沙滩裤',
										imgurl: 'http://img.haodanku.com/890d879df68a83fc884af2ac40590f9f-600'
									},
									{
										son_name: '牛仔裤',
										imgurl: 'http://img.haodanku.com/f7aed5f42224b34532e92e57d667fb35-600'
									},
									{
										son_name: '短裤',
										imgurl: 'http://img.haodanku.com/957ec585e9c7af6b740b28e03e94484d-600'
									},
									{
										son_name: '西裤',
										imgurl: 'http://img.haodanku.com/883c7c0972e09d96ee7ba2df0990de48-600'
									},
									{
										son_name: '运动裤',
										imgurl: 'http://img.haodanku.com/11f8a9fe9f1c81a720870c65c3d95347-600'
									}
								]
							},
							{
								next_name: '针织衫',
								info: [{
										son_name: '套头',
										imgurl: 'http://img.haodanku.com/fad26efeddcbb8b28b31365f0e3ebdcf-600'
									},
									{
										son_name: '开衫',
										imgurl: 'http://img.haodanku.com/9a1297fddeb4ec33d63e1a353975fef9-600'
									},
									{
										son_name: '毛衣',
										imgurl: 'http://img.haodanku.com/4f488cd57da11a19dc5dc0f6a1d48eff-600'
									},
									{
										son_name: '羊毛衫',
										imgurl: 'http://img.haodanku.com/469ad3c34a07e7296bd52a6e49e3e7cc-600'
									},
									{
										son_name: '针织衫',
										imgurl: 'http://img.haodanku.com/79967f9058dd6b94dbc43714b652b090-600'
									},
									{
										son_name: '高领',
										imgurl: 'http://img.haodanku.com/0edca60c499cd86fe5d9ad2afb85e9c7-600'
									}
								]
							}
						]
					},
					{
						cid: 11,
						main_name: '内衣',
						data: [{
								next_name: '内衣',
								info: [{
										son_name: '保暖背心',
										imgurl: 'http://img.haodanku.com/e093297d8e26e30a3d5aac4a613ec4f3-600'
									},
									{
										son_name: '内衣套装',
										imgurl: 'http://img.haodanku.com/8f0f258453126d0eba37806e99d61f3c-600'
									},
									{
										son_name: '内裤女',
										imgurl: 'http://img.haodanku.com/8fb1969ae13d3854a019176068cb19fd-600'
									},
									{
										son_name: '内裤男',
										imgurl: 'http://img.haodanku.com/bd263e2ae6f0b6d55f58aa45e98f8d5a-600'
									},
									{
										son_name: '打底裤',
										imgurl: 'http://img.haodanku.com/48ecf13aa01d4df986d08f807f5bde8a-600'
									},
									{
										son_name: '文胸',
										imgurl: 'http://img.haodanku.com/5515534e4b57c437ff99823194af9efa-600'
									},
									{
										son_name: '塑身衣',
										imgurl: 'http://img.haodanku.com/d4e8eb149c618aa91d74e2ea98c54bab-600'
									},
									{
										son_name: '秋裤',
										imgurl: 'http://img.haodanku.com/df2ce30731a1f5328163f02315cbcdf6-600'
									}
								]
							},
							{
								next_name: '睡衣',
								info: [{
										son_name: '保暖睡衣',
										imgurl: 'http://img.haodanku.com/4d20bb96196142cd1789ffb9608e0e6c-600'
									},
									{
										son_name: '卡通睡衣',
										imgurl: 'http://img.haodanku.com/8972e51a91b6564fdad5efd05dac9f8a-600'
									},
									{
										son_name: '夹棉睡衣',
										imgurl: 'http://img.haodanku.com/b2c95bf4420cd9ae947a715da3713625-600'
									},
									{
										son_name: '女士睡衣',
										imgurl: 'http://img.haodanku.com/9e1cbba89c247ed6df0a0db7267bf964-600'
									},
									{
										son_name: '情侣睡衣',
										imgurl: 'http://img.haodanku.com/8b005a55b45644839498aa75f4ee3e56-600'
									},
									{
										son_name: '珊瑚绒',
										imgurl: 'http://img.haodanku.com/079c725c7efe42cd8a005ea47542d939-600'
									},
									{
										son_name: '男士睡衣',
										imgurl: 'http://img.haodanku.com/c34cc2e6422f7493edac577c4b403146-600'
									},
									{
										son_name: '睡袍',
										imgurl: 'http://img.haodanku.com/7e5f5f97ab66f4d6c7b9fcf972e30e55-600'
									},
									{
										son_name: '睡裙',
										imgurl: 'http://img.haodanku.com/9348b8b75ef49b82e6cca3ef9d05bcf8-600'
									},
									{
										son_name: '短袖睡衣',
										imgurl: 'http://img.haodanku.com/360d6c896363e0158be255278923a900-600'
									},
									{
										son_name: '长袖睡衣',
										imgurl: 'http://img.haodanku.com/3c2a90a42396671688c5aaed75ee2b2a-600'
									}
								]
							},
							{
								next_name: '袜子',
								info: [{
										son_name: '女袜',
										imgurl: 'http://img.haodanku.com/5721a24e445fcd88ae8afa4b31432a0f-600'
									},
									{
										son_name: '棉袜',
										imgurl: 'http://img.haodanku.com/b08b0ad37e100ddef347205270bbc260-600'
									},
									{
										son_name: '男袜',
										imgurl: 'http://img.haodanku.com/1866e702f375974facb979e2a87e95df-600'
									},
									{
										son_name: '裤袜',
										imgurl: 'http://img.haodanku.com/95a4cd9d01b7ca5c544afeb5a35969f9-600'
									},
									{
										son_name: '长筒袜',
										imgurl: 'http://img.haodanku.com/edf2befbb6c1abd0fa67fbee47cb0ae9-600'
									}
								]
							}
						]
					},
					{
						cid: 12,
						main_name: '美妆',
						data: [{
								next_name: '个人护理',
								info: [{
										son_name: '头发造型',
										imgurl: 'http://img.haodanku.com/d07c4bf91101a3b6a0a8a340bf068ac4-600'
									},
									{
										son_name: '护发素',
										imgurl: 'http://img.haodanku.com/a9e63479e7edc40aedde33cca15f03f7-600'
									},
									{
										son_name: '染发膏',
										imgurl: 'http://img.haodanku.com/1b8e6a4cd2961a1d468557b4d766eca6-600'
									},
									{
										son_name: '沐浴露',
										imgurl: 'http://img.haodanku.com/14bfdb8fc38493aa985d310d390aad19-600'
									},
									{
										son_name: '洗发水',
										imgurl: 'http://img.haodanku.com/162652a65fc931cf7aba34436a5882cd-600'
									},
									{
										son_name: '清洁剂',
										imgurl: 'http://img.haodanku.com/cc34507e016b01cc6005d028b55aa1cc-600'
									},
									{
										son_name: '刷子',
										imgurl: 'http://img.haodanku.com/529884a59eb3a2ed7cad27cc215f042c-600'
									},
									{
										son_name: '私处护理',
										imgurl: 'http://img.haodanku.com/28ca7a798ebef550b71616c0158f5a3f-600'
									},
									{
										son_name: '足浴',
										imgurl: 'http://img.haodanku.com/14291c443185a267818e2d434d8a3342-600'
									},
									{
										son_name: '足贴',
										imgurl: 'http://img.haodanku.com/cb2b79782adeff70c42b6a77d9ee7fbc-600'
									},
									{
										son_name: '香薰',
										imgurl: 'http://img.haodanku.com/d4e749698878f0318254e2844a2ab4b1-600'
									}
								]
							},
							{
								next_name: '美妆',
								info: [{
										son_name: 'BB霜',
										imgurl: 'http://img.haodanku.com/489dc81a627234b735e508ea3c5a30d6-600'
									},
									{
										son_name: '乳液',
										imgurl: 'http://img.haodanku.com/2da72ef1545f4e6e729daca73469daa7-600'
									},
									{
										son_name: '卸妆',
										imgurl: 'http://img.haodanku.com/11f4c31e57040ca6578e395764685f9d-600'
									},
									{
										son_name: '唇膏',
										imgurl: 'http://img.haodanku.com/73dce1ba7e1e6c2f087a82e6e2daaf0f-600'
									},
									{
										son_name: '彩妆品盘',
										imgurl: 'http://img.haodanku.com/885defc8e1c9263ff87a2bc661118c63-600'
									},
									{
										son_name: '洁面仪',
										imgurl: 'http://img.haodanku.com/e7a50ccfa072697de187a8257a63938e-600'
									},
									{
										son_name: '洗面奶',
										imgurl: 'http://img.haodanku.com/0390ae3565930d395244524603d38605-600'
									},
									{
										son_name: '爽肤水',
										imgurl: 'http://img.haodanku.com/5dc1013d4ed73422d9963e03d24ca8f2-600'
									},
									{
										son_name: '男士护理',
										imgurl: 'http://img.haodanku.com/0821d27e39fffa2bc6cb2372800d33b3-600'
									},
									{
										son_name: '眼线',
										imgurl: 'http://img.haodanku.com/4216c4cdc29f8e9bce9722bf2329f4d4-600'
									},
									{
										son_name: '眼霜',
										imgurl: 'http://img.haodanku.com/9bcc8b7e61d0958a4cf24efa92d8d7d9-600'
									},
									{
										son_name: '睫毛膏',
										imgurl: 'http://img.haodanku.com/917ca505a2916d4308258c1df00aa6bc-600'
									},
									{
										son_name: '粉底液',
										imgurl: 'http://img.haodanku.com/b8c50f1f046846de3a22b68b681799d0-600'
									},
									{
										son_name: '精华',
										imgurl: 'http://img.haodanku.com/c236b1acfcf8aeaffef5b01ab73e5608-600'
									},
									{
										son_name: '精油',
										imgurl: 'http://img.haodanku.com/c57b417129f661124f5b7f863fc2a5ed-600'
									},
									{
										son_name: '纤体',
										imgurl: 'http://img.haodanku.com/900cbfe080fcea90a276c9b0367252ef-600'
									},
									{
										son_name: '脱毛',
										imgurl: 'http://img.haodanku.com/bd495c3062c688f6c1a00a6f02a57655-600'
									},
									{
										son_name: '腮红',
										imgurl: 'http://img.haodanku.com/1305d219f6095577b2d4930531a1b3ee-600'
									},
									{
										son_name: '身体护理',
										imgurl: 'http://img.haodanku.com/31610649476cc77a474959eb39f1b929-600'
									},
									{
										son_name: '防晒',
										imgurl: 'http://img.haodanku.com/1d23fffba3e6ed348369ecf8fdab6659-600'
									},
									{
										son_name: '隔离霜',
										imgurl: 'http://img.haodanku.com/76c233634b9d2eb0ba2353d1c834a070-600'
									},
									{
										son_name: '面膜',
										imgurl: 'http://img.haodanku.com/f9ddb9d89e9bfd8312056b02c4081bcd-600'
									},
									{
										son_name: '面霜',
										imgurl: 'http://img.haodanku.com/e57cb97f45eacb673b10d4179ce54079-600'
									},
									{
										son_name: '香水',
										imgurl: 'http://img.haodanku.com/04e330d7bfe0dca66883d8a52286552c-600'
									}
								]
							},
							{
								next_name: '营养保健',
								info: [{
										son_name: 'B族维生素',
										imgurl: 'http://img.haodanku.com/1f59496fee3c1610426c711c3d1d4ec4-600'
									},
									{
										son_name: '大豆异黄酮',
										imgurl: 'http://img.haodanku.com/12c9c22137b4bcba282fd3df6f0fa01e-600'
									},
									{
										son_name: '左旋',
										imgurl: 'http://img.haodanku.com/dd4e18688356aa319c81ea718f50a447-600'
									},
									{
										son_name: '氨基葡萄糖',
										imgurl: 'http://img.haodanku.com/81b23d4f172a49b845757548992c9c86-600'
									},
									{
										son_name: '维生素',
										imgurl: 'http://img.haodanku.com/affa0845d378957e98cc2362b2c8fe78-600'
									},
									{
										son_name: '维生素C',
										imgurl: 'http://img.haodanku.com/815ca9b2b1af15cefe5254c15656a8ab-600'
									},
									{
										son_name: '胶原蛋白',
										imgurl: 'http://img.haodanku.com/1e22d5f3d6e3066d103cbb81d56aa413-600'
									},
									{
										son_name: '葡萄籽',
										imgurl: 'http://img.haodanku.com/d2d1641b79898540be56943a26e9fbf1-600'
									},
									{
										son_name: '螺旋藻',
										imgurl: 'http://img.haodanku.com/5e0f7000c10daed73047db311e9140bf-600'
									},
									{
										son_name: '褪黑素',
										imgurl: 'http://img.haodanku.com/69210ef9179d6f60456d8c35d953ef83-600'
									},
									{
										son_name: '软骨素',
										imgurl: 'http://img.haodanku.com/8598d5b6d46da97fc2e2bacc0ab6701a-600'
									},
									{
										son_name: '辅酶Q10',
										imgurl: 'http://img.haodanku.com/6d3244a7bc47008fec9c5776db5a4431-600'
									},
									{
										son_name: '酵素',
										imgurl: 'http://img.haodanku.com/6607fec9d51f603dd680aa56c8d367b7-600'
									},
									{
										son_name: 'B族维生素',
										imgurl: 'http://img.haodanku.com/1f59496fee3c1610426c711c3d1d4ec4-600'
									},
									{
										son_name: 'DHA',
										imgurl: 'http://img.haodanku.com/a9146cfb07408e86776b0f8e720302c8-600'
									},
									{
										son_name: '大豆异黄酮',
										imgurl: 'http://img.haodanku.com/12c9c22137b4bcba282fd3df6f0fa01e-600'
									},
									{
										son_name: '左旋',
										imgurl: 'http://img.haodanku.com/dd4e18688356aa319c81ea718f50a447-600'
									},
									{
										son_name: '月见草油',
										imgurl: 'http://img.haodanku.com/b7b3febf2ac9a51fc9ae956da2fa3de6-600'
									},
									{
										son_name: '氨基葡萄糖',
										imgurl: 'http://img.haodanku.com/81b23d4f172a49b845757548992c9c86-600'
									},
									{
										son_name: '玛咖',
										imgurl: 'http://img.haodanku.com/6eed576e355b970a83afafaa7e18ab1d-600'
									},
									{
										son_name: '益生菌',
										imgurl: 'http://img.haodanku.com/b12d21f28f7ec2bd4fd91bebe5ca9e63-600'
									},
									{
										son_name: '维生素',
										imgurl: 'http://img.haodanku.com/affa0845d378957e98cc2362b2c8fe78-600'
									},
									{
										son_name: '维生素C',
										imgurl: 'http://img.haodanku.com/815ca9b2b1af15cefe5254c15656a8ab-600'
									},
									{
										son_name: '胶原蛋白',
										imgurl: 'http://img.haodanku.com/1e22d5f3d6e3066d103cbb81d56aa413-600'
									},
									{
										son_name: '葡萄籽',
										imgurl: 'http://img.haodanku.com/d2d1641b79898540be56943a26e9fbf1-600'
									},
									{
										son_name: '螺旋藻',
										imgurl: 'http://img.haodanku.com/5e0f7000c10daed73047db311e9140bf-600'
									},
									{
										son_name: '褪黑素',
										imgurl: 'http://img.haodanku.com/69210ef9179d6f60456d8c35d953ef83-600'
									},
									{
										son_name: '软骨素',
										imgurl: 'http://img.haodanku.com/8598d5b6d46da97fc2e2bacc0ab6701a-600'
									},
									{
										son_name: '辅酶Q10',
										imgurl: 'http://img.haodanku.com/6d3244a7bc47008fec9c5776db5a4431-600'
									},
									{
										son_name: '酵素',
										imgurl: 'http://img.haodanku.com/6607fec9d51f603dd680aa56c8d367b7-600'
									},
									{
										son_name: '钙',
										imgurl: 'http://img.haodanku.com/98d655571845e533cbcbab620db00f6b-600'
									},
									{
										son_name: '鱼油',
										imgurl: 'http://img.haodanku.com/5b041d1a105e86d3c5c7f2e3c4ad713f-600'
									}
								]
							}
						]
					},
					{
						cid: 13,
						main_name: '配饰',
						data: [{
								next_name: '帽子',
								info: [{
										son_name: '套头帽',
										imgurl: 'http://img.haodanku.com/125f6e478053e17b2c0ba682bd0a5a39-600'
									},
									{
										son_name: '毛线帽',
										imgurl: 'http://img.haodanku.com/e1187ddf4721580e67efb50dac464dab-600'
									},
									{
										son_name: '渔夫帽',
										imgurl: 'http://img.haodanku.com/b3828f4435ede4fa3463e55dde914b40-600'
									},
									{
										son_name: '爵士帽',
										imgurl: 'http://img.haodanku.com/980c97dd05f40ed47ac16a79612dd167-600'
									},
									{
										son_name: '盆帽',
										imgurl: 'http://img.haodanku.com/676817946cacdbe83c377d9cc9860aa9-600'
									},
									{
										son_name: '礼帽',
										imgurl: 'http://img.haodanku.com/cc142d12454557ef22b4ceb3ce4fe6ec-600'
									},
									{
										son_name: '贝雷帽',
										imgurl: 'http://img.haodanku.com/6d5eebc640a964a4b55fb03046a2f8fb-600'
									},
									{
										son_name: '针织帽',
										imgurl: 'http://img.haodanku.com/0b376d73ab661bbab0c83d8aefc50aca-600'
									},
									{
										son_name: '鸭舌帽',
										imgurl: 'http://img.haodanku.com/1de98e064ef1e8dd92d4e95eda311105-600'
									}
								]
							},
							{
								next_name: '配饰',
								info: [{
										son_name: '半指手套',
										imgurl: 'http://img.haodanku.com/2439ed86402cb2d8eff39995ef1fc4e4-600'
									},
									{
										son_name: '手套',
										imgurl: 'http://img.haodanku.com/e5183b8d3236027d4c0cd2fe923f7d34-600'
									},
									{
										son_name: '真皮腰带',
										imgurl: 'http://img.haodanku.com/cd8ad3794ee3fbb1a8c8bce8f88f7ef1-600'
									},
									{
										son_name: '腰带',
										imgurl: 'http://img.haodanku.com/7586c7f14be6334d52ea6f862048ce3a-600'
									},
									{
										son_name: '触屏手套',
										imgurl: 'http://img.haodanku.com/a69d879b523d78d0203fe4879109486f-600'
									},
									{
										son_name: '雨伞',
										imgurl: 'http://img.haodanku.com/eb9cb749ec8237a84227614d356bfd0f-600'
									}
								]
							},
							{
								next_name: '围巾',
								info: [{
										son_name: '披肩围巾',
										imgurl: 'http://img.haodanku.com/e7a8efb7077e6e0e71f038582f7a6ba8-600'
									},
									{
										son_name: '棉麻围巾',
										imgurl: 'http://img.haodanku.com/ac5962ed20036929d9d533e467a85fd0-600'
									},
									{
										son_name: '真丝围巾',
										imgurl: 'http://img.haodanku.com/c371383e6e2f9b234f30d32c0a1295ef-600'
									},
									{
										son_name: '羊毛围巾',
										imgurl: 'http://img.haodanku.com/2959aea355069c58f07a5bd4312c0750-600'
									},
									{
										son_name: '羊绒围巾',
										imgurl: 'http://img.haodanku.com/9870a6e83a4e97ce9f8b8d2bf2fe057e-600'
									}
								]
							}
						]
					},
					{
						cid: 14,
						main_name: '鞋品',
						data: [{
								next_name: '男鞋',
								info: [{
										son_name: '乐福鞋',
										imgurl: 'http://img.haodanku.com/9843bf86c735fca4495b93cbb9371b56-600'
									},
									{
										son_name: '休闲鞋',
										imgurl: 'http://img.haodanku.com/52ac4c99b933215aa4767dfbcf1ee459-600'
									},
									{
										son_name: '凉鞋',
										imgurl: 'http://img.haodanku.com/6f80f7d856fef73155d88ac0ec633d93-600'
									},
									{
										son_name: '增高鞋',
										imgurl: 'http://img.haodanku.com/5dfbd1e8047e1fa4bc9424fc44a81037-600'
									},
									{
										son_name: '帆布鞋',
										imgurl: 'http://img.haodanku.com/b1ec5218812aac9249071123cc9ff37d-600'
									},
									{
										son_name: '板鞋',
										imgurl: 'http://img.haodanku.com/c0ea8e1a9a0e9c486c2f3b571b495395-600'
									},
									{
										son_name: '网布鞋',
										imgurl: 'http://img.haodanku.com/acaf3517b2b374e568e512ea2c1c0334-600'
									},
									{
										son_name: '豆豆鞋',
										imgurl: 'http://img.haodanku.com/6f74d2cd0dc9de9ea1b746ab78ba6b66-600'
									},
									{
										son_name: '运动鞋',
										imgurl: 'http://img.haodanku.com/7b3bc2187dfeaf64dbb61ad6d3eb358f-600'
									}
								]
							},
							{
								next_name: '女鞋',
								info: [{
										son_name: '中跟鞋',
										imgurl: 'http://img.haodanku.com/5a52d7f0375aadd03558aab5a2489a81-600'
									},
									{
										son_name: '乐福鞋',
										imgurl: 'http://img.haodanku.com/8ebb992fc125df908039e1468b634c1f-600'
									},
									{
										son_name: '低跟鞋',
										imgurl: 'http://img.haodanku.com/19c7f3e00da194115690d71b5b0f6691-600'
									},
									{
										son_name: '妈妈鞋',
										imgurl: 'http://img.haodanku.com/6056eae45f0a96110f028f5f145a7c57-600'
									},
									{
										son_name: '小白鞋',
										imgurl: 'http://img.haodanku.com/c8bdc977c2f8b484f7066e82f9019417-600'
									},
									{
										son_name: '帆布鞋',
										imgurl: 'http://img.haodanku.com/70841a66d31d46050b053a7a559aad5c-600'
									},
									{
										son_name: '平底凉鞋',
										imgurl: 'http://img.haodanku.com/5c245c0d40166fad781505b47e952b81-600'
									},
									{
										son_name: '平底鞋',
										imgurl: 'http://img.haodanku.com/8773b3b2620fbbc9d33cee40cbeff145-600'
									},
									{
										son_name: '松糕厚底',
										imgurl: 'http://img.haodanku.com/f8eee922c6d05a17e9bee9dcda4811ac-600'
									},
									{
										son_name: '猫跟鞋',
										imgurl: 'http://img.haodanku.com/aac30a76edc144585e38c0a5a3560bcc-600'
									},
									{
										son_name: '玛丽珍鞋',
										imgurl: 'http://img.haodanku.com/b010a4fdd9bb85af6ca67c916c317929-600'
									},
									{
										son_name: '豆豆鞋',
										imgurl: 'http://img.haodanku.com/32f1673e6784389d2c9aa793c7b2abbe-600'
									},
									{
										son_name: '运动鞋',
										imgurl: 'http://img.haodanku.com/9449c2e63a06f058a48f788c82591d00-600'
									},
									{
										son_name: '高跟鞋',
										imgurl: 'http://img.haodanku.com/0ee8f1f3483c3faa69f5ef1f129cfac5-600'
									}
								]
							}
						]
					},


				],
				categoryId: 1

			}
		},
		methods: {
			// 分类切换显示
			showCategory(item) {
				this.categoryId = item.cid
				console.log(item);
			},
			scroll(){
				
			},
			upper(){
				
			},
			lower(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.category {
	
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.56);
		background: linear-gradient(0deg, #FFF 91.87%, rgba(255, 255, 255, 0.65) 99.6%);
		backdrop-filter: blur(5.5px);
		margin: 0 auto;
		display: flex;

		.scroll-Y {
			height: 613px;
		}

		&_left {
			width: 192rpx;
			height: 100%;
			background: rgba(242, 244, 247, 0.50);



			.row {
				text-align: center;
				height: 88rpx;
				line-height: 88rpx;
				position: relative;
				color: #6D746B;
				font-family: PingFang SC;
				font-size: 24rpx;
				font-weight: 400;
			}

			.active {

				border-radius: 0 0px 0px 24rpx;
				background: #FFF;
				color: #293226;
				font-size: 24rpx;
			}

			.active::after {
				content: "";
				display: block;
				width: 8rpx;
				height: 30rpx;
				background: #0F1E0A;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}

		&_right {
			width: calc(100% - 192rpx);
			border-radius: 12px;
			border: 1px solid rgba(255, 255, 255, 0.56);
			background: linear-gradient(0deg, #FFF 91.87%, rgba(255, 255, 255, 0.65) 99.6%);
			backdrop-filter: blur(5.5px);

			.name {
				color: #0F1E0A;
				font-family: PingFang SC;
				font-size: 24rpx;
				font-weight: 400;
				padding: 22rpx 0 16rpx 24rpx;
			}

			.product {
				display: flex;
				flex-wrap: wrap;
				padding-left: 24rpx;
				.item {
					width: calc(100% / 3);
					
					.image {
						width: 148rpx;
						height: 196rpx;
					}

					.title {
						color: #000;
						text-align: center;
						font-family: PingFang SC;
						font-size: 20rpx;
					}
				}
			}
		}
	}
</style>