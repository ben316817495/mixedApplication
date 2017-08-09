<template>
	<div class="musicMainPage">
		<topBar></topBar>
		<yd-backtop></yd-backtop>
		
			<div class="page">
			    <div class="page__bd" style="height: 100%;">
			    	
			        <div class="weui-tab">
			            <div class="weui-tab__panel">
			            	<transition name="slide-fade">
			            		<router-view></router-view>
			          		</transition>
			            </div>
			        </div>

			    </div>
			</div>
		
		
	</div>
</template>

<script>
	import topBar from '@/components/musicComponents/topBar';
	import http from '@/assets/js/http.js';


	 export default {
	 	components: {topBar},
	 	data() {
	      return {
	      	
	      }
	  	},//data()
	 	mounted:function () {

	 	 },//mounted
	 	methods:{

	 	},//methods
	 	mixins: [http]
	 }
</script>

<style>
	.weui-tab__panel{
		padding:40px 0 0!important;
	}
	.page{
		opacity: 1;
	}
	.copywriter_conter{
		height: 38px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>

