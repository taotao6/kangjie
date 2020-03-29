<template>
	<view>
		<view class="infos">
			<view class="infos-in">
				<view class="infos-name">
					<view class="infos-name-left"><text>收货人姓名</text></view>
					<view class="infos-name-right"><input type="text" value="" placeholder="请输入姓名" /></view>
				</view>
				<view class="infos-phone">
					<view class="infos-phone-left"><text>联系电话</text></view>
					<view class="infos-phone-right"><input type="number" value="" placeholder="请输入手机号码" /></view>
				</view>
				<view class="infos-region">
					<view class="infos-region-left"><text>所在地区</text></view>
					<view class="infos-region-right" @tap="openAddres">
						<text :class="[!pickerText ? 'gray' : '']">{{ pickerText ? pickerText : beforeText }}</text>
						<view class="region-img"><image src="http://taotao111.test.upcdn.net/home_se_xlt.png"></image></view>
					</view>
					<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#fff"></simple-address>
				</view>
				<view class="infos-adress">
					<view class="infos-adress">
						<view class="infos-adress-left"><text>详细地址</text></view>
						<view class="infos-adress-right"><input type="text" value="" placeholder="请输入详细地址" /></view>
					</view>
				</view>
			</view>
		</view>
		<view class="info-moren-out">
			<view class="infos-moren">
				<view class="infos-moren-left"><text>设为默认地址</text></view>
				<view class="infos-moren-right">
					<evan-checkbox v-model="check" shape="square"></evan-checkbox>
				</view>
			</view>
		</view>
		<view class="save" @tap="onSave">
			<view class="save-in"><text>保存</text></view>
		</view>
	</view>
</template>

<script>
import EvanCheckbox from '@/components/evan-checkbox/evan-checkbox.vue'
import simpleAddress from '@/components/simple-address/simple-address.nvue';
export default {
	components: {
		simpleAddress,EvanCheckbox
	},
	data() {
		return {
			check:true,
			region: ['广东省', '广州市', '海珠区'],
			cityPickerValueDefault: [0, 0, 1],
			pickerText: '',
			beforeText: '请选择'
		};
	},
	methods: {
		openAddres() {
			this.$refs.simpleAddress.open();
		},
		onConfirm(e) {
			let pickerText = JSON.stringify(e.label);
			this.pickerText = pickerText.substring(1, pickerText.length - 1);
		},
		onSave(){
			uni.navigateBack({
				url:"../order.vue"
			})
		}
		
	}
};
</script>

<style scoped>
.gray {
	color: #999;
}
.RememberCheck{
	color: #adadad !important;
}
.infos {
	width: 100%;
	background-color: #fff;
}
.infos-in {
	width: 92%;
	margin: 0 auto;
}
.infos-name {
	width: 100%;
	height: 112upx;
	align-items: center;
	display: flex;
}
.infos-name-left {
	color: #333333;
	font-size: 28upx;
	width: 20%;
}
.infos-name-right {
	flex: 1;
	margin-left: 40upx;
}
.infos-name-right input {
	font-size: 24upx;
}

.infos-phone {
	width: 100%;
	height: 112upx;
	align-items: center;
	display: flex;
	border-top: 1upx solid #eee;
}
.infos-phone-left {
	color: #333333;
	font-size: 28upx;
	width: 20%;
}
.infos-phone-right {
	flex: 1;
	margin-left: 40upx;
}
.infos-phone-right input {
	font-size: 24upx;
}

.infos-region {
	width: 100%;
	height: 112upx;
	align-items: center;
	display: flex;
	border-top: 1upx solid #eee;
	/* justify-content: space-between; */
}
.infos-region-left {
	color: #333333;
	font-size: 28upx;
	width: 20%;
}
.infos-region-right {
	/* flex: 1; */
	display: flex;
	align-items: center;
	/* color: #999; */
	margin-left: 40upx;
}
.region-img {
	width: 24upx;
	height: 20upx;
}
.region-img image {
	width: 100%;
	height: 100%;
}
.infos-adress {
	width: 100%;
	height: 112upx;
	align-items: center;
	display: flex;
	border-top: 1upx solid #eee;
}
.infos-adress-left {
	color: #333333;
	font-size: 28upx;
	width: 20%;
}
.infos-adress-right {
	flex: 1;
	margin-left: 40upx;
}
.infos-adress-right input {
	font-size: 24upx;
}

.info-moren-out {
	width: 100%;

	background-color: #fff;
}
.infos-moren {
	width: 92%;
	margin: 0 auto;
	height: 112upx;
	line-height: 112upx;
	align-items: center;
	display: flex;
	border-top: 1upx solid #eee;
	justify-content: space-between;
	margin-top: 40upx;
}
.infos-moren-left {
	color: #333333;
	font-size: 28upx;
}
.infos-moren-right {
	flex: 1;
	margin-left: 440upx;
}
.save {
	width: 100%;
}
.save-in {
	width: 92%;
	margin: 0 auto;
	background-color: #0daafb;
	height: 80upx;
	border-radius: 40upx;
	color: #fff;
	font-size: 32upx;
	line-height: 80upx;
	text-align: center;
	margin-top: 200upx;
}
</style>
