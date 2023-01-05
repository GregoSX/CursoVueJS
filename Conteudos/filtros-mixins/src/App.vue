<template>
	<div id="app">
		<h1>Filtros &amp; Mixins</h1>
		<hr>
		<p>{{ cpf | cpf }}</p>
		<p>{{ nome | inverter }}</p>
		<hr>
		<Frutas />
		<hr>
		<ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add()">
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import FrutasMixin from './FrutasMixin'

export default {
  	components: { 
		Frutas 
	},
	mixins: [FrutasMixin],
	filters: {
		cpf(valor) {
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '60030096042',
			nome: 'Grego'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
</style>
