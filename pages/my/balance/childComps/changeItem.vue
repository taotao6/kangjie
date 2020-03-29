<template>
	<view class="change-item">
		<view class="change-item-in" v-for="(item,index) in change" :key="index">
			<view class="item-left">
				<view class="item-left-top">
					<text>{{item.name}}</text>
				</view>
				<view class="item-left-bottom">
					<text>{{item.time}}</text>
				</view>
			</view>
			<view class="item-right">
				<text>{{item.price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			change:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.change-item{
		background-color: #fff;
		width: 100%;
	}
	.change-item-in{
		width: 92%;
		margin: 0 auto;
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.item-left-top{
		font-size: 30upx;
		color: #333;
	}
	.item-left-bottom{
		font-size: 24upx;
		color: #B2B2B2;
		margin-top: 10upx;
	}
	.item-right{
		font-size: 34upx;
		
	}
</style>
