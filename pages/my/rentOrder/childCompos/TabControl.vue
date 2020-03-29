<template>
	<view class="main">
		<view class="tab-control">
			<view class="tab-control-item" :class="{active:currentIndex === index}" v-for="(item,index) in titles"  @tap="itemClick(index)" :key="index">
				<text>{{item}}</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return [];
				}
			}
		},
		data(){
			return{
				currentIndex:1
			}
			
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('itemClick',index)
				console.log(index)
			}
		}
		
	}
	
	
</script>

<style scoped>
	.main{
		width: 100%;
		background-color: white;
		padding-top: 19upx;
		padding-bottom: 19upx;
		border-bottom: 1upx solid #eee;
	}
	.tab-control{
		display: flex;
		font-size: 30upx;
		background-color: #fff;
		color: #0DAAFB;
		border: 1upx solid #0DAAFB;
		width: 385upx;
		height: 61upx;
		text-align: center;
		margin: 0upx auto;
		align-items: center;
	}
	.tab-control-item{
		flex: 1;
		height: 100%;
		line-height: 61upx;
	}
	.active{
		color: #fff;
		background-color: #0DAAFB;
	}
</style>
