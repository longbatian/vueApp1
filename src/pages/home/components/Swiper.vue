<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			    <swiper-slide v-for="item of swiperList" :key="item.id">
			    	<img class="swiper-img" :src="item.imgUrl">
			    </swiper-slide>
			    
			    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
	
</template>
<script>
import {mapState} from 'vuex'
export default{
	name:'HomeSwiper',
	computed:{
	  	...mapState(['city']),
	 },
	data(){
		return{
			swiperOption:{
				// autoplay: 3000,
				pagination: '.swiper-pagination',
				loop:true
			},
			swiperList:[{
				id:'0001',
				imgUrl:"http://www.scjuchuang.com//imgupdata/20180712/59f4e92f06951a57808c6185a24ceb1f.jpg"
			},{
				id:'0002',
				imgUrl:"http://www.scjuchuang.com//imgupdata/20180607/899ee34384fd52bf215afb2964ad5baa.jpg"
			}]
		}
	}
}
</script>
<style lang="less" scoped>
.wrapper{
	overflow: hidden;;
	width: 100%;
	height: 0;
	padding-bottom: 31.25%;
	background:#eee;

	
}
 .swiper-pagination-bullet{
		background:red!important;
	}
	.swiper-img{
		width: 100%;
	}	
</style>