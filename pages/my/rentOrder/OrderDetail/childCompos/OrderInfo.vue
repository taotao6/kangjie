<template>
	<view class="info">
		<view class="info-in">
			<view class="info-in-title">
				<view class="bang"></view>订单信息
			</view>
			<view class="info-in-detail" v-for="(item,index) in info" :key="index">
				<view class="info-in-left">
					{{item.left}}
				</view>
				<view class="info-in-right">
					{{item.info}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			info:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.info{
		width: 100%;
		background-color: white;
		padding: 20upx;
	}
	.info-in{
		width: 92%;
		margin: 0 auto;
	}
	.info-in-title{
		font-size: 30upx;
		color: #000000;
		display: flex;
		align-items: center;
	}
	.bang{
		width: 4upx;
		height: 30upx;
		border-radius: 2upx;
		background-color: #0DAAFB;
		margin-right: 10upx;
	}
	.info-in-detail{
		display: flex;
		font-size: 24upx;
		color: #525252;
		margin-top: 20upx;
		justify-content: space-between;
	}
</style>
