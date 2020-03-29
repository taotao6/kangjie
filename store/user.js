let token = uni.getStorageSync('token') || null;
const user = {
	namespaced:true,
	state:{
		token:token,
		http:'http://dingdong-api.nodebook.top/h5/',
		userList:{ //用户信息
			tel:null,
			username:''
		},
	},
	mutations:{
		addUserlist(state,userlist){
			state.userList = userlist
		},
		addToken(state,token){
			state.token = token
		}
	},
	actions:{
		
	}
}
export default user