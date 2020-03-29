<template>
	<view class="message">
		<view class="message-in">
			买家留言：{{message}}
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			message:{
				type:String,
				default(){
					return ''
				}
			}
		}
	}
</script>

<style scoped>
	.message{
		width: 100%;
		background-color: #FFFFFF;
		padding: 28upx 0;
		margin: 10upx 0 20upx 0;
	}
	.message-in{
		width: 92%;
		margin: 0 auto;
		font-size: 28upx;
	}
</style>
