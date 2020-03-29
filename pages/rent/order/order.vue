<template>
	<view>
		<view class="type">
			<view class="type-in">
				<view class="type-in-title">配送方式：</view>
				<evan-radio v-model="baseValue" label="base1" class="radio-left">商家取送</evan-radio>
				<evan-radio v-model="baseValue" label="base2" class="radio-left">自取自提</evan-radio>
			</view>
		</view>
		<view class="address" v-if="baseValue == 'base1'">
			<view class="address-in" @tap="toAddress">
				<view class="address-in-left"><text>请添加收货地址</text></view>
				<view class="address-in-right"><image src="http://taotao111.test.upcdn.net/me_tg_jr.png" mode="widthFix"></image></view>
			</view>
			<view class="dashed"></view>
		</view>
		
		<view v-else>
			<view class="locationAll">
				<view class="location">
					<view class="location-left">
						<view class="location-left-img">
							<image src="http://taotao111.test.upcdn.net/did_add_icon.png" mode="widthFix"></image>
						</view>
						<view class="location-left-text">
							<view class="location-text-title">
								<text>南昌大学</text>
							</view>
							<view class="location-text-body">
								<text>江西省南昌市青山湖区南京东路235号</text>
							</view>
						</view>
					</view>
					<view class="location-right">
						<view class="location-right-img">
							<image src="http://taotao111.test.upcdn.net/did_phone_icon.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="infoAll">
				<view class="infoAll-1">
					<view class="infoAll-1-left">
						<text>取货人</text>
					</view>
					<view class="infoAll-1-right">
						<input type="text" placeholder="请填写提货人姓名"/>
					</view>
				</view>	
				<view class="infoAll-2">
					<view class="infoAll-1-left">
						<text>预留电话</text>
					</view>
					<view class="infoAll-1-right">
						<input type="number" placeholder="请输入联系电话"/>
					</view>
				</view>
			</view>
		</view>
	
		<view class="goods">
			<view class="goods-in">
				<view class="goods-in-title">
					<view class="title-left"><image src="http://taotao111.test.upcdn.net/did_cart_shop.png" mode="widthFix"></image></view>
					<view class="title-right"><text>南昌大学店</text></view>
				</view>
			</view>
			<view v-for="(item, index) in rentData" :key="index" class="sub-item">
				<view class="sub-item-img"><image :src="item.image" :key="item.image" mode="widthFix" /></view>
				<view class="sub-item-content">
					<view class="item-title">
						<text>{{ item.title }}</text>
					</view>
					<view class="item-time">{{ item.time }}</view>
					<view class="item-deposit">{{ item.deposit }}</view>
					<view class="item-bottom">
						<view class="item-price">￥{{ item.price }}</view>
						<view class="item-price-icon">X{{item.number}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="message">
			<view class="message-in">
				<view class="message-in-cont">
					买家留言：{{message}}
				</view>
			</view>
		</view>
		<view class="priceInfo">
			<view class="priceInfo-in" v-for="(item1,index) in priceInfo" :key="index">
				<view class="priceInfo-in-left">
					<text>{{item1.left}}</text>
				</view>
				<view class="priceInfo-in-right">
					<text>{{item1.right}}</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-in">
				<view class="footer-in-left">
					<view class="footer-left-1">
						<text>共计{{number}}件商品</text>
					</view>
					<view class="footer-left-2">
						<text>合计：</text><text class="red">￥{{allPrice}}</text>
					</view>
				</view>
				<view class="footer-in-right" @tap="toAccount">
					<text>结算</text>
				</view>
			</view>
		</view>
		
		<s-popup custom-class="demo-popup" position="bottom" v-model="visible">
			<view class="goods-wrap">
				<view class="account-top">
					<view class="account-top-center">选择支付方式</view>
					<view class="close-Icon" @click="closeMark"><image src="http://taotao111.test.upcdn.net/class_icon_tc.png" mode="widthFix"></image></view>
				</view>
				<view class="account-center">
					<view class="account-center-1">支付金额</view>
					<view class="account-center-2">28.00<text class="small">元</text></view>
				</view>
				<view class="account-footer">
					<view class="account-footer-1">
						<view class="left">
							<view class="footer-1-img">
								<image src="http://taotao111.test.upcdn.net/me_qb_jb.png" mode="widthFix"></image>
							</view>
							<view class="footer-1-detail">
								<view class="footer-1-title">
									<text>余额支付</text>
								</view>
								<view class="footer-1-body">
									<text>我的余额：￥0.00</text>
								</view>
							</view>
						</view>
						<view>
							<evan-radio v-model="order" shape="square" label="order1"></evan-radio>
						</view>
					</view>
					<view class="account-footer-2">
						<view class="left">
							<view class="footer-1-img">
								<image src="http://taotao111.test.upcdn.net/wxpay-ico.png" mode="widthFix"></image>
							</view>
							<view class="footer-1-detail">
								<view class="footer-1-title">
									<text>余额支付</text>
								</view>
							</view>
						</view>
						<view>
							<evan-radio v-model="order" shape="square" label="order2"></evan-radio>
						</view>
					</view>
				</view>
				<view class="comfirm" @click="comfirm"><text>确认支付</text></view>
			</view>
		</s-popup>
		
	</view>
</template>

<script>
import EvanRadio from '@/components/evan-radio/evan-radio.vue';
import sPopup from '@/components/s-popup/index.vue';
export default {
	components: {
		EvanRadio,
		sPopup
	},
	data() {
		return {
			check:true,
			check_1:false,
			visible:false,
			baseValue: 'base1',
			order:'order1',
			rentData: [
				{ image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit: '押金：50元', price: 36.00,number:1},
				{ image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit: '押金：50元', price: 36.00,number:1},
				{ image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit: '押金：50元', price: 36.00,number:1},
				{ image: 'http://taotao111.test.upcdn.net/goods.png', title: '保暖棉被租用一床1.5X2.0两斤重 租半年', time: '一学期', deposit: '押金：50元', price: 36.00,number:1}
			],
			message:'请下午5点后帮我送到',
			priceInfo:[
				{left:'商品金额',right:'￥137.4'},
				{left:'商品数量',right:'x3'},
				{left:'配送费',right:'￥0.0'},
				{left:'租贷押金',right:'￥50.0'},
				{left:'总计',right:'￥187.4'},
				],
			number:2,
			allPrice:187.4
		};
	},
	methods: {
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
		},
		toAddress(){
			uni.navigateTo({
				url:"./myAdress"
			})
		},
		toAccount(){
			this.visible = true
		},
		comfirm(){
			uni.navigateTo({
				url:'./success'
			})
		}
	}
};
</script>

