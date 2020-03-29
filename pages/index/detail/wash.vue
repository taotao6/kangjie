<template>
	<view class="container">
		<view class="mySwiper">
			<view class="mySwiper-in">
				<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
					<swiper
						class="screen-swiper"
						:indicator-dots="false"
						:circular="true"
						:autoplay="true"
						interval="5000"
						duration="500"
						@change="change"
					>
						<swiper-item v-for="(item, index) in swiperList" :key="index">
							<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
							<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
						</swiper-item>
					</swiper>
					<view class="back" @click="back">
						<image src="http://taotao111.test.upcdn.net/shangp_nav.png" mode="widthFix"></image>
					</view>
				</uni-swiper-dot>
				<view class="desc">
					<view class="desc-in">
						<view class="desc-in-title">
							<text class="title-icon">{{ titleIcon }}</text>
							<text>{{ descTitle }}</text>
						</view>
						<view class="desc-in-tip">
							<view class="tip-left">
								<text>{{ tip }}</text>
							</view>
							<view class="tip-right" @click="open(0, 'center')"><text>更多须知>></text></view>
						</view>
						<view class="desc-in-price">
							<view class="price-left">
								<text class="price-before">￥36.</text>
								<text class="price-after">23</text>
								<text>元/月</text>
							</view>
							<view class="price-right"><text>已售:1285</text></view>
						</view>
					</view>
				</view>
				<!-- 商品规格 -->
				<s-popup custom-class="demo-popup" position="bottom" v-model="visible" class="mypopup">
					<view class="box-wrap">
						<view class="good-top">
							<view class="good-top-left"><image src="http://taotao111.test.upcdn.net/goods.png" mode="widthFix"></image></view>
							<view class="good-top-right">
								<view class="price">￥36</view>
								<view class="number">库存（1000）件</view>
								<view class="time">已选：一学期</view>
							</view>
							<view class="close-Icon" @click="closeMark"><image src="http://taotao111.test.upcdn.net/class_icon_tc.png" mode="widthFix"></image></view>
						</view>
						<view class="good-center">
							<view class="good-center-top">周期</view>
							<view class="good-center-footer">
								<view class="footer-1" :class="{ active: index === currentGoodIndex }" v-for="(item1, index) in times" :key="index" @click="itemGoodClick(index)">{{ item1 }}</view>
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
				<!-- 更多须知 -->

				<openAlert ref="openAlert" :AlertClass="AlertClass" :AlertPosition="AlertPosition">
					<view class="moreTip">
						<view class="tipTitle"><text>更多须知</text></view>
						<view class="tipList">
							<view class="tipList-detail" v-for="(item, index) in tipListDetail" :key="index">{{ item }}</view>
						</view>
						<view class="haveRead" @click="closeRead"><text>我已阅读</text></view>
					</view>
				</openAlert>

				<view class="desc-in-time">
					<view class="desc-time-in">
						<view class="time-left">
							<text class="time-before">周期</text>
							<text class="time-after">租贷时间选择...</text>
						</view>
						<view class="time-right"><image src="http://taotao111.test.upcdn.net/me_tg_jr.png" mode="widthFix"></image></view>
					</view>
				</view>
				<view class="good-detail">
					<view class="detail-title"><text>商品详情</text></view>
					<view class="detail-img"><!-- <image src="http://taotao111.test.upcdn.net/shangp_nav.png"></image> --></view>
					<view class="detail-img-1"></view>
					<view class="detail-img-2"></view>
					<view class="detail-img-3"></view>
				</view>
				<view class="bottom-nav">
					<view class="nav-people">
						<view class="nav-people-img"><image src="http://taotao111.test.upcdn.net/shangp_table_kefu.png" mode="widthFix"></image></view>
						<text>客服</text>
					</view>
					<view class="nav-cart">
						<view class="nav-cart-img"><image src="http://taotao111.test.upcdn.net/shangp_table_shopping.png" mode="widthFix"></image></view>
						<text>购物车</text>
						<view class="nav-cart-icon">{{cartNumber}}</view>
					</view>
					<view class="nav-add" @click="addToCart"><text>加入购物车</text></view>
					<view class="nav-buy" @click="toBuy"><text>立即下单</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
import sPopup from '@/components/s-popup/index.vue';
import openAlert from '@/components/open-alert/open-alert';
export default {
	components: { uniSwiperDot, openAlert,sPopup },
	data() {
		return {
			AlertClass: 5,
			AlertPosition: '',
			times: ['一学期', '一年'],
			currentIndex: 0,
			currentGoodIndex: 0,
			number: 0,
			cartNumber:4,
			visible: false,
			showVisible: false,
			dotStyle: true,
			current: 0,
			mode: 'nav',
			tip: '租赁该物品需交押金￥100.00元',
			titleIcon: '[洗涤]',
			descTitle: '澳洲羊毛双层控温被加厚保暖羊毛冬被单双人保暖棉被褥被芯',
			tipListDetail: [
				'1.当您作为消费者通过下单并支付租赁款的情况下，租赁款支付成功即视为您与销售商之间就已支付租赁款部分的订单成立合同关系。',
				'1.当您作为消费者通过下单并支付租赁款的情况下，租赁款支付成功即视为您与销售商之间就已支付租赁款部分的订单成立合同关系。',
				'1.当您作为消费者通过下单并支付租赁款的情况下，租赁款支付成功即视为您与销售商之间就已支付租赁款部分的订单成立合同关系。'
			],
			info: [{ content: '' }, { content: '' }, { content: '' }, { content: '' }, { content: '' }, { content: '' }],
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}
			]
		};
	},
	onLoad(option) {
		// console.log(option.url)
		// this.toUrl = option.url;
		// uni.setNavigationBarTitle({
		// 	title: option.title
		// });
	},
	methods: {
		open(Class, Position) {
			this.$nextTick(function() {
				this.AlertClass = Class;
				this.AlertPosition = Position;
				this.$nextTick(function() {
					this.$refs.openAlert.Show();
				});
			});
		},
		change(e) {
			this.current = e.detail.current;
		},
		toBuy() {
			this.visible = true;
		},
		showTip() {
			this.showVisible = true;
		},
		itemGoodClick(index) {
			this.currentGoodIndex = index;
			// this.$emit('selectItem', index);
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
			this.visible = false;
		},
		closeRead(){
		this.$nextTick(function() {
		this.$refs.openAlert.Close();
		});
		},
		addToCart(){
			this.cartNumber++
		},
		back(){
			uni.switchTab({
				url:'../index'
			})
		}
	}
};
</script>

