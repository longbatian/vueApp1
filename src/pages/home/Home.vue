<template>
<div>
	<home-header :city="city"></home-header>
	<home-swiper></home-swiper>
	<home-icons></home-icons>
  <home-recomend></home-recomend> 
	<home-weekend></home-weekend>	
</div>
</template>
<script>
import HomeHeader from './components/Header';	
import HomeSwiper from './components/Swiper';	
import HomeIcons from './components/Icons';	
import HomeRecomend from './components/Recommend';  
import HomeWeekend from './components/Weekend';	
import axios from 'axios';
export default{
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
    HomeRecomend,
  	HomeWeekend
  },
  data(){
    return {
      city: '',
      swiperList:[],
      iconList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) { 
      const data=eval('(' + res.data + ')');
      this.city=data.data.citys;
      // console.log(eval('(' + res.data + ')'))
      // this.swiperList=res.data;
      // this.iconList=res.data;
      // this.weekendList=res.data;
     
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}

</script>

<style>

</style>