<style scoped>
page {
	box-sizing: border-box;
	background-color: #f6f6f6;
}
::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	} 
.goods-wrap{
	background-color: #fff;
	border-radius: 20upx;
}
.red{
	color: red;
	font-size: 28upx;
}
.small{
	font-size: 30upx;
}
.type {
	width: 100%;
	background-color: #fff;
}
.left{
	display: flex;
	align-items: center;
}
.type-in {
	width: 92%;
	margin: 0 auto;
	display: flex;
	padding: 40upx 0;
}
.type-in-title {
	font-size: 30upx;
	color: #333;
}
.radio-left {
	margin-left: 30upx;
	font-size: 28upx !important;
}
.radio-right {
	font-size: 28upx !important
}
.address {
	width: 100%;
	background-color: #fff;
	margin-top: 30upx;
	height: 130upx;
	font-size: 30upx;
	line-height: 130upx;
	background-color: #f7fbff;
}
.address-in {
	width: 92%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.address-in-right {
	width: 14upx;
	height: 26upx;
}
.goods {
	width: 100%;
	background-color: #fff;
	margin-top: 30upx;
	padding: 30upx 0;
}
.dashed {
	height: 4upx;
	background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
	background-size: 160upx;
}
.goods-in {
	width: 92%;
	margin: 0 auto;
	display: flex;
}
.goods-in-title {
	display: flex;
	align-items: center;
}
.title-left {
	width: 30upx;
	height: 30upx;
	margin-right: 15upx;
	line-height: 30upx;
}
.title-right {
	font-size: 30upx;
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
.sub-item-content{
	margin-left: 20upx;
}
.item-title {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 30upx;
	width: 500upx;
	/* height: 28upx; */
}
.item-time {
	font-size: 20upx;
	margin-bottom: 10upx;
	color: #666;
}
.item-deposit {
	font-size: 20upx;
	color: #f37200;
	margin-bottom: 10upx;
}
.item-price {
	font-size: 30upx;
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
	font-size: 28upx;
}
.message{
	width: 100%;
	margin-top: 30upx;
	background-color: #fff;
}
.message-in{
	width: 92%;
	margin: 0 auto;
	padding-top: 32upx;
	padding-bottom: 60upx;
}
.message-in-cont{
	font-size: 28upx;
}

.priceInfo{
	width: 100%;
	background-color: #fff;
	margin-top: 30upx;
	margin-bottom: 120upx;
}
.priceInfo-in{
	width: 92%;
	margin: 0 auto;
	padding-top: 32upx;
	padding-bottom: 32upx;
	display: flex;
	justify-content: space-between;
}
.priceInfo-in-left{
	font-size: 24upx;
}
.priceInfo-in-right{
	font-size: 24upx;
	color: red;
}

.footer{
	width: 100%;
	background-color: #fff;
	height: 100upx;
	line-height: 100upx;
	position: fixed;
	bottom: 0;
}
.footer-in{
	width: 100%;
	margin: 0 auto;
	padding-top: 32upx;
	padding-bottom: 32upx;
	height: 100%;
	align-items: center;
	display: flex;
	
}
.footer-in-left{
	font-size: 24upx;
	width: 80%;
	display: flex;
	padding-left: 30upx;
}
.footer-left-1{
	margin-right: 20upx;
}
.footer-in-right{
	background-color: #0DAAFB;
	font-size: 32upx;
	flex: 1;
	color: #FFFFFF;
	text-align: center;
}
.account-top{
	display: flex;
	height: 110upx;
	align-items: center;
}
.account-top-center{
	font-size: 32upx;
	margin-left: 300upx;
	margin-right: 200upx;
}
.close-Icon{
	width: 24upx;
	height: 26upx;
}
.account-center{
	width: 100%;
	height: 240upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 4upx solid #eee;
	border-bottom: 4upx solid #eee;
}
.account-center-1{
	font-size: 24upx;
	color: #666;
}
.account-center-2{
	color: red;
	font-size: 60upx;
	margin-top: 25upx;
}
.account-footer{
	width: 100%;
}
.account-footer-1{
	height: 110upx;
	display: flex;
	align-items: center;
	width: 92%;
	margin: 0 auto;
	justify-content: space-between;
	border-bottom: 4upx solid #eee;
}
.account-footer-2{
	height: 110upx;
	display: flex;
	align-items: center;
	width: 92%;
	margin: 0 auto;
	justify-content: space-between;
}
.footer-1-img{
	width: 37upx;
	height: 37upx;
	margin-right: 20upx;
}
.footer-1-title{
	font-size: 28upx;
}
.footer-1-body{
	margin-top: 10upx;
	font-size: 22upx;
	color: #666;
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
.locationAll{
	width: 100%;
	background-color: #fff;
	padding: 10px 0;
	margin: 20upx 0;
}
.location{
	width: 92%;
	margin: 20upx auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.location-left{
	display: flex;
	align-items: center;
}
.location-text-title{
	color: #333333;
	font-size: 30upx;
}
.location-text-body{
	margin-top: 10upx;
	color: #666;
	font-size: 26upx;
}
.location-left-img{
	width: 28upx;
	height: 38upx;
	margin-right: 20upx;
}
.location-right-img{
	width: 60upx;
	height: 60upx;
}

.infoAll{
	width: 100%;
	background-color: #fff;
	padding: 10px 0;
	margin: 20upx 0;
}
.infoAll-1{
	width: 92%;
	margin: 20upx auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.infoAll-1-left{
	font-size: 28upx;
}
.infoAll-1-right input,.infoAll-2-right input{
	font-size: 26upx;
}
.infoAll-2{
	width: 92%;
	margin: 20upx auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 20upx;
}
.infoAll-2-left{
	font-size: 28upx;
}
</style>
