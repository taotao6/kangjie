const car = {
	namespaced:true,
	state:{
		car:uni.getStorageSync("shopInfo") || [], //购物车数组
	},
	mutations:{
		addCar(state,shopInfo){
			let car = state.car
			let haveCar = car.some(item => {
				return item.id === shopInfo.id
			})
			
			if(haveCar){
				for(let i=0;i<car.length;i++){
					if(car[i].id === shopInfo.id)
					{
						car[i].number = car[i].number+1
					}
				}
			}
			else{
				if(car.length > 0){
					car = [...car,shopInfo]
				}
				else{
					car.push(shopInfo)
				}
				state.car = car
			}
			uni.setStorage({
				key:'shopInfo',
				data:car
			})
			
			console.log() 
		}
	}
	
}
export default car