<style>
page {
	background-color: #f6f6f6;
	box-sizing: border-box;
}
.box-wrap{
	background-color: #fff;
	border-radius: 20upx;
}
.screen-swiper {
	height: 600upx;
	position: relative;
}
.back{
	width: 60upx;
	height: 60upx;
	position: absolute;
	top: 20upx;
	right: 30upx;
}
.close-Icon{
	width: 33upx;
	height: 33upx;
	margin-left: 250upx;
}
.desc {
	width: 100%;
	padding: 20upx 0;
	background-color: #fff;
}
.desc-in {
	width: 92%;
	margin: 0 auto;
}
.desc-in-title {
	font-size: 32upx;
	color: #333;
	line-height: 1.8;
}
.title-icon {
	color: #0daafb;
	margin-right: 20upx;
}
.desc-in-tip {
	display: flex;
	width: 100%;
	padding: 10upx;
	background-color: rgb(238, 252, 254);
	color: #009cec;
	justify-content: space-between;
	margin: 20upx 0;
}
.tip-left {
	font-size: 24upx;
}
.tip-right {
	font-size: 20upx;
}
.desc-in-price {
	display: flex;
	width: 100%;
	color: #666;
	justify-content: space-between;
	margin-bottom: 10upx;
	align-items: baseline;
}
.price-before {
	font-size: 42upx;
	color: #ee0000;
}
.price-after {
	font-size: 32upx;
	color: #ee0000;
}
.price-right {
	font-size: 20upx;
	color: #999;
}

.desc-in-time {
	display: flex;
	width: 100%;
	padding: 30upx 0;
	align-items: baseline;
	margin: 30upx 0;
	background-color: #fff;
}
.desc-time-in {
	display: flex;
	width: 92%;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
}
.time-before {
	font-size: 26upx;
	color: #333;
}
.time-after {
	margin-left: 20upx;
	font-size: 24upx;
	color: #666;
}
.time-right {
	width: 12upx;
	height: 22upx;
}
.good-detail {
	width: 100%;
	padding-bottom: 100upx;
}
.detail-title {
	text-align: center;
	font-size: 26upx;
	margin-bottom: 30upx;
}
.detail-img {
	width: 100%;
	height: 500upx;
	background: url(http://taotao111.test.upcdn.net/1.jpg) no-repeat center center;
	background-size: cover;
}
.detail-img-1 {
	width: 100%;
	height: 500upx;
	background: url(http://taotao111.test.upcdn.net/2.jpg) no-repeat center center;
	background-size: cover;
}
.detail-img-2 {
	width: 100%;
	height: 500upx;
	background: url(http://taotao111.test.upcdn.net/3.jpg) no-repeat center center;
	background-size: cover;
}
.detail-img-3 {
	width: 100%;
	height: 500upx;
	background: url(http://taotao111.test.upcdn.net/4.jpg) no-repeat center center;
	background-size: cover;
}

.nav-people-img,
.nav-cart-img {
	width: 37upx;
	height: 39upx;
}
.nav-cart{
	position: relative;
}
.nav-cart-icon{
	position: absolute;
	top: 0upx;
	left: 100upx;
	width: 24upx;
	height: 24upx;
	border-radius: 100%;
	background-color: red;
	font-size: 18upx;
	color: #fff;
	text-align: center;
	line-height: 24upx;
	/* padding: 6upx; */
}
.bottom-nav {
	width: 100%;
	height: 100upx;
	display: flex;
	position: fixed;
	bottom: 0;
	background-color: #fff;
	align-items: center;
}
.nav-people {
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 22upx;
}
.nav-cart {
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 22upx;
}
.nav-add {
	width: 25%;
	height: 100%;
	line-height: 100upx;
	text-align: center;
	background-color: #85e1ff;
	color: #fff;
	font-size: 28upx;
}
.nav-buy {
	width: 25%;
	height: 100%;
	line-height: 100upx;
	text-align: center;
	background-color: #0daafb;
	color: #fff;
	font-size: 28upx;
}

.demo-popup {
	background-color: #fff;
	/* height: 400upx; */
	border-radius: 10upx 10upx 0 0;
}
.good-top {
	display: flex;
	padding: 20upx;
	border-bottom: 1px solid #eee;
}
.good-top-left {
	width: 230upx;
	height: 210upx;
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
.moreTip {
	width: 470upx;
	height: 649upx;
	background-color: #fff;
	padding: 20upx;
	border-radius: 10upx;
}
.tipTitle {
	font-size: 32upx;
	font-weight: 600;
}
.tipList-detail {
	font-size: 24upx;
	margin-top: 20upx;
}
.haveRead {
	width: 430upx;
	height: 70upx;
	text-align: center;
	line-height: 70upx;
	color: #0daafb;
	font-size: 32upx;
	border: 1px solid #0daafb;
	margin-top: 30upx;
}
</style>
