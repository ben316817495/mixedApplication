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
 import '@/assets/css/icomoon/style.css';

export default {
  name: 'app'
}
</script>

