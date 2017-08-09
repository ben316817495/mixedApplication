
<template>
	<div class="imgBtnGrids">
			
			<div class="titleTex">
				<i class="icon icon-w2-Myorder"></i>	功能导航
			</div>

		    <div class="weui-grids">
		      
		        <div v-for="item in banner" class="weui-grid" @click="linkOfThePageType(item)">
			            <div class="weui-grid__icon">
			                <i :class="item.type" class="icon"></i>
			            </div>
			            <p class="weui-grid__label">{{item.nav_name}}</p>
		        </div>
		         

		    </div>
	</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	      	banner:'',
	      }
	  },//data()
	   mounted:function () {
	   	this.getIndexNav()
	  },//mounted

	  methods:{	 
	  		getIndexNav(){
	  		 this.$dialog.loading.open('很快加载好了');
  			 this.$http.get(_url+'pageApi/postMess').then(response => {
				    this.$dialog.loading.close();
				    this.banner = response.body;
				    console.log(this.banner)
				  }, response => {
				    // error callback
				    console.log(response)
				  });
	  		},//getIndexNav()
	  		linkOfThePageType(val){
	  			console.log(val)
	  			switch(val.module){
	  				case 'news':
	  					if(val.guide && val.guide !="0"){
	  						this.$router.push({path:'/listPageOfArticle',query:{ID:val.guide}});
	  					}else{
	  						this.$router.push({path:'/listPageOfArticle'});
	  					}
	  				break;
	  				case 'product':
	  					if(val.guide && val.guide !="0"){
	  						this.$router.push({path:'/productPage',query:{ID:val.guide}});
	  					}else{
	  						this.$router.push({path:'/productPage'});
	  					}
	  				break;
	  				case 'link':
	  					this.$router.push({path:val.link});
	  				break;
	  			}
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