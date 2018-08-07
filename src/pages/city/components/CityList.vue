<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border_topbottom">当前城市</div>
				<div class="button_list">
					<div class="button_warper">
						<div class="button">{{this.currentCity}}</div>	
					</div>
				
				</div>
			</div>
			<div class="area">
				<div class="title border_topbottom">热门城市</div>
				<div class="button_list">
					<div 
						class="button_warper"
						 v-for="item of hotCityes"
						:key="item.id"
						@click="handleCityClick(item.name)"
						 >
						<div class="button">{{item.name}}</div>	
					</div>
					
				</div>
			</div>
			<div class="area" 
				v-for="(item,key) of cityes"
				:key="key"
				:ref="key"
				
				>
				<div class="title border_topbottom">{{key}}</div>
				<div class="item_list">
					<div 
					class="item border_bottom"
					v-for="innerItem of item"
					:key="innerItem.id"
					@click="handleCityClick(innerItem.name)"
					>{{innerItem.name}}</div>
					
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'	
import {mapState,mapMutations} from 'vuex'
export default{
	name:'CitySearch',
	props:{
		hotCityes:Array,
		cityes:Object,
		letter:String
	},
	computed:{
		...mapState({
			currentCity:'city'
		})
	},
	methods: {
		handleCityClick (city) {
			// this.$store.commit('changeCity',city)
			this.changeCity(city)
			this.$router.push('/');
		},
		...mapMutations(['changeCity'])
	},
	watch: {
		letter () {
			if(this.letter){
				const element=this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
			
		}
	},
	mounted () {
		this.scroll =new Bscroll(this.$refs.wrapper,{click:true})
	}
}
</script>
<style lang="less" scoped>
	@import '~styles/css.less';
	.title{
		background: #eee;
		line-height: .22rem;
		padding-left: .1rem;
		font-size: .12rem;
	}
	.border_topbottom{
		&:before{
			border-color:#ccc;
		}
		&:after{
			border-color:#ccc;
		}
	}
	.button_list{
		padding: .05rem;
		font-size: .12rem;
		overflow: hidden;
		padding: .05rem .3rem .05rem .05rem;
		.button_warper{
			float: left;
			width: 33.33%;
			.button{
				padding: .05rem;
				margin: 0.05rem;
				text-align: center;
				border:0.01rem solid #ccc;
				border-radius: 0.03rem;

			}
		}
	}
	.item_list{
		line-height: .27rem;
		font-size: .12rem;
		color: #666;
		padding-left: .1rem;
	}
	.border_bottom{
		border-bottom: 0.01rem solid #ddd;
	}
	.list{
		position: fixed;
		top: .8rem;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -2;
	}
</style>