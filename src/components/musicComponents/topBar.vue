<template>
		<div class="weui-tabbar topStyle">
         
            <ul class="topUlFlex">
            	<li class="weui-tabbar__item weui-bar__item_on" >
					<i class="icon icon-w2-Setup"></i>            		 
            	</li>
            	<li class="centerIcon">
            		中间部分
            	</li>
            	<li class="weui-tabbar__item weui-bar__item_on" @click="toTheSearch">
            		 <i class="icon icon-w2-seach"></i>
            	</li>
            </ul>
      	</div>
</template>

<script>
	export default {
		methods:{
			toTheSearch(){
				this.$router.push('/musicSearchPage');
			},//toTheSearch
		},//methods
	}
</script>

<style>
	.back-icon:before, .next-icon:before{
		font-size: 1.5rem;
    	color: inherit;
	}
	.icon{
		font-family:'icomoon' !important;
		font-size: 1.8rem;
    	color: inherit;
	}
	.icon[class^="icon-"],.icon[class*=" icon-"]{
		line-height: 40px;
	}
	.weui-tabbar.topStyle{
		top:0;
		bottom:	auto !important;
	}
	.topUlFlex{
		width: 100%;
		display: flex;
	}
	.topUlFlex li{
		padding: 5px 0 0;
		line-height: 40px;
	}
	.centerIcon{
		width:50%;
		text-align: center;
		height: 40px;
	}
</style>