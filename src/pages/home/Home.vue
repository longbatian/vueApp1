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
import {mapState} from 'vuex'
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
      // city: '',
      lastCity:'',
      swiperList:[],
      iconList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) { 
      if(res.ret&&res.data){
        const data=eval('(' + res.data + ')');
        this.city=data.data.citys;
        // console.log(eval('(' + res.data + ')'))
        this.swiperList=data.swiperList;
        this.iconList=data.iconList;
        this.weekendList=data.weekendList;
      }
    }
  },
  mounted () {
   this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}

</script>

<style>

</style>
