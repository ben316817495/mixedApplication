const loginMethods = {
	methods:{
		getHttpApi(url){
			return new Promise((resolve, reject) => {
				this.$http.get(url).then(response => {
				   	resolve(response.body)
				  }, response => {
				    // error callback
				   reject(error);
				 });
			});
		},//getHttpApi
	},//methods
}

export default loginMethods