
<template>
	<div class="imgBtnGrids">
			
				 <div class="titleTex">
					<i class="iconfont icon-sort"></i>	功能导航
				</div> 

		    <div class="weui-grids">
		      
		        <!-- <div v-for="item in navlist" class="weui-grid" @click="linkOfThePageType(item)">
			            <div class="weui-grid__icon">
			                <i :class="item.type" class="iconfont"></i>
			            </div>
			            <p class="weui-grid__label">{{item.nav_name}}</p>
		        </div> -->
		         <div v-for="item in navlist" class="weui-grid" @click="linkOfThePageType(item)">
			            <div class="weui_grid_icon"><i :class="item.type" class="icon"></i></div>
			            <p class="weui-grid__label">{{item.nav_name}}</p>
		        </div>

		    </div>
	</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	      	navlist:[
				  {nav_name:"cnode社区",module:"news",type:"icon_update",id:"53",path:"/index/listPageOfArticle"},
				  {nav_name:"关于我们",module:"news",type:"icon_audience ",id:"53",path:"/index/aboutus"},
				  {nav_name:"个人中心",module:"news",type:"icon_searching",id:"53",path:"/index/myPage"},
				  {nav_name:"我的收藏",module:"news",type:"icon_browsers-1",id:"53"},
				  {nav_name:"播放列表",module:"news",type:"icon_share",id:"53"},
				  {nav_name:"文章社区",module:"news",type:"icon_browsers-3",id:"53"},
				  
			  ],
	      }
	  },//data()
	   mounted:function () {
	   	this.getIndexNav()
	  },//mounted

	  methods:{	 
	  		getIndexNav(){
	  		 this.$dialog.loading.open('很快加载好了');
  			//  this.$http.get(_url+'pageApi/postMess').then(response => {
			// 	    this.$dialog.loading.close();
			// 	    this.banner = response.body;
			// 	    console.log(this.banner)
			// 	  }, response => {
			// 	    // error callback
			// 	    console.log(response)
			// 	  });

			setTimeout(()=> {
				this.$dialog.loading.close();
			}, 1000);


	  		},//getIndexNav()
	  		linkOfThePageType(val){
				  console.log(val)
				  if(val.path && val.path!=''){
						 this.$router.push({path:val.path});
				  }
	  			// console.log(val)
	  			// switch(val.module){
	  			// 	case 'news':
	  			// 		if(val.guide && val.guide !="0"){
	  			// 			this.$router.push({path:'/listPageOfArticle',query:{ID:val.guide}});
	  			// 		}else{
	  			// 			this.$router.push({path:'/listPageOfArticle'});
	  			// 		}
	  			// 	break;
	  			// 	case 'product':
	  			// 		if(val.guide && val.guide !="0"){
	  			// 			this.$router.push({path:'/productPage',query:{ID:val.guide}});
	  			// 		}else{
	  			// 			this.$router.push({path:'/productPage'});
	  			// 		}
	  			// 	break;
	  			// 	case 'link':
	  			// 		this.$router.push({path:val.link});
	  			// 	break;
	  			// }
	  		},//linkOfThePageType()
	  		textApi(){
	  			this.$http.get(_url+'MuiscApi/textApi',{'csrf_token':''}).then(response => {
				    this.$dialog.loading.close();
				    this.banner = response.body;
				    console.log(this.banner)
				  }, response => {
				    // error callback
				    console.log(response)
				  });
	  		},
	  },//methods
}


</script>