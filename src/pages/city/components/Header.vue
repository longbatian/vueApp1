<template>
	<div class="header">
		城市选择
		<router-link to="./">
			<div class="head_back">
				<
			</div>
		</router-link>
		
	</div>
</template>
<script>
export default{
	name:'CityHeader'
}
</script>
<style lang="less" scoped>
	.header{
		overflow: hidden;
		height: .43rem;
		line-height: .43rem;
		text-align: center;
		color:#fff;
		background: #01B5D0;
		font-size: .16rem;
	}
	.head_back{
		position: absolute;
		top: 0;
		left: 0;
		width: .32rem;
		text-align: center;
		font-size: .2rem;
		color:#fff;
	}
</style>