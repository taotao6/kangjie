<template>
	<view class="distri-center">
		<view class="distri-center-in">
			<view class="center-in-left">
				<view class="left-img">
					<image :src="myinfo.avator" mode="widthFix"></image>
				</view>
				<view class="left-text">
					<view class="left-text-title">
						{{myinfo.name}}
					</view>
					<view class="left-text-body">
						<view class="text-body-img">
							<image src="http://taotao111.test.upcdn.net/me_fx_crown_z.png" mode="widthFix"></image>
						</view>
						<view class="text-body-words">
							{{myinfo.level}}
						</view>
					</view>
					<view class="left-text-footer">
						<view class="text-footer-img">
							<image src="http://taotao111.test.upcdn.net/me_fx_customer_z.png" mode="widthFix"></image>
						</view>
						<view class="text-footer-words">
							{{myinfo.people}}
						</view>
					</view>
				</view>
			</view>
			<view class="center-in-right">
				<view class="right-title">
					￥{{myinfo.price}}
				</view>
				<view class="right-body">
					可提现佣金(元)
				</view>
				<view class="right-footer">
					立即提现
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'distriCenter',
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
	.distri-center{
		width: 100%;
		height:265rpx;
		background:linear-gradient(0deg,rgba(96,216,255,1) 0%,rgba(13,170,251,1) 100%);
		display: flex;
	}
	.distri-center-in{
		width: 92%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.center-in-left{
		display: flex;
	}
	.left-img{
		width: 140upx;
		height: 140upx;
		margin-right: 20upx;
	}
	.left-text-body,.left-text-footer{
		display: flex;
	}
	.left-text-body{
		margin-top: 20upx;
	}
	.left-text-footer{
		margin-top: 10upx;
	}
	.left-text-title{
		font-size: 32rpx;
		color: #fff;
		margin-top: 20upx;
	}
	.text-body-img,.text-footer-img{
		width: 28rpx;
		height: 22rpx;
		margin-right: 10rpx;
	}
	.text-body-words,.text-footer-words{
		font-size: 22rpx;
		color: #fff;
	}
	.right-footer{
		width: 149rpx;
		height: 45rpx;
		background: url(http://taotao111.test.upcdn.net/me_fx_tx_bg.png) no-repeat center;
		background-size: cover;
		text-align: center;
		line-height: 45rpx;
		text-align: center;
		color: #fff;
		font-size: 23rpx;
		border-radius: 22.5rpx;
	}
	.right-title{
		font-size: 40rpx;
		color: #fff;
		margin-top: 20upx;
	}
	.right-body{
		font-size: 24rpx;
		color: #fff;
		margin-bottom: 10upx;
	}
</style>
