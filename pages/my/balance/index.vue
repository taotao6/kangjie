<template>
	<view>
		<view class="balance">
			<view class="balance-title">
				<view class="balance-title-top">{{ myBalance }}</view>
				<view class="balance-title-body"><text>我的余额(元)</text></view>
			</view>
		</view>
		<row @toSome="toRecharge">
			<image slot="img" src="http://taotao111.test.upcdn.net/me_qb_jb.png" mode="widthFix"></image>
			<text slot="content">充值</text>
		</row>
		<row @toSome="toChange">
			<image slot="img" src="http://taotao111.test.upcdn.net/me_qb_mx.png" mode="widthFix"></image>
			<text slot="content">零钱明细</text>
		</row>
	</view>
</template>

<script>
import row from '@/components/conmon/row.vue';
export default {
	components: {
		row
	},
	data() {
		return {
			Balance: 256
		};
	},
	computed: {
		myBalance() {
			return this.Balance.toFixed(2);
		}
	},
	methods: {
		toRecharge() {
			uni.navigateTo({
				url: './recharge'
			});
		},
		toChange() {
			uni.navigateTo({
				url: './change'
			});
		}
	}
};
</script>

<style>
.balance {
	width: 100%;
	height: 322upx;
	background: url(http://taotao111.test.upcdn.net/me_fx_bg.png);
	display: flex;
	align-items: center;
	justify-content: center;
}
.balance-title {
	text-align: center;
}
.balance-title-top {
	font-size: 80upx;
	color: #fff;
}
.balance-title-body {
	font-size: 30upx;
	color: #fff;
	margin-top: 20upx;
}
</style>
