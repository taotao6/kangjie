<template>
	<view class="mian">
		<view class="nav-control">
			<view class="nav-control-item" v-for="(item,index) in navItems" @tap="itemClick(index)" :class="{active:currentIndex == index}" :key="index">
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'NavControl',
		props:{
			navItems:{
				type:Array,
				default(){
					return ['全部','待付款','配送中','租贷中','已完成'];
				}
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('itemClick',index)
			}
		}
	}
</script>

<style>
	.mian{
		width: 100%;
		background-color: white;
	}
	.nav-control{
		width: 92%;
		margin: 0 auto;
		display: flex;
		font-size: 28upx;
		justify-content:space-between; 
	}
	.nav-control-item{
		padding-bottom: 32upx;
		padding-top: 34upx;
	}
	.nav-control-item.active{
		color: #0DAAFB;
		border-bottom: 3upx solid #0DAAFB;
	}
</style>
