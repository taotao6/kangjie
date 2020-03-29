<template>
	<view>
		<view class="listNone" v-if="list == ''">
			<view class="listNone-img"><image :src="imgURL + 'shopping_trolly_empty.png'" mode="widthFix"></image></view>
			<view class="listNone-text">目前暂没有地址哦~</view>
		</view>
		<view class="address" v-for="(item, index) in list" :key="index">
			<view class="address-in">
				<view class="address-title">
					<view class="address-title-left">
						<text>{{ item.name }}</text>
					</view>
					<view class="address-title-right">
						<text>{{ item.phone }}</text>
					</view>
				</view>
				<view class="address-body">{{ item.address }}</view>
				<view class="address-footer">
					<view class="address-footer-left"><evan-radio v-model="value" :label="item.id">默认地址</evan-radio></view>
					<view class="address-footer-right">
						<view class="footer-right-1" @tap="goEditAdress(item)">
							<view class="right-1-img"><image src="http://taotao111.test.upcdn.net/edit-ico.png" mode="widthFix"></image></view>
							<view>编辑</view>
						</view>
						<view class="footer-right-2" @tap="delate(item,index)">
							<view class="right-2-img"><image src="http://taotao111.test.upcdn.net/class_icon_clea.png" mode="widthFix"></image></view>
							<view>删除</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="addNew" @tap="goAdress"><text>添加新地址</text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '1',
			info: [
				{ name: '夏寒寒', phone: '15912342103', address: '江西省南昌市青云谱区徐家坊街道解放西路徐家坊街道解放西路', value: '1' },
				{ name: '夏寒寒', phone: '15912342103', address: '江西省南昌市青云谱区徐家坊街道解放西路徐家坊街道解放西路', value: '2' }
			],
			list: [],
			shows: 0
		};
	},
	onNavigationBarButtonTap(e) {
		console.log(e);
	},
	computed: {
		imgURL() {
			return getApp().globalData.imgUrl;
		}
	},
	onLoad() {
		this.$https('index/searchAddress', 'get', {}).then(res => {
			console.log(res);
			let list = [];
			for (let i = 0; i < res.data.data.length; i++) {
				let listJson = {
					id: res.data.data[i].id,
					phone: res.data.data[i].address_phone,
					name: res.data.data[i].address_name,
					address: res.data.data[i].address_province + res.data.data[i].address_city + res.data.data[i].address_county + res.data.data[i].address_addressDetail
				};
				list.push(listJson);
			}

			this.list = list;
		});
	},
	methods: {
		delate(item,index) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '你确定删除该地址吗',
				success(res) {
					if (res.confirm) {
						// this.info.splice(index,1)
						that.$https('index/deleteAdd', 'post', {
							id: item.id
						}).then(res => {
							that.list.splice(index, 1);
							
						});
					}
				}
			});
		},
		goAdress() {
			uni.navigateTo({
				url: './addadress'
			});
		},
		goEditAdress(item) {
			uni.navigateTo({
				url: './addadress?id=' + item.id + '&shows=' + this.shows
			});
		}
	}
};
</script>

<style>
page {
	overflow: hidden;
}
.listNone {
	height: calc(100vh - 100rpx);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.listNone-img {
	width: 324rpx;
	height: 306rpx;
}
.listNone-text {
	font-size: 14rpx;
	color: #666;
	margin-top: 10rpx;
}
.address {
	width: 100%;
	background-color: #fff;
	padding-top: 20upx;
	padding-bottom: 20upx;
	margin-bottom: 30upx;
}
.address-in {
	width: 92%;
	margin: 0 auto;
}
.address-title {
	display: flex;
	color: black;
	justify-content: space-between;
	font-size: 32upx;
}
.address-body {
	color: #666666;
	font-size: 26upx;
	margin-top: 20upx;
	margin-bottom: 40upx;
	line-height: 1.5;
}
.address-footer {
	display: flex;
}
.address-footer-left {
	width: 65%;
}
.address-footer-right {
	flex: 1;
	display: flex;
	justify-content: space-between;
}
.footer-right-1,
.footer-right-2 {
	display: flex;
	font-size: 24upx;
	color: #969696;
	align-items: center;
	vertical-align: bottom;
}
.right-1-img,
.right-2-img {
	width: 30upx;
	height: 30upx;
	margin-right: 10upx;
}
.addNew {
	position: fixed;
	bottom: 0;
	width: 100vw;
	height: 100upx;
	background-color: #0daafb;
	line-height: 100upx;
	text-align: center;
	color: #fff;
	font-size: 32upx;
}
</style>
