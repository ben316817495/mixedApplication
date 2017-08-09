<template>
	<div class="searchList_singer">
		<!-- <div>searchList_singer</div> -->
		<div class="page__bd">
			<div class="weui-panel">
				<div class="weui-panel__hd">搜索结果列表
	                <span> -{{searchSongs.songsCount}}条数据</span></div>
			</div>
			<yd-list theme="3"> 
		        <yd-list-item v-for="item in searchSongs.songsList">
		            <img v-if="item.img1v1>1" slot="img" :src="item.img1v1Url">
		            <img v-else slot="img" src="../../../assets/img/defu_img.jpg">
		            <span slot="title">{{item.name}}</span>
		            <yd-list-other slot="other">
		               <!--  <div>
		                    <span class="list-price"><em>¥</em></span>
		                    <span class="list-del-price">¥{{item.w_price}}</span>
		                </div> -->
		                <!-- <div>content</div> -->
		            </yd-list-other>
		        </yd-list-item>
		    </yd-list>
		</div>
	</div>
</template>

<script>
import http from '@/assets/js/http.js';
    export default {
        data() {
            return {
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
        },//data
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
                      this.searchSongs.songsList = data.result.artists;
                     this.searchSongs.songsCount = data.result.artistCount;

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
            this.getNewSong();
      }
    },
         mixins: [http]
    }
</script>

<style>
	.searchList_singer .weui-panel__hd{
		position: relative;
	}
	.searchList_singer .weui-panel__hd::after{
		content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
	}
</style>