/* 
	mixin封装了uni-app的请求函数uni.request()方法，将其全局拦截和定义设置
 */
export default {
	data() {
		return {

		}
	},
	computed: {

	},
	methods: {
		zeroize(num) {
			return (String(num).length == 1 ? '0' : '') + num;
		},
		add0(m){
			return m<10?'0'+m:m;
		},
		timeFormat(timestamp){
		  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
		    var time = new Date(timestamp);
		    var year = time.getFullYear();
		    var month = time.getMonth()+1;
		    var date = time.getDate();
		    var hours = time.getHours();
		    var minutes = time.getMinutes();
		    var seconds = time.getSeconds();
		    return year+'-'+this.add0(month)+'-'+this.add0(date)+' '+this.add0(hours)+':'+this.add0(minutes)+':'+this.add0(seconds);
		},
		//将时间戳转化为多少分钟前,十位的时间戳
		timestampFormat(timestamp) {

			var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
			var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

			var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
			var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

			var Y = tmDate.getFullYear(),
				m = tmDate.getMonth() + 1,
				d = tmDate.getDate();
			var H = tmDate.getHours(),
				i = tmDate.getMinutes(),
				s = tmDate.getSeconds();

			if (timestampDiff < 60) { // 一分钟以内
				return "刚刚";
			} else if (timestampDiff < 3600) { // 一小时前之内
				return Math.floor(timestampDiff / 60) + "分钟前";
			} else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
				return '今天' + this.zeroize(H) + ':' + this.zeroize(i);
			} else {
				var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
				if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
					return '昨天' + this.zeroize(H) + ':' + this.zeroize(i);
				} else if (curDate.getFullYear() == Y) {
					return this.zeroize(m) + '月' + this.zeroize(d) + '日 ' + this.zeroize(H) + ':' + this.zeroize(i);
				} else {
					return Y + '年' + this.zeroize(m) + '月' + this.zeroize(d) + '日 ' + this.zeroize(H) + ':' + this.zeroize(i);
				}
			}
		}
	}
}