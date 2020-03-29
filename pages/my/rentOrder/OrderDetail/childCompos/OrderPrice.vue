<template>
	<view class="Order-Price">
		<view class="Order-Price-in">
			<view class="Price-in-title" v-for="(item,index) in price" :key="index">
				<view class="title-left">
					{{item.left}}
				</view>
				<view class="title-right">
					￥{{item.price}}
				</view>
			</view>
			<view class="paid">
				实付金额：<text class="paid-price">￥{{all}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			price:{
				type:Array,
				default(){
					return []
				}
			}
		},
		computed:{
			all(){
				let len = this.price.length;
				let all = 0;
				for(let i=0;i<len;i++)
				{
					all = all + this.price[i].price
				}
				return all
			}
		}
	}
</script>

<style scoped>
	.Order-Price{
		width: 100%;
		background-color: white;
		
		padding-bottom: 20upx;
	}
	.Order-Price-in{
		padding-top: 10upx;
		width: 92%;
		margin: 0 auto;
	}
	.Price-in-title{
		display: flex;
		justify-content: space-between;
		margin: 20upx 0;
	}
	.title-left{
		color: #525252;
		font-size: 24upx;
	}
	.title-right{
		color: red;
		font-size: 24upx;
	}
	.paid{
		display: flex;
		justify-content: flex-end;
		margin-top: 30upx;
		font-size: 26upx;
		color: #333;
	}
	.paid-price{
		color: red;
		font-size: 26upx;
	}
</style>
