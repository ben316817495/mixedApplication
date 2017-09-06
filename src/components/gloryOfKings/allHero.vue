<template>
    <div class="imgBtnGrids">
                   <!-- <div v-for="item in navlist" class="weui-grid" @click="linkOfThePageType(item)">
			            <div class="weui_grid_icon">
                           <img :src="item.hero_img_id | theimgfir">
                        </div>
			            <p class="weui-grid__label">{{item.hero_name}}</p>
		            </div> -->
                   
                    <div class="weui-cells">
                            <div class="weui-cell" v-for="item in navlist">
                                <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                                    <img :src="item.ename | theimgfir" style="width: 50px;display: block">
                                    <!-- <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span> -->
                                </div>
                                <div class="weui-cell__bd">
                                    <p>{{item.cname}}</p>
                                    <p style="font-size: 13px;color: #888888;">{{item.title}}</p>
                                </div>
                            </div>
                     </div>


    </div>
</template>


<script>
	 export default {
	    data() {
          return {
              	navlist:[],
          }
          },
        mounted:function () {
                this.getIndexNav()
        },//mounted
         methods:{	 
             getIndexNav(){
	  		    this.$dialog.loading.open('很快加载好了');
                this.$http.get(_url+'json/herolist.json').then(response => {
                        this.$dialog.loading.close();
                        this.navlist = response.body;
                        console.log(this.navlist)
                    }, response => {
                        // error callback
                        console.log(response)
                    });
              },//getIndexNav()
              linkOfThePageType(val){
				  console.log(val)
				  if(val.path && val.path!=''){
						 this.$router.push({path:val.path});
				  }
	  		
	  		},//linkOfThePageType()
         },
         filters:{
            theimgfir:function(val){
               // return 'http://cdn.tgp.qq.com/kog/v3/images/hero/'+val+'.png';
               return 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/' + val + '/' + val + '.jpg';
            }  
         },
    }
</script>