<template>
	<div class="icons">
		<swiper >
			    <swiper-slide v-for="(page,index) of pages" :key="index">
				    <div class="icon" 
				    v-for='item of page' 
				    :key="item.id">
						<div class="icon-img">
							<img class="icon-img-content" :src=item.imgUrl alt="">
						</div>
						<p class="icon-desc">{{item.desc}}</p>
					</div>
			    </swiper-slide>
			 
		   
		</swiper>	
	</div>
</template>
<script>
export default{
	name:'HomeIcons',
	data(){
		return{
			// swiperOption:{},
			iconList:[{
				id:'0001',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/zhongxichengyao.png",
				desc:'景点门票'
			},{
				id:'0002',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/zhaunke.png",
				desc:'滑雪季'
			},{
				id:'0003',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/baojianping.png",
				desc:'泡温泉'
			},{
				id:'0004',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/qixie.png",
				desc:'董志远'
			},{
				id:'0006',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/mingxing.png",
				desc:'景点门票'
			},{
				id:'0007',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/zhongxichengyao.png",
				desc:'滑雪季'
			},{
				id:'0008',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/baihuo.png",
				desc:'泡温泉'
			},{
				id:'0005',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/zhongxichengyao.png",
				desc:'董志远'
			},{
				id:'0009',
				imgUrl:"http://www.scjuchuang.com//static/menu_img/zhongxichengyao.png",
				desc:'董志远'
			}]
		}
	},
	computed:{
			pages () {
				const pages=[];
				this.iconList.forEach((item,index)=>{
					const page=Math.floor(index/8)
					if(!pages[page]){
						pages[page]=[] 
					}
					pages[page].push(item)
				})
				return pages
			}


		}
}
</script>
<style lang="less" scoped>
	// @import '~styles/varibles.styl'  
	.icons{
		height: 0;
		padding-bottom: 50%;
		overflow: hidden;
		text-align: center;
		font-size: .12rem;
		.icon{
			float: left;
			width: 25%;
			padding-bottom: 25%;
			overflow: hidden;
			position: relative;
		}
		.icon-img{
			position: absolute;;
			top: 0;
			left:0;
			right:0;
			bottom: 0;
			width: 50%;
			height: 50%;
			margin: auto;
		}
		.icon-desc{
			// position: absolute;
			// leng
			white-space: nowrap;
			// text-
		}
	}
</style>








