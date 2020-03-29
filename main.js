import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false

const https =  require('./http/http.js')

//无token请求
Vue.prototype.$http = https.request
//含token的请求
Vue.prototype.$https = https.requests

Vue.prototype.$imgUrl = ' http://taotao111.test.upcdn.net/'
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
