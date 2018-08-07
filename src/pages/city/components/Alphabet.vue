<template>
	<ul class="list">
		<li 
			@click="handleleLetterClick" 
			class="item" v-for="item of letters" 
			:key="item"
			:ref="item"
			@touchstart="hanleTouchStart"
			@touchmove="hanleTouchMove"
			@touchend="hanleTouchEnd"
			>{{item}}</li>
		
	</ul>
</template>
<script>

export default{
	name:'Alphabet',
	props:{
		cityes:Object
	},
	computed:{
		letters(){
			const letters = []
			for(let i in this.cityes) {
				letters.push(i)
			}
			return letters
		}
	},
	data(){
		return {
			touchStatus:false,
			startY:0,
			timer:null
		}
	},
	updated(){
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods:{
		handleleLetterClick (e) {
			this.$emit('change',e.target.innerText)
		},
		hanleTouchStart () {
			this.touchStatus=true
		},
		hanleTouchMove (e) {
			if(this.touchStatus){
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					const startY=this.$refs['A'][0].offsetTop
					const touchY=e.touches[0].clientY-79
					const index=Math.floor((touchY - this.startY) / 20)
					if(index>=0&&index<this.letters.length){
						this.$emit('change',this.letters[index])
					}
				},16)
				
			}
		},
		hanleTouchEnd () {

		}
	}
	
}
</script>
<style lang="less" scoped>
	@import '~styles/css.less';
	.list{
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: .8rem;
		right: 0;
		bottom: 0;
		width: .2rem;
		z-index: -2;
	}
	.item{
		line-height: .22rem;
		text-align: center;
		color: @bgCo;
	}
</style>