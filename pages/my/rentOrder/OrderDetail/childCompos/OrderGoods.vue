<template>
	<view class="goods">
		<view class="goods-in">
			<view class="goods-in-title">
				<view class="title-left"><image src="http://taotao111.test.upcdn.net/did_cart_shop.png" mode="widthFix"></image></view>
				<view class="title-right"><text>南昌大学店</text></view>
			</view>
		</view>
		<view v-for="(item, index) in goods.info" :key="index" class="">
			<view class="sub-item">
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
			<view class="sub-time" v-if="goods.type=='租贷中'">
				<view class="sub-time-left">
					到期时间：2020-07-29 20:00
				</view>
				<view class="sub-time-right">
					归还
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		onLoad() {
		}
	}
</script>

<style>
	.goods {
		width: 100%;
		background-color: #fff;
		/* margin-top: 30upx; */
		padding-top: 100upx;
		/* padding-bottom: 20upx; */
	}
	.goods-in {
		width: 92%;
		margin: 0 auto;
		display: flex;
		/* border-bottom: 1upx solid #eee; */
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
	.sub-time{
		width: 92%;
		margin: 0upx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 0;
	}
	.sub-time-left{
		font-size: 24upx;
	}
	.sub-time-right{
		width: 120upx;
		height: 46upx;
		color: #0DAAFB;
		border-radius: 23upx;
		border: 1upx solid #0DAAFB;
		line-height: 46upx;
		text-align: center;
	}
</style>
