<template>
	<view class="">
		<view class="good-list" v-for="(item, index1) in goodList" :key="index1">
			<view class="good-list-in">
				<view class="good-list-title">
					<view class="list-title-left">
						<text>订单编号：{{ item.orderNumber }}</text>
					</view>
					<view class="list-title-right">
						<text>{{ item.type }}</text>
					</view>
				</view>

				<view v-for="(item1, index) in goodList[index1].info" :key="index" class="sub-item" @tap="toDetail(item)">
					<view class="sub-item-img"><image :src="item1.image" :key="item1.image" mode="widthFix" /></view>
					<view class="sub-item-content">
						<view class="item-title">
							<text>{{ item1.title }}</text>
						</view>
						<view class="item-time">{{ item1.time }}</view>
						<view class="item-deposit">{{ item1.deposit }}</view>
						<view class="item-bottom">
							<view class="item-price">￥{{ item1.price }}</view>
							<view class="item-price-icon">X{{ item1.number }}</view>
						</view>
					</view>
				</view>

				<view class="good-list-all">
					<view class="list-all-in">
						<view class="list-all-left"><text>共两件商品</text></view>
						<view class="list-all-right">
							合计：
							<text class="red">￥</text>
							<text class="red middle">256.00</text>
						</view>
					</view>
				</view>

				<view class="good-list-footer" v-if="item.type == '待付款'">
					<view class="list-footer-in">
						<view class="list-footer-left" @tap="cancel"><text>取消订单</text></view>
						<view class="list-footer-right"><text>立即支付</text></view>
					</view>
				</view>

				<view class="good-list-footer" v-else-if="item.type == '配送中'">
					<view class="list-footer-in" @tap="cancel">
						<view class="list-footer-right"><text>确认到达</text></view>
					</view>
				</view>

				<view class="good-list-footer" v-else>
					<view class="list-footer-in">
						<view class="list-footer-left"><text>查看详情</text></view>
					</view>
				</view>
				
				<s-popup v-if="item.type == '待付款'" custom-class="demo-popup" position="center" v-model="cancelVisible" class="canBox">
					<cancel-box @quxiao="close"><text slot="title">您确定要取消订单？</text></cancel-box>
				</s-popup>
				
				<s-popup v-else-if="item.type == '配送中'" custom-class="demo-popup" position="center" v-model="cancelVisible" class="canBox">
					<cancel-box @quxiao="close"><text slot="title">您确认您的订单已经到达了！</text></cancel-box>
				</s-popup>
				
			</view>
		</view>
	</view>
</template>

<script>
import sPopup from '@/components/s-popup/index.vue';
import cancelBox from '@/components/conmon/cancelBox.vue';
export default {
	name: 'GoodList',
	components: {
		sPopup,
		cancelBox
	},
	props: {
		goodList: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			info: [],
			cancelVisible: false
		};
	},
	created() {
		this.$nextTick(function() {
			console.log(this.goodList[0].info);
		});
	},
	methods: {
		close() {
			this.cancelVisible = false;
		},
		cancel() {
			this.cancelVisible = true;
		},
		toDetail(item) {
			uni.navigateTo({
				url: './OrderDetail/OrderDetail?item=' + encodeURIComponent(JSON.stringify(item))
			});
		}
	}
};
</script>

<style lang="scss">
.demo-popup {
	.s-popup-wrapper {
		border-radius: 20upx;
		background-color: #ff0000;
	}
}
.good-list {
	width: 100%;
	margin: 20upx 0;
	background-color: white;
	padding: 20upx 0;
}
.good-list-in {
	width: 92%;
	margin: 0 auto;
}
.good-list-title {
	display: flex;
	justify-content: space-between;
}
.list-title-left {
	font-size: 28upx;
	color: #666666;
}
.list-title-right {
	font-size: 28upx;
	color: #0DAAFB;
}
.sub-item {
	display: flex;
	margin-top: 30upx;
}

.sub-item-img {
	width: 170upx;
	height: 150upx;
}
.sub-item-content {
	margin-left: 20upx;
}
.item-title {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 30upx;
	width: 500upx;
	/* height: 28upx; */
}
.item-time {
	font-size: 20upx;
	margin-bottom: 10upx;
	color: #666;
}
.item-deposit {
	font-size: 20upx;
	color: #f37200;
	margin-bottom: 10upx;
}
.item-price {
	font-size: 30upx;
	color: #f14645;
	margin-bottom: 10upx;
}
.item-bottom {
	display: flex;
	justify-content: space-between;
}
.item-price-icon {
	width: 40upx;
	height: 40upx;
	font-size: 28upx;
}
.good-list-all {
	margin-top: 20upx;
	display: flex;
	flex-direction: row-reverse;
	font-size: 24upx;
}
.list-all-in {
	display: flex;
	align-items: center;
}
.list-all-left {
	margin-right: 20upx;
}
.good-list-footer {
	display: flex;
	flex-direction: row-reverse;
	margin-top: 26upx;
}
.list-footer-in {
	display: flex;
	align-items: center;
}
.list-footer-left,
.list-footer-right {
	width: 152upx;
	height: 54upx;
	border-radius: 27upx;
	font-size: 26upx;
	line-height: 54upx;
	text-align: center;
}
.list-footer-left {
	border: 1px solid #c9c9c9;
}
.list-footer-right {
	border: 1px solid #0DAAFB;
	color: #0DAAFB;
	margin-left: 30upx;
}
</style>
