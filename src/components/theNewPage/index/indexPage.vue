<template>
	<div class="indexPage">
		<sliderPage></sliderPage>
		<imgBtnGrids></imgBtnGrids>
        <yd-tabbar fixed>
            <yd-tabbar-item title="首页" link="#">
                <img slot="icon" src="../../../assets/img/al_svgIcon/browser.svg">
            </yd-tabbar-item>
            <yd-tabbar-item title="消息" link="#">
                 <img slot="icon" src="../../../assets/img/al_svgIcon/mailing.svg">
            </yd-tabbar-item>
            <yd-tabbar-item title="我的收藏" link="#">
                <img slot="icon" src="../../../assets/img/al_svgIcon/browser-3.svg">
            </yd-tabbar-item>
            <yd-tabbar-item title="设置" link="#">
                <img slot="icon" src="../../../assets/img/al_svgIcon/cogwheel.svg">
            </yd-tabbar-item>
        </yd-tabbar>

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