<template>
	<view>
		<view class="content">
			<view class="content-img">
				<image src="http://taotao111.test.upcdn.net/submit-pro.png" mode="widthFix" style="height: auto;"></image>
			</view>
			<view class="content-text"><text>支付成功</text></view>
			<view class="backHome" @click="backHome">
				<text>返回首页</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			backHome(){
				uni.switchTab({
					url:'../../index/index'
				})
			}
		}
	}
</script>

<style scoped>
	page{
		height: 100vh;
		background-color: #FFFFFF;
		overflow: hidden;
	}
	.content{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}
	.content-img{
		width: 150upx;
		height: 150upx;
	}
	.content-text{
		font-size: 34upx;
		margin-top: 20upx;
	}
	.backHome{
		width: 450upx;
		height: 80upx;
		border: 2upx solid #2F98CE;
		color: #2F98CE;
		border-radius: 20upx;
		font-size: 30upx;
		margin-top: 80upx;
		line-height: 80upx;
		text-align: center;
	}
</style>
