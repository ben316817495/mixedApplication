<template>
	<div class="toastLoading" v-show="toastLoadingShow">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
	</div>
</template>

<script>
	export default {
		props:['toastLoadingShow'],
		data(){
			return{

			}
		},//data
		methods:{
			
		},//methods
	}
</script>