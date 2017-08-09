<template>
  <div id="app">
    <transition name="slide-fade">
    <router-view></router-view>
    </transition>
    <yd-backtop></yd-backtop>
  </div>
</template>

<script>
 import '@/assets/css/css/style.css';
 //字体
 //import '@/assets/css/icomoon/style.css';
 import '@/assets/font/iconfont.css';

export default {
  name: 'app'
}
</script>

