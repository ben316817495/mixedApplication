
<template>
    <div class="loginPage modifyPw">
            <div class="bgimg"> </div>
            <div class="logoimg"></div>
            <div class="inputDevice">
                <div class="inputBox_container">
                    
                    <div class="inputBox_line">
                        <div class="inputBox_icon"><i class="iconfont icon-people"></i></div>
                        <div class="inputBox_inputbox"><input class="inputBox_input" placeholder="请输入账号" /></div>
                    </div>
                     
                    <div class="inputBox_line">
                        <div class="inputBox_icon"><i class="iconfont icon-unlock2"></i></div>
                        <div class="inputBox_inputbox"><input class="inputBox_input" placeholder="请输入密码" /></div>
                    </div>
                   
                    <div class="inputBox_line">
                        <div class="inputBox_icon"><i class="iconfont icon-unlock2"></i></div>
                        <div class="inputBox_inputbox"><input class="inputBox_input" placeholder="请输入密码" /></div>
                    </div>
                
                </div>
                
                <div class="inputBottom_button">
                    <a class="weui-btn weui-btn_logincolor" @click="gotoUrl('/index')">注册账号</a>    
                </div>

                <div class="inputBottom_textLine">
                    <div class="textLine_left"  @click="gotoUrl('/readyMian/loginPage')">已有账号？马上登陆</div>
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