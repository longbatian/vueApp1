<template>
<div class="header">
	<div class="header-left">返回</div>
	<div class="header-input">内容</div>
	<router-link to='./city'>
		<div class="header-right">{{this.doubleCity}}</div>
	</router-link>
	
</div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default{
  name: 'HomeHeader',
  computed:{
  	...mapState(['city']),
  	...mapGetters(['doubleCity'])
  }
}

</script>

<style lang='less' scoped>

	.header{
		display: flex;
		height:.44rem;
		line-height: .44rem;
		color: #fff;
		background: #00bcd4;
		.header-left{
			width: .64rem;
			float: left;
		}
		.header-input{
			height: .36rem;
			margin-top: .04rem;
			flex: 1;
			background:#fff;
			border-radius: .05rem;
		}
		.header-right{
			min-width: .64rem;

			float:right;
			color:#fff;
			text-align: center;
			padding:0 .06rem;
		}
	
	}


</style>
