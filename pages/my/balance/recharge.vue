<template>
	<view class="recharge">
		<view class="recharge-in">
			<view class="title">
				<text>充值金额：</text>
			</view>
			<view class="price-input">
				<input type="number" v-model="price" placeholder="请输入充值金额，最低1元"/>
			</view>
			<view class="price-list">
				<price-button :priceAll="priceAll" @itemClick="itemClick"></price-button>
			</view>
			<my-button class="myButton" @click.native="chongzhi"></my-button>
		</view>
	</view>
</template>

<script>
	import priceButton from '@/components/conmon/priceButton.vue'
	import myButton from '@/components/conmon/myButton.vue'
	export default{
		components:{
			priceButton,
			myButton,
		},
		data(){
			return {
				price:'',
				priceAll:[500,1000,1500,2000,2500,3000]
			}
		},
		methods:{
			chongzhi(){
				uni.navigateBack({
					delta:1
				})
			},
			itemClick(index)
			{
				switch(index){
					case 0:
					console.log(111)
					 this.price=500
					break;
					case 1:
					 this.price=1000
					break;
					case 2:
					 this.price=1500
					break;
					case 3:
					 this.price=2000
					break;
					case 4:
					 this.price=2500
					break;
					case 5:
					 this.price=3000
					break;
				}
			}
		}
	}
</script>

<style>
	page{
		background-color: #FFFFFF;
		overflow: hidden;
	}
	.recharge{
		width: 100%;
	}
	.recharge-in{
		width: 92%;
		margin: 0 auto;
	}
	.title{
		margin-top: 30upx;
		font-size: 36upx;
		font-weight: 600;
	}
	.price-input{
		margin: 40upx 0;
		display: block;
		width: 100%;
		padding: 20upx 30upx;
		background-color: #F5F5F5;
		font-size: 30upx;
	}
	.myButton{
		margin-top: 200upx;
	}
</style>
