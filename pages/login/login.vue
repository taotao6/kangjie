<template>
	<view class="login">
		<view class="login-in">
			<view>
				<input class="login-phone" cursor-spacing="20"  v-model="phone" type="number" placeholder="输入手机号(新手机自动注册)"/>
			</view>
			<view class="login-pass">
				<input class="login-phone" v-model="code" type="number" placeholder="输入手机验证码">
				<view class="login-pass-text" :style="phoneOff?'background:#0DAAFB':''" @click="sendCode">
					{{codeInp >= 5 ? '获取验证码':'剩余'+codeInp+'秒'}}
				</view>
			</view>
			<view class="login-btn" @click='loginBtn'>
				<view class="flex flex-direction">
					<button class="cu-btn bg-blue margin-tb-sm lg">登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				phone:undefined,
				code:undefined,
				codeNums:null,//验证码
				codeInp:5,//倒计时
				phoneOff:false,//验证手机号是否通过
				codeOff:false,//验证码是否通过
				codeTime:null,//定时器
				codeStart:false
			}
		},
		methods:{
			sendCode(){
				if(this.phoneOff){
					let that = this
					let codeNums = parseInt(Math.random()*10000)
					that.codeStart = false
					uni.showModal({
						title:'提示',
						content:'你的验证码是'+codeNums,
						success(res) {
							if(res.confirm){
								that.codeNums = codeNums
								that.codeStart = true
								that.codeInpSet()
							}
						}
					})
				}else{
					uni.showToast({
						title:'请输入正确的手机号',
						icon:'none',
						duration:1500
					})
				}
			},
			codeInpSet(){
				let that = this;
				clearInterval(that.codeTime)
				that.codeInp = 5
				that.codeTime = setInterval(()=>{
					if(that.codeInp>=1){
						that.codeInp--
					}else{
						that.codeInp = 5
						that.codeNums = null
						that.codeStart = false
						clearInterval(that.codeTime)
					}
				},1000)
				
			},
			loginBtn(){//登录按钮
				let that = this;
				if(that.codeOff){
					that.$http('nottoken/login','post',{
						phone:that.phone
					}).then(res=>{
						console.log(res)
						if(res.data.code === 0){
							that.$store.commit('user/addToken',res.data.data.token)
							uni.setStorageSync('token',res.data.data.token)
							uni.switchTab({
								url:'../index/index'
							})
						}
					})
				}else{
					uni.showToast({
						title:"请输入正确的验证码",
						icon:'none',
						duration:1500
					})
				}
			}
		},
		watch:{
			phone(news,old){
			let rg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
			this.phoneOff = rg.test(news)
			},
			code(news,old){
				if(news == this.codeNums && news!=null)
				{
					this.codeOff = true
				}else{
					this.codeOff = false
				}
			}
		}
		
	}
</script>

<style scoped>
	page{
		overflow: hidden;
	}
	.login{
		width: 100%;
		
	}
	.login-in{
		width: 92%;
		margin: 0 auto;
	}
	.login-phone{
		box-sizing: border-box;
		width: 100%;
		height: 100rpx;
		border: 1px solid #0DAAFB;
		border-radius: 50rpx;
		margin-top: 50rpx;
		padding-left: 50upx;
		font-size: 20rpx;
	}
	.login-pass{
		position: relative;
	}
	.login-pass-text{
		width: 150rpx;
		height: 60rpx;
		background-color: #ccc;
		text-align: center;
		line-height: 60rpx;
		color: #fff;
		border-radius: 20rpx;
		position: absolute;
		right: 25rpx;
		top: 20rpx;
		padding:0 5rpx;
		font-size:13rpx;
	}
	.login-btn{
		margin-top:30rpx;
	}
</style>
