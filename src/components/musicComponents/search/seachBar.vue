<template>
	<div>

	    <div class="weui-search-bar"  :class="{'weui-search-bar_focusing':searchShow}">
	    	<div class="selectDiv" >
            		<select class="weui-select" v-model="from.selectVal" @keyup.enter="searchBarStateChange('searchWord')">
                        <option value="1">歌曲</option>
                        <option value="10">专辑</option>
                        <option value="100">歌手</option>
                        <option value="1000">歌单</option>
                        <option value="1002">用户</option>
                        <option value="1004">mv</option>
                        <option value="1006">歌词</option>
                        <option value="1009">主播电台</option>
                    </select>
            	</div>
            <div class="weui-search-bar__form">
            	
                <div class="weui-search-bar__box">

                    <i class="weui-icon-search"></i>
                    <!-- <input type="search" class="weui-search-bar__input" v-model="searchVal" @blur="searchBarStateChange('close')"  placeholder="搜索" required/> -->
                    <input type="text" class="weui-search-bar__input" v-model="from.searchVal"  @keyup.enter="searchBarStateChange('searchWord')" placeholder="搜索" />
                    <a href="javascript:" class="weui-icon-clear" @click="from.searchVal=''"></a>
                </div>
                <label class="weui-search-bar__label" @click="searchBarStateChange('show')" >
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </div>
            <a  class="weui-search-bar__cancel-btn" @click="searchBarStateChange('searchWord')">搜索</a>

        </div>


	</div>
</template>

<script>
	//weui-search-bar_focusing
	export default {
		data() {
	      return {
	      	searchShow:false,
            from:{
                searchVal:'',
                selectVal:'1',
            }
	      	
	      }
	  	},//data()
	  	methods:{
	  		searchBarStateChange(val){
	  			switch(val){
	  				case 'show':
	  				this.searchShow = true;
	  				break;
	  				case 'close':
	  				this.searchShow = false;
	  				break;
                    case 'searchWord':
                        if(this.from.searchVal==''){
                           this.$dialog.notify({
                                mes: '搜索内容不能为空哦！',
                                timeout: 3000,
                            });
                        }else{
                            this.$emit('searchEvent',this.from);
                        }
                    break;
	  			}
	  		},//searchBarStateChange
	 	},//methods
	}
</script>

<style>
.selectDiv{
	display: none;
}
.selectDiv .weui-select{
	width: 105px;
    box-sizing: border-box;
	height: 28px;
	line-height: 28px;
	padding:0 15px;
}
.weui-search-bar_focusing .selectDiv{
    position: relative;
	display: block;
}
 .selectDiv:before {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -4px;
}
</style>