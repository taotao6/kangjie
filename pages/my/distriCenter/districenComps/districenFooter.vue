<template>
	<view class="distri-footer">
		<view class="distri-footer-item" v-for="(item,index) in mytest" :key="index">
			<view class="footer-item-top">
				<image :src="imgUrl+item.img" mode="widthFix"></image>
			</view>
			<view class="footer-item-title">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'districenFooter',
		props:{
			mytest:{
				type:Array,
				default(){
					return []
				}
			}
		},
		computed:{
			imgUrl(){
				return getApp().globalData.imgUrl
			}
		}
	}
</script>

<style scoped>
	.distri-footer{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		grid-template-rows: auto;
		/* justify-content: center; */
		background-color: #fff;
		
		
	}
	.distri-footer-item{
		border-top: 1rpx solid #eeee;
		border-right: 1rpx solid #eeee;
		/* text-align: center; */
		padding: 30rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.footer-item-top{
		width: 61rpx;
		height: 49rpx;
	}
	.footer-item-title{
		margin-top: 30rpx;
		font-size: 24rpx;
		color: #333;
	
	}
</style>
