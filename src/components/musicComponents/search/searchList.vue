<template>
	<div class="searchList">
		 
		<div class="page__bd">

			<div class="weui-panel">
            <div class="weui-panel__hd">搜索结果列表
                <span v-if="searchSongs.songsCount!=0"> -{{searchSongs.songsCount}}条数据</span>
            </div>
            <div class="weui-panel__bd">
            	<!--if 无数据样式-->
            	<!-- <div v-if="searchSongs.songsList.length ==0" class="weui-loadmore weui-loadmore_line">
            		<span class="weui-loadmore__tips">暂无数据</span>
        		</div> -->
                <!--if 无数据样式-->	
                <!--else 有数据样式-->
                <!-- <div v-else> -->

                     <!--歌曲列表样式-->
                     <div  class="newActList" v-for="item in searchSongs.songsList">
                            <div class="weui-media-box weui-media-box_appmsg ">
                                <div class="weui-media-box__hd">
                                        <img src="../../../assets/img/song.jpg" alt="" class="weui-media-box__thumb">
                                        <!-- <img :src="item.artists[0].picUrl" alt="" class="weui-media-box__thumb"> -->
                                        <!-- <yd-icon name="play" size="4rem" color="#FF685D"></yd-icon> -->
                                    </div>
                                    <div class="weui-media-box weui-media-box_text">
                                        <h4 class="weui-media-box__title">{{item.name}}<span class="aliasFont">{{item.alias | theAliasVal}}</span></h4>
                                        <p class="weui-media-box__desc">歌手：{{item.artists[0].name }}</p>
                                    </div>
                                </div>
                                <ul class="weui-media-box__info">
                                    <li class="weui-media-box__info__meta">所属专辑：[ {{item.album.name}} ]</li>
                                    <li class="weui-media-box__info__meta">{{item.published}}</li>
                                    <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.keywords}}</li>
                                </ul>
                        </div>
                    </div>
                    <!--歌曲列表样式-->
                    
                <!-- </div> -->
                <!--else 有数据样式-->
               
            
        </div>	 


		</div>

	</div>
</template>
<script>
 import http from '@/assets/js/http.js';
  export default {
        //props:['searchSongs'],
    	//components: {articleList},
    	data(){
    		return{
    			newSong:[],
    			 list: [],
                 //搜索结果数据
                searchSongs:{
                 searchWoed:'', 
                 songsList:[],   //歌曲搜素数据
                 songsCount:0,   //数据总数
                 searchType:''   //搜索类型
                },
    		}
    	},
    	 mounted:function () {
		   	this.getNewSong();
            //alert('lai')

		  },//mounted
    	 methods:{	 
	  		getNewSong(){


               console.log(this.$route.query)
               this.$dialog.loading.open('搜索中，请稍后...');
	  		   this.getHttpApi(_url+'MuiscApi/searchBar?type='+this.$route.query.type+'&word='+this.$route.query.word).then((data) => {

                 console.log(data)
                 // switch(msg.selectVal){
                 //     case '1':
                 //     //console.log(data.result.songs.length);
                         


                 //     this.searchSongs.searchType = msg.selectVal;
                 //     this.searchSongs.songsList = data.result.songs;
                 //     this.searchSongs.songsCount = data.result.songCount;

                 //     break;
                 // }

                      // this.searchSongs.searchType = msg.selectVal;
                      this.searchSongs.songsList = data.result.songs;
                     this.searchSongs.songsCount = data.result.songCount;

                     //关闭加载提示
                     this.$dialog.loading.close();
                        
                 },(error) => {
                         console.log(error);
                         //错误提示开启
                         this.$dialog.notify({
                                mes: error.msg,
                                timeout: 3000,
                            });
                     });
	  		}
	  },//methods

      watch:{
      $route(to,from){
          //this.title = to.name
          //console.log(to);
          //console.log(from);
            this.getNewSong();
      }
    },
      filters:{
        'theAliasVal':(val)=>{
            if(val == []){
                return ''
            }else{
                 var str = val+'';
                str.replace(/[ ]/g,"");
                 return ' '+str
            }
        },//'theAliasVal'
      },//filters
      mixins: [http]
	}

</script>
<style>
	.searchList .newActList .weui-media-box__info {
    margin-top: 0;
    padding: 10px 15px;
}
.aliasFont{
    font-size: 13px;
    color: #CECECE;
}
</style>