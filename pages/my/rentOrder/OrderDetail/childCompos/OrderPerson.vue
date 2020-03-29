<template>
	<view class="Order-person">
		<view class="Order-person-left">
			<view class="person-left-img">
				<image src="http://taotao111.test.upcdn.net/did_add_icon.png" mode="widthFix"></image>
			</view>
			<view class="person-left-content">
				<view class="left-content-head">
					<view class="left-content-title">
						<text>{{person.name}}</text>
					</view>
					<view class="Order-content-detail">
						<text>{{person.phone}}</text>
					</view>
				</view>
				<view class="left-content-body">
					<text>{{person.address}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>
	
<script>
	export default{
		props:{
			person:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.Order-person{
		width: 92%;
		margin: 0 auto;
		background-color: white;
		display: flex;
		padding: 25upx;
		border-radius: 10upx;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	.Order-person-left{
		display: flex;
		align-items: center;
	}
	.person-left-img{
		width: 28upx;
		height: 38upx;
		margin-right: 20upx;
	}
	.left-content-head{
		display: flex;
		justify-content: space-between;
	}
	.left-content-head{
		width: 70vw;
		font-size: 30upx;
	}
	.left-content-title{
		font-size: 30upx;
	}
	.left-content-body{
		font-size: 26upx;
		color: #666;
		margin-top: 10upx;
		width: 100%;
	}
</style>
