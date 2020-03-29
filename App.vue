<script>
	import pageAnimation from './components/page-animation'
	export default {
		mixins: [pageAnimation],
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
			    success: function (res) {
			        if(res.platform == 'ios' || res.platform == 'android'){}
					else{
						uni.showModal({
							title:'温馨提示',
							content:'请在手机上查看',
							success:function(res){
								if(res.confirm){
									console.log('用户点击了确定')
								}
								else if(res.cancel){
									console.log('用户点击了确定')
								}
							}
						})
					}
			    }
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			imgUrl:'http://taotao111.test.upcdn.net/'
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import url("assets/css/main.css");
	
	/*每个页面公共css */
</style>
