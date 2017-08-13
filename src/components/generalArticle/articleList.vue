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

            	
     
		               <div  class="newActList" v-for="item in newsArticleList" @click="goToTheArticle(item)">
		                        <div class="weui-media-box weui-media-box_appmsg ">
		                            <div class="weui-media-box__hd"><img :src="item.author.avatar_url" alt="" class="weui-media-box__thumb">
		                            </div>
		                            <div class="weui-media-box weui-media-box_text">
		                                <h4 class="weui-media-box__title">{{item.title}}</h4>
		                                 <p class="weui-media-box__desc">{{item.content}}</p> 
										
		                            </div>
		                        </div>
		                        <ul class="weui-media-box__info">
									
		                            <li class="weui-media-box__info__meta">{{item.create_at}}</li>
									<li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.author.loginname}}</li>
		                            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">
		                            	<yd-badge shape="square" type="unified">{{item.tab | messType}}</yd-badge>
		                            </li>

		                        </ul>
		               </div  >

    				       

            <yd-infinitescroll :on-infinite="scrollLoadList" ref="infinitescrollDemo">

             

                <yd-list theme="4" slot="list" > 
			        <yd-list-item v-for="item in newsArticleList" @click="goToTheArticle(item)" class="newActList">
			            <img slot="img" :src="item.author.avatar_url">
			            <!-- <div class="" >{{item.title}}</div> -->
			             <h4 class="weui-media-box__title" slot="title">{{item.title}}</h4>
			            <yd-list-other slot="other">
			                <div class="weui-media-box__desc">
			                   {{item.content}}
			                </div>
			                <!-- <div></div> -->
			            </yd-list-other>
			        </yd-list-item>
    			</yd-list>

		        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
		        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

                </yd-infinitescroll>

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
	      	  pageVal:1,
	      	  pageListVal:20,
	      	},
	      	newsArticleList:{},

	      }
	  },//data()
	   mounted:function () {
	   	this.getArticleList()
	  },//mounted
	  filters:{
	  	'messType':(val)=>{
	  		switch(val){
	  			case 'ask':
	  				return '问答';
	  			break;
	  			case 'share':
	  				return '分享';
	  			break;
	  			default:
	  				return val;
	  			break;

	  		}
	  	},//messType
	  },//filters
	  methods:{	 
	  		getArticleList(){
	  			//console.log(this.$route.query.ID)
	  			this.$dialog.loading.open('很快加载好了');
		  		if(this.$route.query.ID){
		  			this.getHttpApi(_url+'cnodeApi/gettopics'+'?id='+this.$route.query.ID).then((data) => {
	  					this.$dialog.loading.close();
	  					this.newsArticleList = data;

	  					//页码 ++；
	  					this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
	  					this.page.pageVal++;
	  					console.log(this.page.pageVal)
	  				},(error) => {
	          			console.log(error);
	       			});
		  		}else{
		  			this.getHttpApi(_url+'cnodeApi/gettopics').then((data) => {
	  					this.$dialog.loading.close();
						  this.newsArticleList = data.data;
						  	console.log(this.newsArticleList);

						  	//页码 ++；
						this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
	  					this.page.pageVal++;
	  					console.log(this.page.pageVal);

	  				},(error) => {
	          			console.log(error);
	       			});
		  		}
  			
	  		},//getArticleList
	  		goToTheArticle(item){
	  			//console.log(item);
	  			this.$router.push({path:'/index/articleListPage',query:{ID:item.id}});
	  		},//goToTheArticle

	  		scrollLoadList(){
	  				this.getHttpApi('http://localhost:3000/cnodeApi/gettopics'+'?page='+this.page.pageVal).then((data) => {
	  						console.log(data)
	  						// if(){

	  						// }

	  				},(error) => {
	          			console.log(error);
	       			});
	  		},//scrollLoadList
	  },//methods
    mixins: [http]

}
</script>