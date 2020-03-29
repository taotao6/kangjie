<template>
	<view class="OrderTop">
		<view class="OrderTop-in">
			<view class="OrderTop-in-title">
				{{type}}
			</view>
			<view class="OrderTop-in-body" v-if="type == '待支付'">
				<text>等待1小时20分钟后 订单将会自动取消</text>
			</view>
			<view class="OrderTop-in-body" v-if="type == '待付款'">
				<text>买家已付款 等待商家配送</text>
			</view>
			<view class="OrderTop-in-body" v-if="type == '配送中'">
				<text>商家正在配送</text>
			</view>
			<view class="OrderTop-in-body" v-if="type == '租贷中'">
				<text>订单租贷使用中</text>
			</view>
			<view class="OrderTop-in-body" v-if="type == '已完成'">
				<text>订单租贷已结束</text>
			</view>
			<view class="OrderTop-in-body" v-if="type == '已取消'">
				<text>订单已被取消</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			type:{
				type:String,
				default(){
					return ''
				}
			}
		}
	}
</script>

<style scoped>
	.OrderTop{
		width: 100%;
		height: 240upx;
		background-color: #0DAAFB;
		padding-top: 20upx;
	}
	.OrderTop-in{
		width: 92%;
		margin: 0 auto;
	}
	.OrderTop-in-title{
		color: #fff;
		font-size: 40upx;
	}
	.OrderTop-in-body{
		color: #fff;
		font-size: 28upx;
		margin-top: 20upx;
	}
</style>
