<template>
	<view>
		<view class="fixedHead">
			<tab-control :titles="titles" @itemClick="tabClick"></tab-control>
			<nav-control :navItems="navItems" @itemClick="navClick"></nav-control>
		</view>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
			<good-list :goodList="showGoodList"></good-list>
		</scroll-view>
	</view>
</template>

<script>
import TabControl from './childCompos/TabControl.vue';
import NavControl from './childCompos/NavControl.vue';
import GoodList from './childCompos/GoodList.vue';
export default {
	components: {
		TabControl,
		NavControl,
		GoodList
	},
	data() {
		return {
			TabCur:0,
			titles: ['自提', '配送'],
			navItems: ['全部', '待付款', '配送中', '租贷中', '已完成'],
			currentType: 'song',
			navType: 'all',
			scrollTop:0,
			// all:全部 pend:待付款 distri:配送中 rent:租贷中 finish:已完成
			goods: [
				{
					list: {
						all: [
							{
								type: '待付款',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									},
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							},
							{
								type: '配送中',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							},
							{
								type: '租贷中',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							},
							{
								type: '已完成',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									},
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							}
						],
						pend: [
							{
								type: '待付款',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									},
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							}
						],
						distri: [
							{
								type: '配送中',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							}
						],
						rent: [
							{
								type: '租贷中',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							}
						],
						finish: [
							{
								type: '已完成',
								orderNumber: 2203356240,
								info: [
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									},
									{
										image: 'http://taotao111.test.upcdn.net/goods.png',
										title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
										time: '一学期',
										deposit: '押金：50元',
										price: 36.0,
										number: 1
									}
								]
							}
						]
					}
				}
			]
		};
	},
	computed: {
		showGoodList() {
			return this.goods[0].list[this.navType];
		}
	},
	methods: {
		scroll(e){
			console.log(e)
		},
		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = 'song';
					break;
				case 1:
					this.currentType = 'ti';
					break;
			}
		},
		navClick(index) {
			this.TabCur = index;
			switch (index) {
				case 0:
					this.navType = 'all';
					break;
				case 1:
					this.navType = 'pend';
					break;
				case 2:
					this.navType = 'distri';
					break;
				case 3:
					this.navType = 'rent';
					break;
				case 4:
					this.navType = 'finish';
					break;
			}
		}
	}
};
</script>

<style scoped>
	html,body{
		overflow-y: hidden;
	}
	.scroll-Y::-webkit-scrollbar {
		display: none;
		width: 0 !important 
		}
	.fixedHead{
		width: 100%;
		position: fixed;
		/* top: 44px; */
		z-index: 100;
	}
	.scroll-Y{
		padding-top: 200upx;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		height: calc(100% - 200rpx);
	}
</style>
