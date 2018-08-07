<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search_input" type="text" placeholder="输入城市名或拼音"/>
		</div>
		<div
			 v-show="keyword"
			class="search_content"
			ref="search"
			>
			<ul>
				<li 
					class="search_item" 
					v-for="item of list"
					:key="item.id"
					@click="handleCityClick(item.name)"
				>{{item.name}}</li>
				<li class="search_item" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
	
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default{
	name:'CitySearch',
	props:{
		cityes:Object
	},
	data(){
		return{
			keyword:'',
			list:[],
			timer:null
		}
	},
	computed:{
		hasNoData(){
			return !this.list.length
		}
	},
	watch:{
		keyword(){
			if(this.timer){
				clearTimeout(this.timer)
			}
			if(!this.keyword){
				this.list=[]
				return
			}
			this.timer=setTimeout(() => {
				const result = []
				for(let i in this.cityes){
					this.cityes[i].forEach((value)=>{
						if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
							result.push(value)
						}
					})
				}
				this.list=result
			},100)
		}
	},
	methods: {
		handleCityClick (city) {
			// this.$store.commit('changeCity',city)
			this.changeCity(city)
			this.$router.push('/');
		},
		...mapMutations(['changeCity'])
	},
	mounted(){
		this.scroll=new Bscroll(this.$refs.search,{click:true})
	}

}
</script>
<style lang="less" scoped>
	@import '~styles/css.less';
	.search{
		height: .36rem;
		padding:0 .05rem;
		background: @bgCo;
		overflow: hidden;
		input{
			display: block;
			width: 100%;
			margin: 0;
			text-align: center;
			height:.3rem;
			line-height: .3rem;
			border: none;
			border-radius: 0.03rem;
			color:#666;
		}
	}
	.search_content{
		position: absolute;
		top: .79rem;
		left: 0;
		right: 0;
		bottom:0;
		z-index: -1;
		background: #eee;
		.search_item{
			line-height: .31rem;
			padding-left: 0.2rem;
			color: #666;
			background:#fff;
			border-bottom: 1px solid #ddd;
		}
	}
</style>