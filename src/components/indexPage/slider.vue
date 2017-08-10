<template>
	<div class="sliderPage">
	<yd-flexbox>
		<yd-slider>
	       <!--   <yd-slider-item v-for="item in banner">
	            <a>
	                <img :src="item.pic">
	            </a>
	        </yd-slider-item>  -->

	         <yd-slider-item >
	            <a>
	                <img src="../../assets/img/banner2.jpg">
	            </a>
	        </yd-slider-item>

			<yd-slider-item >
	            <a>
	                <img src="../../assets/img/banner1.jpg">
	            </a>
	        </yd-slider-item>

	       
	        
	        
	    </yd-slider>
	  </yd-flexbox>
	</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	      	banner:[
	      		// {pic:"../../assets/img/banner.jpg"},
	      	],
	      }
	  },//data()
	   mounted:function () {
	   	this.getBanner()
	  },//mounted
	  methods:{	 
	  		getBanner(){
  			 this.$http.get(_url).then(response => {
				    // get body data
				    this.banner = response.body.banners;
				    //console.log(this.banner)
				  }, response => {
				    // error callback
				    console.log(response)
				  });
	  		}
	  },//methods
	}
 </script>

