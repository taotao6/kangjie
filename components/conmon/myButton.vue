<template>
	<view class="myButton">
		<slot name="text">确认</slot>
	</view>
</template>

<script>
</script>

<style>
	.myButton{
		width: 100%;
		height: 80upx;
		border-radius: 40upx;
		line-height: 80upx;
		text-align: center;
		background-color: #0DAAFB;
		color: #fff;
		font-size: 32upx;
	}
</style>
