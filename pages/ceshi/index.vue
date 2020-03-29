<template>
	<view class="container">
		<view class="myTitle">
			<view class="myTitle-in">
				<view class="myTitle-title">
					<text>我的</text>
				</view>
				<view class="myTitle-body">
					<view class="myTitle-body-left">
						<image src="http://taotao111.test.upcdn.net/1.jpg"></image>
					</view>
					<view class="myTitle-body-right">
						<view class="body-right-name">
							<text>小星星</text>
						</view>
						<view class="body-right-phone">
							<text>137****6542</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="order">
			<view class="order-in">
				<view class="order-in-left">
					<view class="order-left-img">
						<image src="http://taotao111.test.upcdn.net/me_release_yd.png" mode="widthFix"></image>
					</view>
					<view class="">
						<text>租贷订单(2)</text>
					</view>
				</view>
				<view class="order-in-right">
					<view class="order-right-img">
						<image src="http://taotao111.test.upcdn.net/me_undertake_yd.png" mode="widthFix"></image>
					</view>
					<view class="">
						<text>洗涤订单(5)</text>
					</view>
				</view>
			</view>
		</view>
		<view class="invitation">
			<view class="invitation-in">
				<image src="http://taotao111.test.upcdn.net/me_ga_pic.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="option">
			<view class="option-in" v-for="(item,index) in options" :key="index">
				<view class="option-in-1">
					<view class="option-1-left">
						<view class="option-left-img">
							<image :src="item.left" mode="widthFix"></image>
						</view>
						<view class="option-left-text">
							<text>{{item.name}}</text>
						</view>
					</view>
					<view class="option-1-right">
						<view class="option-right-img">
							<image :src="item.right" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {
			
		},
		data() {
			return {
				options:[
					{left:'http://taotao111.test.upcdn.net/me_icon_qb.png',name:'我的钱包',right:'http://taotao111.test.upcdn.net/me_tg_jr.png'},
					{left:'http://taotao111.test.upcdn.net/me_icon_fx.png',name:'分销中心',right:'http://taotao111.test.upcdn.net/me_tg_jr.png'},
					{left:'http://taotao111.test.upcdn.net/me_icon_dz.png',name:'地址管理',right:'http://taotao111.test.upcdn.net/me_tg_jr.png'},
					{left:'http://taotao111.test.upcdn.net/me_icon_yj.png',name:'意见反馈',right:'http://taotao111.test.upcdn.net/me_tg_jr.png'},
					{left:'http://taotao111.test.upcdn.net/me_icon_kf.png',name:'联系客服',right:'http://taotao111.test.upcdn.net/me_tg_jr.png'},
				]
			}
		},
		onLoad: function(options) {
			
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		background: #f6f6f6;
	}
	.myTitle{
		height: 370upx;
		width: 100%;
		background: url(http://taotao111.test.upcdn.net/me_nav_bg.png) no-repeat center;
		background-size: cover;
		
	}
	.myTitle-in{
		width: 92%;
		margin: 0 auto;
	}
	.myTitle-title{
		font-size: 36upx;
		color: #fff;
		padding-top: 65upx;
	}
	.myTitle-body{
		display: flex;
		align-items: center;
		margin-top: 51upx;
	}
	.myTitle-body-left{
		width: 120upx;
		height: 120upx;
		
	}
	.myTitle-body-left image{
		width: 100%;
		height: 100%;
		border: 1px solid #fff;
		border-radius: 50%;
	}
	.myTitle-body-right{
		margin-left: 20upx;
		color: #fff;
		line-height: 1.5;
	}
	.body-right-name{
		font-size: 36upx;
	}
	.body-right-phone{
		font-size: 26upx;
	}
	
	.order{
		width: 100%;
		position: relative;
	}
	.order-in{
		height: 140upx;
		width: 92%;
		margin: 0 auto;
		background-color: #FFFFFF;
		display: flex;
		padding-top: 20upx;
		padding-bottom: 20upx;
		position: absolute;
		bottom: -70upx;
		left: 4%;
		border-radius: 10upx;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	}
	.order-in-left,.order-in-right{
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
	}
	.order-in-right{
		border-left: 1px solid #eee;
	}
	.order-left-img,.order-right-img{
		width: 60upx;
		height: 56upx;
		margin-bottom: 10upx;
	}
	.invitation{
		width: 100%;
		padding-top: 100upx;
		background-color: #fff;
	}
	.invitation-in{
		width: 92%;
		margin: 0 auto;
		height: 141upx;
		border-radius: 20upx;
		text-align: center;
	}
	.option{
		background-color: #fff;
	}
	.option-in{
		width: 92%;
		padding: 30upx 0;
		margin: 0 auto;
		border-bottom: 1upx solid #eee;
	}
	.option-in-1{
		display: flex;
		justify-content: space-between;
	}
	.option-1-left{
		display: flex;
		font-size: 28upx;
		align-items: center;
	}
	
	.option-left-img{
		width: 26upx;
		height: 26upx;
		margin-right: 20upx;
	}
	.option-right-img{
		width: 10.5upx;
		height: 19upx;
	}
</style>
