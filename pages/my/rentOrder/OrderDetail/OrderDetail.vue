<template>
	<view>
		<order-top :type="item.type" class="order-top"></order-top>
		<order-person :person="person" class="order-person"></order-person>
		<order-goods :goods="item"></order-goods>
		<order-price :price="price"></order-price>
		<order-message :message="message"></order-message>
		<order-info :info="info"></order-info>
		<order-contact>
			<view slot="center-img" class="con-img">
				<image src="http://taotao111.test.upcdn.net/did_phone_call.png"></image>
			</view>
			<view slot="center-title">
				联系商家
			</view>
		</order-contact>
		<order-footer></order-footer>
	</view>
</template>

<script>
import OrderTop from './childCompos/OrderTop.vue';
import OrderPerson from './childCompos/OrderPerson.vue';
import OrderGoods from './childCompos/OrderGoods.vue';
import OrderPrice from './childCompos/OrderPrice.vue'
import OrderMessage from './childCompos/OrderMessage.vue'
import OrderInfo from './childCompos/OrderInfo.vue'
import OrderContact from './childCompos/OrderContact.vue'
import OrderFooter from './childCompos/OrderFooter.vue'
export default {
	components: {
		OrderTop,
		OrderPerson,
		OrderGoods,
		OrderPrice,
		OrderMessage,
		OrderInfo,
		OrderContact,
		OrderFooter
	},
	data() {
		return {
			item: {},
			person: {
				name: '夏寒寒',
				phone: '18970805401',
				address: '江西省南昌市青山湖区南昌大学14栋603'
			},
			price: [{ left: '商品金额', price: 137.4 }, { left: '商品押金', price: 50 }, { left: '配送费', price: 50 }],
			message:'请下午5点后帮我配送 谢谢',
			info:[{left:'订单编号',info:'2444354345443'},{left:'下单时间',info:'2019-12-02 11:00'},{left:'支付时间',info:'2019-12-02 11:00'},{left:'支付方式',info:'微信支付'}]
		};
	},
	onLoad(option) {
		const item = JSON.parse(decodeURIComponent(option.item));
		console.log(item);
		this.item = item;
	}
};
</script>

<style>
.order-top {
	position: relative;
}
.order-person {
	position: absolute;
	top: 170upx;
	left: 4%;
}
.con-img{
	width: 30upx;
	height: 30upx;
	margin-right: 20upx;
}
.con-img image{
	width: 100%;
	height: 100%;
}
</style>
