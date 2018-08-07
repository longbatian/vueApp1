<template>
	<div>
		<city-header></city-header>
		<city-search :cityes='cityes'></city-search>
		<city-list 
		:letter="letter"
		:cityes="cityes" 
		:hotCityes="hotCityes"
		></city-list>
		<city-alphabet 
		@change="handleLetterChange"
		:cityes="cityes"></city-alphabet>
	</div>
</template>
<script>
import axios from 'axios';
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/CityList'
import CityAlphabet from './components/Alphabet'
export default{
	name:'City',
	components:{
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data(){
		return{
			cityes:{},
			hotCityes:[],
			letter:''
		}
	},
	methods:{
		getCityInfo () {
			axios.get('/api/city.json')
				.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc(res){
			res=res.data;
			if(res.ret && res.data){
				const data=res.data;
				this.cityes=data.cities;
				this.hotCityes=data.hotCities;
			}
		},
		handleLetterChange(letter){
			this.letter=letter;
		}
	},
	mounted(){
		this.getCityInfo()
	}
}
</script>
<style lang="less" scoped>
	
</style>