
<template>
    <div class="startUp">
            <div class="bgimg"> </div>
            <!-- <div class="logoimg"></div> -->

            <div class="logofull"></div>
            <div class="fragment_center"></div>
            <div class="fragment_left"></div>
            <div class="fragment_right"></div>
            <div class="logotext"></div>
            <div class="logotext_topsmall">Engineer of browser side</div>


            <div class="logoBottom_btnLine">
                <div class="logoBottom_btnLeft">
                     <a class="weui-btn weui-btn_logincolor" @click="gotoUrl('/loginPage')" href="javascript:">登陆</a>    
                </div>
                 <div class="logoBottom_btnRight">
                    <a class="weui-btn weui-btn_loginnocolor"  @click="gotoUrl('/index')" href="javascript:">游客访问</a>
                </div>
            </div>
           
            <div class="bottomFontStyle">
                Copyright © 2017 xinyi-移动产品部.前端团队
            </div>
    </div>
</template>

<script>
export default {
  methods:{
    gotoUrl(val){
       this.$router.push({path:val});  
    },
  },//methods
}
</script>
