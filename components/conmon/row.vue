<template>
	<view class="row" @tap="toSome">
		<view class="row-in">
			<view class="row-in-left">
				<view class="left-img">
					<slot name="img"><image src="http://taotao111.test.upcdn.net/me_qb_jb.png" mode="widthFix" style="height: auto;"></image></slot>
				</view>
				<view class="left-content">
					<slot name="content">默认说明</slot>
				</view>
			</view>
			<view class="row-in-right">
				<slot name="right"><image src="http://taotao111.test.upcdn.net/me_tg_jr.png" mode="widthFix" style="height: auto;"></image></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			toSome(){
				this.$emit('toSome')
			}
		}
	}
</script>

<style>
	.row{
		width: 100%;
		background-color: #fff;
	}
	.row-in{
		width: 92%;
		height: 110upx;
		line-height: 110upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #eee;
	}
	.row-in-left{
		display: flex;
		font-size: 30upx;
	}
	.left-img{
		width: 32upx;
		height: 31upx;
	}
	.left-content{
		font-size: 30upx;
		margin-left: 20upx;
	}
	.row-in-right{
		width: 14upx;
		height: 26upx;
	}
</style>
