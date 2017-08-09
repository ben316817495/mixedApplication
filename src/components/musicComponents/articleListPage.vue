<template>
	<div class="articleList">
        <div class="page__hd">
            <h1 class="page__title">Panel</h1>
            <p class="page__desc">面板</p>
        </div>
		<div class="page__bd">

			 <div class="productPage">
				<div class="page__bd">
					<yd-list theme="3"> 
				        <yd-list-item v-for="item in newSong">
				            <img slot="img" :src="item.picUrl">
				            <span slot="title">{{item.name}}</span>
				            <yd-list-other slot="other">
				                <div>
				                {{item.copywriter}}
				                    <!-- <span class="list-price"><em>¥</em>{{item.copywriter}}</span> -->
				                    <!-- <span class="list-del-price">¥{{item.w_price}}</span> -->
				                </div>
				                <!-- <div>{{item.copywriter}}</div> -->
				            </yd-list-other>
				        </yd-list-item>
				    </yd-list>
				</div>
			</div>


		</div>
	</div>
</template>

<script>
  //import articleList from '@/components/list/articleList'
  export default {
    	name: 'indexPage',
    	//components: {articleList},
    	data(){
    		return{
    			newSong:[],
    			 list: [
                    {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
                ]
    		}
    	},
    	 mounted:function () {
		   	this.getNewSong();
		  },//mounted
    	 methods:{	 
	  		getNewSong(){
  			 this.$http.get(_url+'MuiscApi/personalized').then(response => {
				    // get body data
				    this.newSong = response.body.result;
				    console.log(this.newSong)
				  }, response => {
				    // error callback
				    console.log(response)
				  });
	  		}
	  },//methods
	}

</script>