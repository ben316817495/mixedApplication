<template>

    <div class="mainView">
        <topFlx></topFlx>
        <transition name="slide-fade">
			<router-view></router-view>
		</transition>
        <bottomFlx></bottomFlx> 
    </div>
  
</template>

<script>
  import topFlx from '@/components/public/topFlx'
  import bottomFlx from '@/components/public/bottomFlx'
  export default {
    name: 'indexPage',
    components: {bottomFlx,topFlx},
}
</script>
