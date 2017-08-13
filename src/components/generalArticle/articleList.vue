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

            	
     

 
            <yd-infinitescroll :on-infinite="scrollLoadList" ref="infinitescrollDemo">

             

                <yd-list theme="4" slot="list" > 
			        <yd-list-item v-for="item in newsArticleList" type="link" :href="{path:'/index/articleListPage',query:{ID:item.id}}" class="newActList">
			            <img slot="img" :src="item.author.avatar_url">
			             <h4 class="weui-media-box__title" slot="title">{{item.title}}</h4>
			            <yd-list-other slot="other">
			                <div class="weui-media-box__desc">
			                   {{item.content}}
			                </div>
			                <div  class="weui-media-box__desc">
			                	<ul class="weui-media-box__info">
		                            <li class="weui-media-box__info__meta">
		                            	<i class="iconfont icon-countdown"></i> {{item.create_at | changeTime}}
		                            </li>
									<li class="weui-media-box__info__meta weui-media-box__info__meta_extra">
										<i class="iconfont icon-profile"></i> {{item.author.loginname}}
									</li>
		                            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">
		                            	<yd-badge shape="square" >{{item.tab | messType}}</yd-badge>
		                            </li>
		                        </ul>
			                </div>
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
	  	'changeTime':(val)=>{
	  		var date = new Date(val)
			let year = date.getFullYear(),
			      month = date.getMonth() + 1,
			      day = date.getDate();

			month = `${month>9?'':''}${month}`,
			day = `${day>9?'':''}${day}`;

			return `${year}-${month}-${day}`;
	  	},//changeTime
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
	  					//this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
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
						//this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
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
	  				this.getHttpApi(_url+'cnodeApi/gettopics'+'?page='+this.page.pageVal).then((data) => {
	  						console.log(data.data)
	  						 if(data.data.length >0){
	  						 	

	  						 	 for(var i=0;i<data.data.length;i++){
		                            this.newsArticleList.push(data.data[i]);
		                        }
		                        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
                    			this.page.pageVal++;
	  						 }else{
	  						 	 this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                        		return;
	  						 }

	  				},(error) => {
	          			console.log(error);
	       			});
	  		},//scrollLoadList
	  },//methods
    mixins: [http]

}
</script>