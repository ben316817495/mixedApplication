<template>
	<div class="albumListPage PublicList">
		 
		<div class="page__bd">

			<div class="weui-panel">

                <div class="page__hd albumImgTitle">
                    <!-- <h1 class="page__title">Panel</h1>
                    <p class="page__desc">面板</p> -->

                    <div class="albumImgTitle_bgimg" v-bind:style="{backgroundImage:'url('+searchSongs.album.blurPicUrl+')'}"></div>
                    <div class="maskBox"></div>
                    <div class="cvr">
                        <img src="../../../assets/img/share_album@2x.png" alt="" class="">
                        <img :src="searchSongs.album.blurPicUrl" class="cover">
                        <span class="tag">{{searchSongs.album.type}}</span>
                    </div>
                    <div class="cnt">
                        <h2 class="j-abname">{{searchSongs.album.name}}</h2>
                        <div class="art f-thide"><span class="singer">歌手：</span>
                        <a class="s-fc0" v-if="searchSongs" >
                            <span v-for="itemC in searchSongs.album.artists">{{itemC.name}}</span>
                        </a>
                        </div>
                        <div class="time s-fc4">发行时间：{{searchSongs.album.publishTime | dataTimeFilters}}</div>
                    </div>
                </div>

                 <!-- <div class="albumImgTitle">
                    <div class="cvr">
                        <img :src="searchSongs.album.blurPicUrl">
                    </div>
                 </div> -->
            
           <div class="weui-panel__hd">
                歌曲列表
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
                                            <p class="weui-media-box__desc" v-if="item">歌手：<span v-for="itemC in item.artists">{{itemC.name}}</span> </p>
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
        data(){
            return{
                searchSongs:{
                   songsList:[],
                   album:{}
                }
            }
        },//data()
        mounted:function () {
            this.getNewSong()
        },//mounted
        methods:{
            getNewSong(){

               console.log(this.$route.query)
               this.$dialog.loading.open('搜索中，请稍后...');
               this.getHttpApi(_url+'MuiscApi/albumList?id='+this.$route.query.id).then((data) => {

                 console.log( data.album)
              
                     this.searchSongs.album = data.album;
                     this.searchSongs.songsList = data.album.songs;

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
        },//methods
         watch:{
          $route(to,from){
                this.getNewSong();
             }
        },//watch:
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
        'dataTimeFilters':(val)=>{
           // return new Date(parseInt(val) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '); 
            /*
            let newDate = new Date();
            let timeVal = parseInt(val)
            //return newDate.toLocaleString(timeVal)
            return newDate.toLocaleDateString(timeVal)*/
            var myDate = new Date(val);
            var year = myDate.getFullYear();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            return year + '-' + month + '-' + day;
        },//'dataTimeFilters'
      },//filters
        mixins: [http]
    }
</script>

<style>
    .albumImgTitle{
        position: relative;
        overflow: hidden; 
        padding: 30px 10px 30px 15px;
    }
   .albumImgTitle .cvr{
            position: relative;
            background-size: 145px;
                height: 145px;
                float: left;
    }
    .albumImgTitle .cnt{
        position: relative;
        margin-left: 180px;
    }
    .albumImgTitle .cnt h2{
        padding-top: 10px;
        font-size: 17px;
        line-height: 1.3;
        color: #fefefe;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
   .albumImgTitle .cover {
        position: absolute;
        top: 0;
        left: 0;
    }
    .albumImgTitle .tag {
        position: absolute;
        z-index: 3;
        top: 10px;
        left: 0px;
        padding: 0 8px;
        height: 17px;
        color: #fff;
        font-size: 9px;
        text-align: center;
        line-height: 17px;
        background-color: rgba(217,48,48,.8);
        border-radius: 0 9999px 9999px 0;
    }
   .albumImgTitle .maskBox{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.25);
    }
    .albumImgTitle_bgimg{
        background-image: url(http://p4.music.126.net/nGeCOE1MUY6Kf7j7Le73bQ==/3420580690947051.jpg?param=177y177);
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        -webkit-filter: blur(20px);
        filter: blur(20px);
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }
    .art{
           margin-top: 22px;
        color: rgba(255,255,255,1); 
    }
    .s-fc0 {
        color: #fff;
    }
    .cnt .time{
        margin-top: 5px;
        color: rgba(255,255,255,0.5);
    }
</style>