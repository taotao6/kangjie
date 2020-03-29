<template>
	<view class="change">
		<change-item :change="change">
			
		</change-item>
	</view>
</template>

<script>
	import changeItem from './childComps/changeItem.vue'
	export default{
		components:{
			changeItem
		},
		data(){
			return {
				change:[
					{name:'消费',time:'2017-09-07 09:49',price:'-19.50'},
					{name:'消费',time:'2017-09-07 09:49',price:'-19.50'},
					{name:'微信充值',time:'2017-09-07 09:49',price:'+20.00'},
					{name:'支付宝充值',time:'2017-09-07 09:49',price:'+20.00'},
				]
			}
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
</style>
