<template>
	<div>
		<div class="recommend-title">
			热销推荐
		</div>
		<ul>
			<li 
				class="item border-bottom" 
				v-for="item of recommendList"
				:key="item.id"
				>
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" alt="" class="item-img">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:'HomeRecomend',
	data(){
		return {
			recommendList:[{
				id:'0001',
					imgUrl:'http://www.scjuchuang.com//imgupdata/20180524/bdeb8be6432d6daf6b715f5a620ef55a.png',
					title:'大连圣亚海洋公园',
					desc:'浪漫打脸首站，浪漫的海洋主题乐园',
				},{
					id:'0002',
					imgUrl:'http://www.scjuchuang.com//imgupdata/20180524/04d34df21e2478a1e0e5ed42f5bbee9d.png',
					title:'大连圣亚海洋公园2',
					desc:'浪漫打脸首站，浪漫的海洋主题乐园',
				},{
					id:'0003',
					imgUrl:'http://www.scjuchuang.com//imgupdata/20180524/2d27fd9d75b07e298d9487ef4382819e.png',
					title:'大连圣亚海洋公园3',
					desc:'浪漫打脸首站，浪漫的海洋主题乐园',
				}]	
		}
		
	}
}
</script>
<style lang="less" scoped>
	.recommend-title{
		line-height: .4rem;
		background: #ccc;
		text-indent: .2rem;
		font-size: .14rem
	}
	.item{
		display: flex;
		font-size: .12rem;
		.item-info{
			flex: 1;
			padding: .05rem;
		}
		.item-title{
			line-height: .24rem;
			font-size: .16rem;
		}
		.item-desc{
			line-height: .2rem;
			color:#ccc;
		}
		.item-button{
			background:#ff9300;
			padding: 0 .2rem;
			border-radius: .03rem;
			border: none;
			color:#fff;
			margin-top: .08rem;
			line-height: .22rem;
		}
	}	
	.item-img{
		width: .8rem;
		height: .8rem;
		margin: .05rem;
	}
	.border-bottom{
		border-bottom: 1px solid #e1e1e1;
	}
</style>