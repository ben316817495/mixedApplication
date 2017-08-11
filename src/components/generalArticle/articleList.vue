<template>
	<div class="articleList">
		<!--   
		<div class="page__hd">
            <h1 class="page__title">{{page.titleName}}</h1>
            <p class="page__desc">面板</p>
        </div> 
        -->
        
		<div class="page__bd articleList_lsit">
			<div class="weui-panel">
            <div class="weui-panel__hd">{{page.titleName}}列表</div>
            <div class="weui-panel__bd">
                <div class="newActList" v-for="item in newsArticleList" @click="goToTheArticle(item)">
                        <div class="weui-media-box weui-media-box_appmsg ">
                            <div class="weui-media-box__hd"><img :src="item.author.avatar_url" alt="" class="weui-media-box__thumb">
                            </div>
                            <div class="weui-media-box weui-media-box_text">
                                <h4 class="weui-media-box__title">{{item.title}}</h4>
                                 <p class="weui-media-box__desc">{{item.content}}</p> 
								<!-- <p class="weui-media-box__desc" v-html="item.content"></p> -->
								
                            </div>
                        </div>
                        <ul class="weui-media-box__info">
                            <li class="weui-media-box__info__meta">{{item.aid | authorFilters}}</li>
                            <li class="weui-media-box__info__meta">{{item.create_at}}</li>
                            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.keywords}}</li>
                        </ul>
                </div>
            </div>
            
        </div>
		</div>
	</div>
</template>

<script>
  	import http from '@/assets/js/http.js';

	export default {
	    data() {
	      return {
	      	page:{
	      	  titleName:this.$route.name,
	      	},
	      	newsArticleList:'',
	      }
	  },//data()
	   mounted:function () {
	   	this.getArticleList()
	  },//mounted
	  filters:{
	  	'dataTimeFilters':(val)=>{
	  		// let newDate = new Date();
	  		// let timeVal = parseInt(val)
	  		// //return newDate.toLocaleString(timeVal)
	  		// return newDate.toLocaleDateString(timeVal)
	  		 var myDate = new Date(val*1000);
            var year = myDate.getFullYear();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            return year + '-' + month + '-' + day;
	  	},//'dataTimeFilters'
	  	'authorFilters':(val)=>{
	  		if(val){
	  			return '作者原创'
	  		}else{
	  			return '转载文章'
	  		}
	  	},//'authorFilters'
	  },//filters
	  methods:{	 
	  		getArticleList(){
	  			//console.log(this.$route.query.ID)
	  			this.$dialog.loading.open('很快加载好了');
		  		if(this.$route.query.ID){
		  			this.getHttpApi(_url+'cnodeApi/gettopics'+'/id/'+this.$route.query.ID).then((data) => {
	  					this.$dialog.loading.close();
	  					this.newsArticleList = data;
	  				},(error) => {
	          			console.log(error);
	       			});
		  		}else{
		  			this.getHttpApi(_url+'cnodeApi/gettopics').then((data) => {
	  					this.$dialog.loading.close();
						  this.newsArticleList = data.data;
						  	console.log(this.newsArticleList);
	  				},(error) => {
	          			console.log(error);
	       			});
		  		}
  			
	  		},//getArticleList
	  		goToTheArticle(item){
	  			//console.log(item);
	  			this.$router.push({path:'/contPageArticle',query:{ID:item.id}});
	  		},//goToTheArticle
	  },//methods
    mixins: [http]

}
</script>