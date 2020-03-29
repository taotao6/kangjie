<template>
	<view class="content">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view id="tab-menu">
				<div class="menu-list">
					<div
						class="menu-list-item scroll-view-item"
						:class="{ active: index === currentIndex }"
						v-for="(item, index) in categories"
						:key="index"
						@click="itemClick(index)"
					>
						{{ item }}
					</div>
				</div>
			</view>
		</scroll-view>

		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y-2" show-scrollbar="false">
			<view v-if="showSubcategory" class="subcategories">
				<view v-for="(item, index) in showSubcategory" :key="index" class="sub-item">
					<view class="sub-item-img"><image :src="item.image" :key="item.image" mode="widthFix" style="height: auto;" /></view>
					<view class="sub-item-content">
						<view class="item-title">
							<text>{{ item.title }}</text>
						</view>
						<view class="item-time">{{ item.time }}</view>
						<view class="item-deposit">押金：{{ item.deposit }}元</view>
						<view class="item-bottom">
							<view class="item-price">￥{{ item.price }}</view>
							<view class="item-price-icon" @click="showDetail(item)">
								<image src="http://taotao111.test.upcdn.net/class_join_gwc.png" mode="widthFix" style="height: auto;"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<s-popup custom-class="demo-popup" position="bottom" v-model="visible">
				<view class="goods-wrap">
					<view class="good-top">
						<view class="good-top-left"><image src="http://taotao111.test.upcdn.net/goods.png" style="height: auto;" mode="widthFix"></image></view>
						<view class="good-top-right">
							<view class="price">￥{{selectGood.price}}</view>
							<view class="number">库存（1000）件</view>
							<view class="time">已选：一学期</view>
						</view>
						<view class="close-Icon" @click="closeMark">
							<image src="http://taotao111.test.upcdn.net/class_icon_tc.png" mode="widthFix" style="height: auto;"></image>
						</view>
					</view>
					<view class="good-center">
						<view class="good-center-top">周期</view>
						<view class="good-center-footer">
							<view class="footer-1" :class="{ active: index === currentGoodIndex }" v-for="(item1, index) in times" :key="index" @click="itemGoodClick(index)">
								{{ item1 }}
							</view>
						</view>
					</view>
					<view class="good-footer">
						<view class="good-footer-left"><text>数量</text></view>
						<view class="good-footer-right">
							<view class="number">
								<view class="jian" @click="decre"><text>-</text></view>
								<view class="shu"><input type="number" :value="number" /></view>
								<view class="jia" @click="plus"><text>+</text></view>
							</view>
						</view>
					</view>
					<view class="comfirm" @click="closeMark"><text>确定</text></view>
				</view>
			</s-popup>
		</scroll-view>

		<view v-if="showSubcategory == ''">
			<view class="no-goods">
				<image src="http://taotao111.test.upcdn.net/class_sp_empty.png" mode="" style="height: auto;"></image>
				<view class="no-goods-info"><text>目前没有商品哦~</text></view>
			</view>
		</view>

		<view @click="goCart">
			<image src="http://taotao111.test.upcdn.net/home_icon_gwcc.png"></image>
			 <dragball :x=80 :y=80 :image='img'></dragball>
			<!-- <movable-area class="movable">
				<movable-view class="cart" x="550rpx" y="1000rpx" direction="all"><image src="http://taotao111.test.upcdn.net/home_icon_gwcc.png"></image></movable-view>
			</movable-area> -->
		</view>
	</view>
</template>

