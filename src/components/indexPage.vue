<template>
	<div class="indexPage">
		<sliderPage></sliderPage>
		<imgBtnGrids></imgBtnGrids>
	</div>
</template>

<script>
  import sliderPage from '@/components/indexPage/slider'
  import imgBtnGrids from '@/components/indexPage/imgBtnGrids'

  export default {
    name: 'indexPage',
    components: {sliderPage,imgBtnGrids},
}

</script>