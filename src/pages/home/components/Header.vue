<template>
<div class="header">
	<div class="header-left">返回</div>
	<div class="header-input">内容</div>
	<div class="header-right">城市</div>
</div>
</template>
<script>

export default{
  name: 'HomeHeader'
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
			width: .64rem;
			float:right;
			text-align: center;
		}
	
	}


</style>