<script>
import mixin from '@/common/mixin';
import sPopup from '@/components/s-popup/index.vue';
import dragball from "@/components/drag-ball/drag-ball.vue";
export default {
	components: {
		sPopup,
		dragball
	},
	onLoad() {
		console.log(this.rentData[this.currentIndex]);
	},

	data() {
		return {
			selectGood:{},//点击的商品信息
			img:'http://taotao111.test.upcdn.net/home_icon_gwcc.png',
			imgUrl: 'http://taotao111.test.upcdn.net/home_icon_gwcc.png',
			categories: ['全部', '棉被', '枕头', '床单', '被套'],
			currentIndex: 0,
			currentGoodIndex: 0,
			visible: false,
			number: 1,
			times: ['一学期', '一年'],
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			rentData: [
				[
					{id:1,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '[洗涤]保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit:50, price: 36.00 },
					{id:2,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit:50, price: 37.00},
					{id:3,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit:50, price: 38.00},
					{id:4,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit:50, price:39.00},
					{id:5,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit:50, price:46.00},
					{id:6,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit:50, price:56.00},
					{id:7,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit:50, price:66.00},
					{id:8,number:1, image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit: 50, price:76.0}
				],
				[],
				[],
				[],
				[]
			]
		};
	},
	computed: {
		showSubcategory() {
			return this.rentData[this.currentIndex];
		}
	},
	mixins: [mixin],
	onPullDownRefresh() {
		this.getStatisticsService();
		this.getIndexRumorList();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		delscroll() {
			plus.webview.currentWebview().setStyle({
				scrollIndicator: 'none'
			});
		},
		showDetail(item) {
			// console.log(item)
			this.selectGood = item
			this.visible = true;
		},
		itemClick(index) {
			this.currentIndex = index;
			// this.$emit('selectItem', index);
		},
		itemGoodClick(index) {
			this.currentGoodIndex = index;
			// this.$emit('selectItem', index);
		},
		selectItem(index) {
			this.currentIndex = index;
		},
		plus() {
			this.number++;
		},
		decre() {
			if (this.number > 0) {
				this.number--;
			}
		},
		closeMark() {
			const that = this
			let shopList = {
				id:that.selectGood.id,
				number:that.selectGood.number,
				image:that.selectGood.image,
				title:that.selectGood.title,
				time:that.selectGood.time,
				deposit:that.selectGood.deposit,
				price:that.selectGood.price
			}
			this.$store.commit('car/addCar',shopList)
			uni.showToast({
				title:'添加成功',
				icon:'none',
				duration:1500
			})
			this.visible = false;
		},
		goCart() {
			uni.navigateTo({
				url: '../cart/index'
			});
		}
	}
};
</script>

<style>
html,
body {
	background: #f7f7f7;
	height: 100vh;
	overflow-y: hidden;
}

.goods-wrap {
	background-color: #ffffff;
	border-radius: 20upx;
}
.close-Icon {
	width: 33upx;
	height: 33upx;
	margin-left: 250upx;
}
.movable {
	width: 100upx;
	height: 100upx;
	position: fixed;
	bottom: 120upx;
	right: 31upx;
}
.cart {
	width: 60upx;
	height: 60upx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background-color: #fff;
	padding: 20upx;
	box-shadow: 0 4upx 24upx 0 rgba(0, 0, 0, 0.1);
}
.cart image {
	width: 60upx;
	height: 60upx;
	object-fit: cover;
}
.content {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	display: flex;
}
#tab-menu {
	background-color: #f7f7f7;
	height: 100%;
	box-sizing: border-box;
}
.scroll-Y {
	height: 100vh;
	width: 200upx;
	position: fixed;
}
.scroll-Y-2 {
	height: 100vh;
	background-color: #fff;
	position: fixed;
	left: 200upx;
}
.menu-list-item {
	height: 100upx;
	line-height: 100upx;
	text-align: center;
	font-size: 30upx;
}
.menu-list-item.active {
	font-weight: 700;
	color: #0daafb;
	background-color: #fff;
	border-left: 4upx solid #0daafb;
}
.subcategories {
	background: #fff;
	/* padding: 20upx; */
	flex: 1;
	/* margin-bottom: 100upx; */
}
.no-goods {
	background: #fff;
	flex: 1;
	position: fixed;
	left: 200upx;
	height: 100vh;
	display: flex;
	/* align-items: center; */
	padding-top: 200upx;
	align-items: ;
	flex-direction: column;
	text-align: center;
}
.no-goods-info {
	margin-top: 20upx;
	color: #999;
	font-size: 32upx;
}
.sub-item-content {
	margin-left: 30upx;
}
.sub-item {
	display: flex;
	margin-top: 30upx;
	margin-left: 30upx;
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
	width: 308upx;
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

.good-top {
	display: flex;
	padding: 20upx;
	border-bottom: 1px solid #eee;
	background-color: #fff;
	border-radius: 20upx;
}
.good-top-left {
	width: 230upx;
	height: 210upx;
	overflow: hidden;
}
.good-top-left image {
	object-fit: cover;
}
.good-top-right {
	margin-left: 20upx;
}
.good-top-right .price {
	margin-top: 20upx;
	color: #f10000;
	font-size: 40upx;
	margin-bottom: 20upx;
}
.good-top-right .number {
	color: #999;
	font-size: 24upx;
	margin-bottom: 20upx;
}
.good-top-right .time {
	color: #999;
	font-size: 24upx;
}
.good-center {
	padding: 30upx 20upx 20upx 20upx;
	border-bottom: 1px solid #eee;
}
.good-center-top {
	font-size: 28upx;
	color: #333;
}
.good-center-footer {
	display: flex;
	margin-top: 20upx;
	padding-bottom: 30upx;
}

.footer-1 {
	border: none;
	border-radius: 40upx;
	padding: 10upx 50upx;
	margin-left: 30upx;
	background-color: #f5f5f5;
}
.footer-1.active {
	border: 1px solid #007aff;
	color: #007aff;
	border-radius: 40upx;
	background-color: #fff;
}

.good-footer {
	display: flex;
	justify-content: space-between;
	padding: 30upx 20upx;
	font-size: 28upx;
}
.good-footer-right .number {
	display: flex;
	font-size: 40upx;
	align-items: center;
}
.number .shu {
	width: 50upx;
	margin-left: 30upx;
	background-color: #ebeef5;
	text-align: center;
	margin-right: 30upx;
}
.comfirm {
	width: 100%;
	height: 97upx;
	background-color: #007aff;
	color: #fff;
	font-size: 32upx;
	line-height: 97upx;
	text-align: center;
}
</style>
