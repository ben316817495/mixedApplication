<template>
	<div class="articlePage">
		<!-- <div class="page__hd">
	        <h1 class="page__title">{{newsArticleCont.title}}</h1>
	        <p class="page__desc">文章</p>
	    </div> -->
	    <div class="titleImg">
	          <img src="../../assets/img/top1.jpg" alt="">
	    </div>

		<div class="authorLine">
			<div class="authorLine_name">本文作者：{{newsArticleCont.author.loginname}}</div>
			<div class="authorLine_img">
				<img :src="newsArticleCont.author.avatar_url">
			</div>
		</div>
		<div class="page__bd articlePagecon">
	        <article class="weui-article">
	            <h1>{{newsArticleCont.title}}</h1>
	            <p class="subtitle">发布日期：{{newsArticleCont.published | dataTimeFilters}}</p>
	            <section>
	                <section v-html="newsArticleCont.content">
	                	<!-- {{newsArticleCont.content | textContfilter}} -->
	                </section>
	                
	                <replies v-bind:repliesList="repliesList"></replies>

	            </section>
	        </article>
	    </div>
	</div>
</template>

<script>
	import http from '@/assets/js/http.js';
	import replies from '@/components/generalArticle/replies'


	export default {
		components:{replies},
	    data() {
	      return {
	      	repliesList:[],
	      	toastLoadingShow:false,
	      	newsArticleCont:{},
	      }
	  },//data
	   mounted:function () {
	   	this.getTheArticle();
	  },//mounted
	  filters:{
	  	'dataTimeFilters':(val)=>{
	  		let newDate = new Date();
	  		let timeVal = parseInt(val)
	  		//return newDate.toLocaleString(timeVal)
	  		return newDate.toLocaleDateString(timeVal)
	  	},//'dataTimeFilters'
	  },//filters
	  methods:{
	  	getTheArticle(){
	  		this.$dialog.loading.open('很快加载好了');
	  		console.log(this.$route);
	  		if(!this.$route.query.ID){
	  			window.history.go(-1);
	  		 }else{
	  		 	this.getHttpApi(_url+'cnodeApi/gettopicsContent'+'?id='+this.$route.query.ID).then((data) => {
	  		 		this.$dialog.loading.close();
	  		 		console.log(data)
  					this.newsArticleCont = data.data;
  					this.repliesList = data.data.replies;
  					console.log(this.repliesList)
  				},(error) => {
          			console.log(error);
       			});
	  		 }
	  	},//getTheArticle
	  
	  },////methods
      mixins: [http]
	}
</script>