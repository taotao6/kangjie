<template>
	<view class="order-contact">
		<view class="contact-center">
			<slot name="center-img" class="order-center-img">
				
			</slot>
			<slot name="center-title" class="order-center-title">
				
			</slot>
		</view>
		
	</view>
</template>

<script>
</script>

<style scoped>
	.order-contact{
		width: 100%;
		background-color: white;
		padding: 30upx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20upx 0;
	}
	.contact-center{
		display: flex;
		color: #0DAAFB;
		font-size: 30upx;
		align-items: center;
	}
	.order-center-img{
		width: 30upx;
		height: 30upx;
		margin-right: 20upx;
	}
</style>
