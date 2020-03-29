<template>
	<view class="distri-middle">
		<view class="distri-middle-in">
			<view class="distri-middle-1">
				<view class="middle-1-title">
					{{myinfo.commission}}
				</view>
				<view class="middle-1-body">
					我的佣金(元)
				</view>
			</view>
			<view class="distri-middle-1">
				<view class="middle-1-title">
					{{myinfo.finishCom}}
				</view>
				<view class="middle-1-body">
					已提现佣金(元)
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			myinfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
	.distri-middle{
		width: 100%;
		/* height: 150rpx; */
		background-color: #fff;
		
	}
	.distri-middle-in{
		padding: 30upx 0;
		display: flex;
	}
	.distri-middle-1{
		display: flex;
		flex: 1;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		border-right: 1rpx solid #EEEEEE;
	}
	.middle-1-title{
		color: #F75625;
		font-size: 38rpx;
	}
	.middle-1-body{
		color: #666;
		font-size: 24rpx;
	}
</style>
