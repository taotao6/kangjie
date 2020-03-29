<template>
	<view class="price-button">
		<view class="price-button-item" v-for="(item,index) in priceAll" :key="index" @tap="itemClick(index)" :class="{active:current == index}">
			{{item}}元
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			priceAll:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				current:0
			}
		},
		methods:{
			itemClick(index){
				this.current = index
				this.$emit('itemClick',index)
			}
		}
	}
</script>

<style>
	.price-button{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.price-button-item{
		width: 208upx;
		height: 134upx;
		border-radius: 10upx;
		text-align: center;
		line-height: 134upx;
		color: #333333;
		/* border: 1px solid #0DAAFB; */
		border: 1px solid #DCDCDC;
		margin-top: 30upx;
		font-size: 36upx;
	}
	.active{
		color: #0DAAFB;
		border: 1px solid #0DAAFB;
	}
</style>
