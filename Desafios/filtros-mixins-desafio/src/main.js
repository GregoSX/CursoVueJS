import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('tamanho', function(valor){
	const arr = valor.split(' ')
	let res = ' '
	for(const i in arr) {
		res += `${arr[i]} (${arr[i].length}) `
	}
	return res
})

new Vue({
	render: h => h(App),
}).$mount('#app')
