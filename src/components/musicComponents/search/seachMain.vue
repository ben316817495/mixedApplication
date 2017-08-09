<template>
	<div class="seachMain">
		<seachBar v-on:searchEvent="searchEvent_on"></seachBar>
		<!-- <searchList v-bind:searchSongs="searchSongs"></searchList> -->
		<transition name="slide-fade">
				<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import seachBar from '@/components/musicComponents/search/seachBar';
	//import searchList from '@/components/musicComponents/search/searchList';
	// import http from '@/assets/js/http.js';

	export default {
		 components: {seachBar},
		data(){
			return{
				//搜索结果数据
				// searchSongs:{
				// 	searchLength:false, //数据数组长度
				// 	songsList:[],	//歌曲搜素数据
				// 	songsCount:0,	//数据总数
				// 	searchType:''	//搜索类型
				// },
				
			}
		},//data()
		methods:{
			searchEvent_on(msg){

				// //开启加载提示
				// this.$dialog.loading.open('搜索中，请稍后...');
				// this.getHttpApi(_url+'MuiscApi/searchBar?type='+msg.selectVal+'&word='+msg.searchVal).then((data) => {

				// 	console.log(data)
				// 	switch(msg.selectVal){
				// 		case '1':
				// 		//console.log(data.result.songs.length);
						 


	  	// 				this.searchSongs.searchType = msg.selectVal;
	  	// 				this.searchSongs.songsList = data.result.songs;
	  	// 				this.searchSongs.songsCount = data.result.songCount;

				// 		break;
				// 	}

				// 		//关闭加载提示
	  	// 				this.$dialog.loading.close();
	  					
	  	// 			},(error) => {
	   //        			console.log(error);
	   //        			//错误提示开启
	   //        			this.$dialog.notify({
    //                             mes: error.msg,
    //                             timeout: 3000,
    //                         });
	   //     			});
				switch(msg.selectVal){
					case '1':
						this.$router.push({
							path:'/musicSearchPage/searchListOfSong',
							query:{
								type:msg.selectVal,
								word:msg.searchVal
							}
						});
					break;

					case '10':
						this.$router.push({
							path:'/musicSearchPage/searchListOfAlbum',
							query:{
								type:msg.selectVal,
								word:msg.searchVal
							}
						});
					break;

					case '100':
						this.$router.push({
							path:'/musicSearchPage/searchListOfSinger',
							query:{
								type:msg.selectVal,
								word:msg.searchVal
							}
						});
					break;

				}


			},//searchEvent_on()
		},//methods
	 	// mixins: [http]
	}
</script>