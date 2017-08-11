<template>
    <yd-navbar title="NavBar" fixed fontsize="14px">
        <a @click="gobackUrl" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </a>
        <!-- <router-link to="#" slot="right">
            <yd-navbar-next-icon></yd-navbar-next-icon>
        </router-link> -->
    </yd-navbar>
</template>

<script>
    export default {
        methods:{
            gobackUrl(){
                window.history.go(-1);
            },
        },//methods
    }
</script>