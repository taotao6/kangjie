<template>
	<view class="">
		<districen-title :myinfo="myinfo"></districen-title>
		<districen-middle :myinfo="myinfo"></districen-middle>
		<districen-footer :mytest="mytest"></districen-footer>
	</view>
</template>

<script>
	import districenTitle from './districenComps/districenTitle.vue'
	import districenMiddle from './districenComps/districenMiddle.vue'
	import districenFooter from './districenComps/districenFooter.vue'
	export default{
		components:{districenTitle,districenMiddle,districenFooter},
		data(){
			return {
				myinfo:{
					avator:'http://taotao111.test.upcdn.net/icos.png',
					name:'梦游的爱丽丝',
					level:'一级分销商',
					people:12,
					price:120.00,
					commission:568.00,
					finishCom:288.00
				},
				mytest:[
					{img:'me_fx_team_z.png',name:'我的团队'},
					{img:'me_fx_share_z.png',name:'我要推广'},
					{img:'me_fx_order_z.png',name:'分销订单'},
					{img:'me_fx_statistics_z.png',name:'佣金明细'},
					{img:'me_fx_cash_withdrawal_z.png',name:'我要提现'},
					{img:'me_fx_bank_card_z.png',name:'银行卡'}
				]
			}
		}
	}
</script>

<style>
</style>
