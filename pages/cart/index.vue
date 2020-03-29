<template>
	<view>
		<view class="title">
			<view class="title-left"><text>租贷</text></view>
			<view class="title-right"><text>洗涤</text></view>
		</view>

		<view v-if="rentDatas.length != 0">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y-3">
				<view class="contain">
					<view class="contain-in">
						<view class="contain-title">
							<view class="title-in-center"><text>购物车</text></view>
							<view class="title-in-right" v-if="show" @click="change">
								<text>{{ guan }}</text>
							</view>
							<view class="title-in-right" v-else @click="change">
								<text>{{ finish }}</text>
							</view>
						</view>
						<view class="contain-list">
							<view class="contain-in-detail">
								<uni-swipe-action>
									<uni-swipe-action-item :options="options" @click="onClick" @change="open" style="z-index: 100;">
										<view v-for="(item, index) in rentDatas" :key="index" class="sub-item">
											<view class="checkBox">
												<!-- <view class="icon-selector" :class="{ 'selector-active': checked }" @click="selectItem"><image src="http://taotao111.test.upcdn.net/shopping_trolly_selected.png" alt="" mode="widthFix"/></view> -->
												<view class="icon-selector" @click="activeImg(item, index)">
													<image :src="item.state ? active : path" alt="" mode="widthFix" style="height: auto;" />
												</view>
											</view>

											<view class="sub-item-img"><image :src="item.image" :key="item.image" mode="widthFix" style="height: auto;" /></view>
											<view class="sub-item-content">
												<view class="item-title">
													<text>{{ item.title }}</text>
												</view>
												<view class="item-time">{{ item.time }}</view>
												<view class="item-deposit">租金：{{ item.deposit }}元</view>
												<view class="item-bottom">
													<view class="item-price">￥{{ item.price }}</view>
													<view class="number">
														<view class="jian" @click="decre(item)"><text>-</text></view>
														<view class="shu"><input type="number" :value="item.number" /></view>
														<view class="jia" @click="plus(item)"><text>+</text></view>
													</view>
												</view>
											</view>
										</view>
									</uni-swipe-action-item>
								</uni-swipe-action>

								<view class="all">
									<view class="all-checkBox" @click="allSelect">
										<view class="icon-selector"><image :src="all ? active : path" alt="" mode="widthFix" /></view>
										<text>全选</text>
									</view>
									<view class="allPrice" v-if="show">
										合计：
										<text>￥{{ total }}</text>
									</view>
									<view class="full" v-if="show">结算</view>
									<view class="full red" v-if="!show">删除</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view v-else>
			<view class="body">
				<view class="body-in">
					<view class="body-in-img"><image src="http://taotao111.test.upcdn.net/shopping_trolly_empty.png" mode="widthFix"></image></view>
					<view class="body-in-title"><text>购物车没有商品哦~</text></view>
					<view class="body-in-button" @tap="goHome"><button>去逛逛</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue';
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue';
export default {
	components: {
		uniSwipeAction,
		uniSwipeActionItem
	},
	data() {
		return {
			options: [
				{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			all: false,
			zong: [],
			scrollTop: 0,
			number: 0,
			show: true,
			guan: '管理',
			finish: '完成',
			ins: -1,
			active: 'http://taotao111.test.upcdn.net/shopping_trolly_selected.png',
			path: 'http://taotao111.test.upcdn.net/shopping_empty_xuanze.png',
			rentData: [
				{
					number: 1,
					image: 'http://taotao111.test.upcdn.net/goods.png',
					title: '[洗涤]保暖棉被租用一床1.5X2.0两斤重 租半年',
					time: '一学期',
					deposit: '押金：50元',
					price: 36.0
				},
				{
					number: 1,
					image: 'http://taotao111.test.upcdn.net/goods.png',
					title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					time: '一学期',
					deposit: '押金：50元',
					price: 36.0
				},
				{
					number: 1,
					image: 'http://taotao111.test.upcdn.net/goods.png',
					title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					time: '一学期',
					deposit: '押金：50元',
					price: 36.0
				},
				{
					number: 1,
					image: 'http://taotao111.test.upcdn.net/goods.png',
					title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					time: '一学期',
					deposit: '押金：50元',
					price: 36.0
				},
				{
					number: 1,
					image: 'http://taotao111.test.upcdn.net/goods.png',
					title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					time: '一学期',
					deposit: '押金：50元',
					price: 36.0
				},
				{
					number: 1,
					image: 'http://taotao111.test.upcdn.net/goods.png',
					title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					time: '一学期',
					deposit: '押金：50元',
					price: 36.0
				},
				{
					number: 1,
					image: 'http://taotao111.test.upcdn.net/goods.png',
					title: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					time: '一学期',
					deposit: '押金：50元',
					price: 36.0
				},
				{ number: 1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit: '押金：50元', price: 36.0 }
			]
		};
	},
	onShow() {
		let data = this.rentDatas;
		for (let i = 0; i < this.rentDatas.length; i++) {
			this.rentDatas[i]['state'] = false;
			this.rentDatas[i]['id'] = i;
		}
		console.log(this.rentDatas);
	},
	computed: {
		total() {
			let a = 0;
			let zong = this.zong;
			for (let i = 0; i < zong.length; i++) {
				a += zong[i].price * zong[i].number;
			}
			console.log(zong);
			return a;
		},
		rentDatas() {
			return this.$store.state.car.car;
		}
	},
	methods: {
		onClick(e) {
			console.log('当前点击的是第' + e.index + '个按钮，点击内容是' + e.content.text);
		},
		open(open) {
			console.log('当前开启状态：' + open);
		},
		activeImg(value, key) {
			if (value.state == false) {
				this.rentDatas[key]['state'] = true;
				this.zong.push(value);
			} else if (value.state == true) {
				this.rentDatas[key]['state'] = false;
				let zong = this.zong;
				let cid = value.id;
				for (let i = 0; i < zong.length; i++) {
					if (zong[i].id == cid) {
						console.log(zong);
						zong.splice(i, 1);
					}
				}
			}
			console.log(this.rentDatas.length, this.zong.length);
			if (this.rentDatas.length == this.zong.length) {
				this.all = true;
			} else {
				this.all = false;
			}
		},
		plus(value) {
			if (value.state == false) {
				value.number = Number(value.number) + 1;
				this.rentDatas.number = value.number;
			} else if (value.state == true) {
				value.number = Number(value.number) + 1;
				this.rentDatas.number = value.number;
				let zong = this.zong;
				let cid = value.id;
				let _this = this;
				for (let i = 0; i < zong.length; i++) {
					if (zong[i].id == cid) {
						Number(_this.zong[i].number) + 1;
					}
				}
			}
		},
		decre(value) {
			if (value.state == false) {
				if (value.number <= 1) {
					uni.showToast({
						icon: 'none',
						title: '不能小于1'
					});
					return false;
				} else if (value.number >= 1) {
					value.number = Number(value.number) - 1;
					this.rentDatas.number = value.number;
				}
			} else if (value.state == true) {
				if (value.number <= 1) {
					uni.showToast({
						icon: 'none',
						title: '不能小于1'
					});
					return false;
				}
				value.number = Number(value.number) - 1;
				this.rentDatas.number = value.number;
				let zong = this.zong;
				let cid = value.id;
				let _this = this;
				for (let i = 0; i < zong.length; i++) {
					if (zong[i].id == cid) {
						let num = Number(_this.zong[i].number);
						if (num <= 1) {
							uni.showToast({
								icon: 'none',
								title: '最少为一件哦'
							});
							return false;
						} else if (num >= 1) {
							Number(_this.zong[i].number) - 1;
						}
					}
				}
			}
		},
		allSelect() {
			let _this = this;
			let rentDatas = this.rentDatas;
			if (this.all == true) {
				this.all = false;
				for (let i = 0; i < rentDatas.length; i++) {
					_this.rentDatas[i]['state'] = false;
				}
				this.zong = [];
			} else if (this.all == false) {
				this.all = true;
				for (let i = 0; i < rentDatas.length; i++) {
					_this.rentDatas[i]['state'] = true;
					this.zong.push(_this.rentDatas[i]);
				}
			}
		},
		change() {
			this.show = !this.show;
		},
		goHome() {
			uni.switchTab({
				url: '../index/index'
			});
		}
	}
};
</script>

<style>
page {
	background-color: #fff;
	overflow: hidden;
}
.red {
	background-color: red !important;
}
.scroll-Y-3 {
	height: 100%;
}
.title {
	display: flex;
	justify-content: center;
	height: 100upx;
	align-items: center;
	background-color: #fff !important;
	margin-top: 30upx;
	width: 100%;
}
.title-left {
	width: 275upx;
	height: 60upx;
	line-height: 60upx;
	font-size: 30upx;
	text-align: center;
	background-color: #0daafb;
	color: #fff;
	border-radius: 10upx 0 0 10upx;
}
.title-right {
	width: 275upx;
	height: 60upx;
	line-height: 60upx;
	font-size: 30upx;
	text-align: center;
	color: #0daafb;
	background-color: #fff;
	border: 1px solid #0daafb;
	border-radius: 0upx 10upx 10upx 0upx;
}
.body {
	display: flex;
	align-items: center;
	justify-content: center;
}
.body-in-img {
	margin-top: 100upx;
	width: 292upx;
	height: 277upx;
}
.body-in-title {
	color: #999;
	font-size: 28upx;
	margin: 20upx 0;
	text-align: center;
}
.body-in-button button {
	width: 190upx;
	height: 50upx;
	line-height: 50upx;
	color: #fff;
	background-color: #0daafb;
	font-size: 30upx;
}
.contain {
	width: 100%;
	border-top: 4upx solid #eee;
	padding-top: 30upx;
}
.contain-in {
	width: 92%;
	margin: 0 auto;
}
.contain-in-detail {
	padding-bottom: 100upx;
}
.contain-title {
	display: flex;
	align-items: center;
}
.title-in-center {
	color: #333;
	font-size: 36upx;
	width: 60%;
	text-align: right;
}
.title-in-right {
	color: #666;
	font-size: 30upx;
	width: 40%;
	text-align: right;
}
.sub-item-content {
	margin-left: 30upx;
}
.sub-item {
	display: flex;
	margin-top: 30upx;
	margin-left: 30upx;
	align-items: center;
}

.sub-item-img {
	width: 170upx;
	height: 150upx;
}
.item-title {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 30upx;
	width: 380upx;
	/* height: 28upx; */
}
.item-time {
	font-size: 20upx;
	margin-bottom: 10upx;
}
.item-deposit {
	font-size: 20upx;
	color: #f37200;
	margin-bottom: 10upx;
}
.item-price {
	font-size: 32upx;
	color: #f14645;
	margin-bottom: 10upx;
}
.item-bottom {
	display: flex;
	justify-content: space-between;
}
.item-price-icon {
	width: 40upx;
	height: 40upx;
}
.icon-selector {
	width: 40upx;
	height: 40upx;
	align-items: center;
	margin-right: 40upx;
}
.all {
	padding: 30upx;
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100upx;
	background-color: #fff;
	justify-content: space-between;
}
.all-checkBox {
	display: flex;
	font-size: 30upx;
	color: #666;
}
.allPrice text {
	color: #ee0000 !important;
	font-size: 36upx;
}
.full {
	width: 200upx;
	height: 100upx;
	line-height: 100upx;
	text-align: center;
	background-color: #0daafb;
	color: #fff;
	font-size: 30upx;
	z-index: 10;
}
.number {
	display: flex;
	font-size: 30upx;
	align-items: center;
}
.number .shu {
	width: 50upx;
	margin-left: 20upx;
	background-color: #ebeef5;
	text-align: center;
	margin-right: 20upx;
	/* z-index: -10; */
}
</style>
