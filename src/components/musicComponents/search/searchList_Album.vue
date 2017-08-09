<template>
	<div class="searchList_Album">
		<div class="page__bd">
			<div class="weui-panel">
				<div class="weui-panel__hd">搜索结果列表
	                <span> -{{searchSongs.songsCount}}条数据</span></div>
			</div>

             <yd-infinitescroll :on-infinite="pagingMethods" ref="infinitescrollDemo">
        			<yd-list theme="3" slot="list"> 
        		        <yd-list-item v-for="item in searchSongs.songsList" :href="'#/albumListPage?id='+item.id">
        			            <img v-if="item.blurPicUrl" slot="img" :src="item.blurPicUrl">
        			            <img v-else slot="img" src="../../../assets/img/defu_img.jpg">
        			            <span  slot="title">{{item.name}}</span>
        			            <yd-list-other slot="other">
        			               <!--  <div>
        			                    <span class="list-price"><em>¥</em></span>
        			                    <span class="list-del-price">¥{{item.w_price}}</span>
        			                </div> -->
        			                <!-- <div>content</div> -->
        			            </yd-list-other>
        		        </yd-list-item>
        		    </yd-list>
                      <!-- 数据全部加载完毕显示 -->
                    <span slot="doneTip">已经没有数据了~</span>

                    <!-- 加载中提示 -->
                    <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

            </yd-infinitescroll>

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
                 page:1,
                 PagingTotal:0,
                 pageSize: 60,
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
                      this.searchSongs.songsList = data.result.albums;
                     this.searchSongs.songsCount = data.result.albumCount;
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
	  		},//getNewSong()
	  		goToTheRouter(val){
	  			console.log(val);
	  		},//goToTheRouter();
            pagingMethods(){
                //console.log(this.searchSongs.songsCount);
                console.log(this.searchSongs.songsList.length);
                console.log(this.searchSongs.songsCount);
               // this.searchSongs.pagingTotal = Math.ceil(this.searchSongs.songsCount/this.searchSongs.pageSize);
               // console.log(this.searchSongs.pagingTotal);
                this.$dialog.loading.open('正在请求数据');

                
                   // alert(2)
                   // let pageVal = this.searchSongs.page ;
                  this.getHttpApi(_url+'MuiscApi/searchBar?type='+this.$route.query.type+'&word='+this.$route.query.word+'&offset='+this.searchSongs.songsList.length).then((data) => {
                    console.log(data)
                    
                    this.$dialog.loading.close();
                     this.searchSongs.songsCount = data.result.albumCount;


                    if(this.searchSongs.songsList.length == this.searchSongs.songsCount ){
                    //alert(1)
                     this.$dialog.toast({mes: '已经到底了！', timeout: 1000});
                     this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                        return;

                    }else{
                       
                        for(var i=0;i<data.result.albums.length;i++){
                            this.searchSongs.songsList.push(data.result.albums[i]);
                        }
                        //this.searchSongs.songsList.concat(data.result.albums);
                     }
                    console.log(this.searchSongs.songsList)
                     },(error) => {
                         console.log(error);
                         //错误提示开启
                         this.$dialog.notify({
                                mes: error.msg,
                                timeout: 3000,
                            });
                     });  
               

                 
                 this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
                 this.page++;

            },//pagingMethods() 分页
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
	.searchList_Album .weui-panel__hd{
		position: relative;
	}
	.searchList_Album .weui-panel__hd::after{
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