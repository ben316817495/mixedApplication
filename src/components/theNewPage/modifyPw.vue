
<template>
    <div class="loginPage modifyPw">
            <div class="bgimg"> </div>
            <div class="logoimg"></div>
            <div class="inputDevice">
                <div class="inputBox_container">
                    
                    <div class="inputBox_line">
                        <div class="inputBox_icon"><i class="iconfont icon-unlock2"></i></div>
                        <div class="inputBox_inputbox"><input class="inputBox_input" placeholder="请输入原有密码" /></div>
                    </div>
                     
                    <div class="inputBox_line">
                        <div class="inputBox_icon"><i class="iconfont icon-unlock1"></i></div>
                        <div class="inputBox_inputbox"><input class="inputBox_input" placeholder="请输入新密码" /></div>
                    </div>
                   
                    <div class="inputBox_line">
                        <div class="inputBox_icon"><i class="iconfont icon-unlock1"></i></div>
                        <div class="inputBox_inputbox"><input class="inputBox_input" placeholder="请再次输入密码" /></div>
                    </div>
                
                </div>
                
                <div class="inputBottom_button">
                    <a class="weui-btn weui-btn_logincolor" @click="gotoUrl('/index')">修改密码</a>    
                </div>

                <div class="inputBottom_textLine">
                    <div class="textLine_left"  @click="gotoUrl('/index/myPage')"><i class="iconfont icon-lingcunwei"></i> 取消修改密码</div>
                    <!-- <div class="textLine_right">Not registered yet?</div> -->
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