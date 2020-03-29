<template>
	<view class="cancelBox">
		<view class="cancelBox-title">
			<slot name="title">{{title}}</slot>
		</view>
		<view class="cancelBox-body">
			<view class="cancelBox-body-left" @tap="quxiao">
				<slot name="left">取消</slot>
			</view>
			<view class="cancelBox-body-right">
				<slot name="right">确定</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				title:'默认消息'
			}
		},
		methods:{
			quxiao(){
				this.$emit('quxiao')
			}
		}
	}
</script>

<style scoped>
	.cancelBox{
		width: 610upx;
		height: 280upx;
		background-color: white;
		border-radius:20upx;
		overflow: hidden;
	}
	.cancelBox-title{
		width: 100%;
		height: 178upx;
		line-height: 178upx;
		text-align: center;
		color: #333;
		font-size: 36upx;
		border-bottom: 1upx solid #DEDEDE;
	}
	.cancelBox-body{
		display: flex;
	}
	.cancelBox-body-left,.cancelBox-body-right{
		flex: 1;
		height: 102upx;
		line-height: 102upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
	}
	.cancelBox-body-right{
		color: #0DAAFB;
		border-left: 1upx solid #DEDEDE;
	}
	
</style>
