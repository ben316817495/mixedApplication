<template>
<div>
        <!-- <div>11111</div> -->
        <yd-tabbar fixed fontsize="14px">
            <yd-tabbar-item title="首页" link="/index">
                <img slot="icon" src="../../assets/img/al_svgIcon/browser.svg" >
            </yd-tabbar-item>
            <yd-tabbar-item title="消息" link="#" @click.native="show1 = true">
                 <img slot="icon" src="../../assets/img/al_svgIcon/mailing.svg">
            </yd-tabbar-item>
            <yd-tabbar-item title="我的收藏" link="#">
                <img slot="icon" src="../../assets/img/al_svgIcon/browser-3.svg">
            </yd-tabbar-item>
            <yd-tabbar-item title="设置" link="#">
                <img slot="icon" src="../../assets/img/al_svgIcon/cogwheel.svg">
            </yd-tabbar-item>
        </yd-tabbar> 
        <yd-actionsheet :items="myItems1" v-model="show1" cancel="取消"></yd-actionsheet>
</div>
</template>


<script>
    export default {
        data() {
            return {
                show1: false,
                myItems1: [
                    {
                        label: '菜单测试1',
                        method: () => {
                            this.$dialog.toast({mes: '菜单测试1'});
                            /* 注意： method: function() {} 和 method() {}  这样是无法正常使用当前this的 */
                        }
                    },
                    {
                        label: '菜单测试2',
                        method: () => {
                            this.$dialog.toast({mes: '菜单测试2 '});
                        }
                    }
                ]
            }
        }
    }
</script>