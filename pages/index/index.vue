<template>
	<view>
		<view class="title">
			<view class="title-in">
				<view class="title-in-left" @tap="selectAddress">
					<text>{{ address }}</text>
					<view class="title-left-img"><image src="http://taotao111.test.upcdn.net/home_nav_jt.png" mode="widthFix"></image></view>
				</view>
				<view class="title-in-right"><input type="text" placeholder="洗被子" /></view>
			</view>
		</view>
		
		<view class="mySwiper">
			<view class="mySwiper-in">
				<swiper class="screen-swiper" :indicator-dots="dotStyle" :circular="true" :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item, index) in mySwiper" :key="index" class="mySwiperItem">
						<image :src="item.carousel[0].url" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view>
			<view class="news">
				<swiper class="newswiper" :indicator-dots="dotStyle" vertical="true" autoplay="true" interval="3000" duration="500" circular="true">
					<swiper-item>
						<view class="news-in">
							<view class="news-in-left"><image src="http://taotao111.test.upcdn.net/home_massage.png" mode="widthFix"></image></view>
							<view class="news-in-right">
								<text>{{ news }}</text>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="news-in">
							<view class="news-in-left"><image src="http://taotao111.test.upcdn.net/home_massage.png" mode="widthFix"></image></view>
							<view class="news-in-right">
								<text>{{ news }}</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="rent">
				<view class="rent-in">
					<view class="rent-in-title">
						<view class="rent-title-left"><image src="http://taotao111.test.upcdn.net/home_icon_zl.png" mode="widthFix"></image></view>
						<view class="rent-title-right"><text>租贷服务</text></view>
					</view>
					<view class="rent-body-contain">
						<view class="rent-in-body" v-for="(item, index) in rent" :key="index" @click="goDetail">
							<view class="rent-in-img"><image src="http://taotao111.test.upcdn.net/goods.png" mode="widthFix"></image></view>
							<view class="rent-in-dec">
								<text>{{ item.rentTitle }}</text>
							</view>
							<view class="rent-in-price">
								<text>{{ item.rentPrice }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="wash">
				<view class="wash-in">
					<view class="wash-in-title">
						<view class="wash-title-left"><image src="http://taotao111.test.upcdn.net/home_icon_xd.png" mode="widthFix"></image></view>
						<view class="wash-title-right"><text>洗涤服务</text></view>
					</view>
					<view class="wash-body-contain">
						<view class="wash-in-body" v-for="(item, index) in wash" :key="index" @click="goWash">
							<view class="wash-in-img"><image src="http://taotao111.test.upcdn.net/goods.png" mode="widthFix"></image></view>
							<view class="wash-in-dec">
								<text>{{ item.washTitle }}</text>
							</view>
							<view class="wash-in-price">
								<text>{{ item.washPrice }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view  @click="goCart">
				<image src="http://taotao111.test.upcdn.net/home_icon_gwcc.png"></image>
				 <dragball :x=80 :y=80 :image='img'></dragball>
				 
				<!-- <movable-area class="movable">
				    <movable-view class="cart" x='500' y='550' direction="all">
						<image src="http://taotao111.test.upcdn.net/home_icon_gwcc.png"></image>
					</movable-view>
				 </movable-area> -->
			</view>
		</view>
	</view>
</template>

<script>
import dragball from "@/components/drag-ball/drag-ball.vue";
import mixin from '@/common/mixin';
import { formatDate, reverseGeocoder,getLocation } from '@/common/utils/index.js';
import {http} from '@/utils/luch-request/index.js'
export default {
	components:{
		dragball
	},
	data() {
		return {
			img:'http://taotao111.test.upcdn.net/home_icon_gwcc.png',
			address: '南昌市',
			news: '校园送单骑手招聘，快来看看吧！！！',
			rent: [
				{
					rentTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					rentPrice: '￥32.90'
				},
				{
					rentTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					rentPrice: '￥32.90'
				},
				{
					rentTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					rentPrice: '￥32.90'
				},
				{
					rentTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					rentPrice: '￥32.90'
				}
			],
			wash: [
				{
					washTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					washPrice: '￥32.90'
				},
				{
					washTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					washPrice: '￥32.90'
				},
				{
					washTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					washPrice: '￥32.90'
				},
				{
					washTitle: '保暖棉被租用一床1.5X2.0两斤重 租半年',
					washPrice: '￥32.90'
				}
			],
			mySwiper:[],//首页轮播图
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
			],
			dotStyle: false
		};
	},
	mixins: [mixin],
	onLoad() {
		
	},
	mounted(){
		this.getLocation()
		this.getInfoClass()
		this.getSwiper()
		// console.log(1111)
		// console.log(this.mySwiper)
	},
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		getInfoClass(){
			this.$http('nottoken/getOneClass','get',{})
				.then(res=>{
						
					})
		},
		 getSwiper(){
			let that = this
			that.$http('nottoken/getSwipers','get',{})
			.then(res=>{
				that.mySwiper = res.data.data.swipers.map(item=>{
					item.carousel = JSON.parse(item.carousel)
					console.log(item)
					return item;
				})
			})
		},
		// getInfo(){
		// 	http.get('/data/getTimelineService').then(res => {
		// 		console.log(res)
		// 	})
		// },
		getLocation() {
			getLocation().then(res => {
				const { longitude, latitude } = res;
				console.log(res)
				this.getLocationInfo({ longitude, latitude });
			});
		},
		// 获取位置信息
		getLocationInfo (location) {
			let that = this;
		  reverseGeocoder(location)
		    .then(res => {
		      // console.log('当前位置信息：', res)
		      const address = res.result.pois[0].title
						// console.log(address) 
						// console.log(result)
						that.address = address;
						console.log(that.address)
		    })
		    .catch(err => {
		    })
		},
		selectAddress() {
			let that = this;

			uni.chooseLocation({
				success: function(res) {
					console.log('位置名称：' + res.name);
					console.log('详细地址：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
					that.address = res.name;
				}
			});
		},
		goCart() {
			uni.navigateTo({
				url: '../cart/index'
			});
		},
		goWash() {
			uni.navigateTo({
				url: './detail/wash'
			});
		},
		goDetail() {
			uni.navigateTo({
				url: './detail/index'
			});
		}
	}
};
</script>

<style>
page {
	background: #FFFFFF;
}
image {
	will-change: transform;
}
.movable{
	width: 100vw;
	height: 100vh;
	position: fixed;
}
.cart {
	width: 60upx;
	height: 60upx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background-color: #fff;
	position: fixed;
	bottom: 120upx;
	right: 31upx;
	padding: 20upx;
	box-shadow: 0 4upx 24upx 0 rgba(0, 0, 0, 0.1);
}
.cart image {
	width: 60upx;
	height: 60upx;
	object-fit: cover;
}
.screen-swiper {
	height: 320upx !important;
	overflow: hidden; /* 让照片循环的时候不变成直角 */
	border-radius: 30upx;
	min-height: 150upx;
}
.mySwiperItem {
	border-radius: 30upx;
	overflow: hidden; /* 让照片循环的时候不变成直角 */
}
.mySwiperItem image {
	will-change: transform;
}
.title {
	height: 400upx;
	width: 100%;
	box-sizing: border-box;
	background-color: #0daafb;
	border-radius: 0 0 150% 150%;
	/* position: relative; */
}
.title-in {
	width: 92%;
	height: 92upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* position: fixed;
	top: 44px;
	left: 4%; */
	/* top: 105upx; */
	/* background-color: #0daafb; */
	z-index: 99;
}
.title-in-left {
	display: flex;
	color: #fff;
	align-items: bottom;
	font-size: 30upx;
	max-width: 200upx;
}
.title-in-left text {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.title-left-img {
	width: 22upx;
	height: 12upx;
	margin-left: 5upx;
}
.title-in-right {
	width: 509upx;
	height: 60upx;
	background-color: #fff;
	border-radius: 30upx;
	line-height: 60upx;
	padding-left: 20upx;
	/* padding-top: 15upx; */
	display: flex;
	align-items: center;
}
.title-in-right input {
	background: url(http://taotao111.test.upcdn.net/home_nav_sous.png) no-repeat center left;
	background-size: 26upx 26upx;
	padding-left: 50upx;
	font-size: 20upx;
	display: flex;
	align-items: baseline;
}
.mySwiper {
	height: 300upx;
	width: 100%;
	position: absolute;
	top: 100upx;
	left: 0;
}
.mySwiper-in {
	width: 92%;
	height: 92upx;
	margin: 0 auto;
}
.news {
	margin-top: 30upx;
	height: 100upx;
	width: 100%;
	overflow: hidden;
}
.newswiper {
	height: 100%;
}
.news-in {
	width: 92%;
	height: 92upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
}
.news-in-left {
	width: 135.5upx;
	height: 47.5upx;
}
.news-in-right {
	height: 47.5upx;
	flex: 1;
	border-left: 1px solid #eee;
	margin-left: 20upx;
	line-height: 47.5upx;
	padding-left: 20upx;
	font-size: 28upx;
}
.rent {
	width: 100%;
	/* margin-top: 60upx; */
}
.rent-in {
	width: 92%;
	margin: 0 auto;
}
.rent-in-title {
	display: flex;
	align-items: center;
}
.rent-title-left {
	width: 37upx;
	height: 30upx;
	margin-right: 13upx;
}
.rent-title-right {
	font-size: 32upx;
	font-weight: 600;
}
.rent-body-contain {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.rent-in-img {
	width: 335upx;
	height: 300upx;
}
.rent-in-body {
	margin-top: 30upx;
}
.rent-in-dec {
	/* padding: 20upx; */
	width: 300upx;
	height: 62upx;
	font-size: 26upx;
	padding-top: 20upx;
	margin-left: 20upx;
}
.rent-in-price {
	padding: 30upx 20upx 0 20upx;
	margin-top: 10upx;
	font-size: 32upx;
	color: #f13130;
}

.wash {
	width: 100%;
	margin-top: 60upx;
}
.wash-in {
	width: 92%;
	margin: 0 auto;
}
.wash-in-title {
	display: flex;
	align-items: center;
}
.wash-title-left {
	width: 37upx;
	height: 30upx;
	margin-right: 13upx;
}
.wash-title-right {
	font-size: 32upx;
	font-weight: 600;
}
.wash-body-contain {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 55upx;
}
.wash-in-img {
	width: 335upx;
	height: 300upx;
}
.wash-in-body {
	margin-top: 30upx;
}
.wash-in-dec {
	/* padding: 20upx; */
	width: 300upx;
	height: 62upx;
	font-size: 26upx;
	padding-top: 20upx;
	margin-left: 20upx;
}
.wash-in-price {
	padding: 30upx 20upx 0 20upx;
	margin-top: 10upx;
	font-size: 32upx;
	color: #f13130;
}
</style>
