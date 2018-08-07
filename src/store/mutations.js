export default{
		changeCity (state,city){
			state.city=city
			try{
				defaultCity=localStorage.city
			}catch(e){

			}
			localStorage.city=city
		}
}