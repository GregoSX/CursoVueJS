<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ nomeCompleto | espacoPorVirgula }}</p>

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ nomeCompleto | tamanho}}</p>
		<hr>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ fraseComVirgula }}</p>
		<p>{{ contarLetras }}</p>
		<hr>
		
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import fraseMixin from './fraseMixin'

export default {
	mixins: [fraseMixin],
	filters: {
		espacoPorVirgula(valor) {
			return valor.split(' ').join(',')
		}
	},
	data() {
		return {
			nomeCompleto: "Gui Grego Santos",
			frase: 'Eu tenho 21 anos e moro em Lavras.'
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
	font-size: 2rem;
}
</style>
