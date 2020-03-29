//uni-app内置有区别环境的不同，可以直接通过process.env.NODE_ENV获取
//！！！注意，这里的接口当然是不能访问的，正式的api接口是商业保密的，后期抽时间用node来补上吧。项目无法正常接口请求，请谅解。但是跟着我的思路，把一个项目跑起来是没有任何问题的。
let BASE_URL = 'http://127.0.0.1:5005/h5/'
if (process.env.NODE_ENV == 'development') {
    BASE_URL = 'http://127.0.0.1:5005/h5/' // qe环境 本地开发环境
} else {
    BASE_URL = 'http://127.0.0.1:5005/h5/' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wxeb407bb6c397aa4c',
	appKey: '675aeecfdac05b6b82b9910a8fd00e88'
}

export { config }
