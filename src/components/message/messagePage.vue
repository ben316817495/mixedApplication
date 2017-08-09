<template>
	<div class="messagePage">
		<div class="page__hd">
	        <h1 class="page__title">留言板</h1>
	        <p class="page__desc">感谢您的留言，我将第一时间答复您！</p>
	    </div>
		<div class="page__bd">
			 	 <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left">您的称呼：</span>
			            <yd-input slot="right" v-model="input1"  placeholder="请输入用户名"></yd-input>
			        </yd-cell-item>
			        <yd-cell-item>
			            <span slot="left">手机号：</span>
			            <yd-input slot="right" v-model="input9" ref="input9" required regex="mobile" placeholder="请输入手机号码"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                input9: '',
                result: ''
            }
        },
        methods: {
            clickHander() {
                const input = this.$refs.input9;
                this.result = `{<br />  valid：${input.valid}，<br />  errorMes：'${input.errorMsg}'，<br />  errorCode：'${input.errorCode}'<br />}`;
            }
        }
    }
</script>