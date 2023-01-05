<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva <strong>v-text</strong>'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo="cor">Usando diretiva global personalizada com cor no fundo </p>
		<p v-destaque="'red'">Usando diretiva global personalizada com cor na fonte </p>
		<hr>
		<p v-destaque-local:fundo.atrasar="'lightblue'">Usando diretiva local personalizada com modificador </p>
		<p v-destaque-local.atrasar="'gray'">Usando diretiva local personalizada com modificador </p>
		<hr>
		<p v-destaque-local.atrasar.altenar="'gray'">Usando diretiva local personalizada com múltiplos modificadores </p>
		<p v-destaque-local:fundo.atrasar.altenar="'gray'">Usando diretiva local personalizada com múltiplos modificadores </p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') 
						el.style.backgroundColor = cor	
					else 
						el.style.color = cor
				}
				
				let atraso = 0
				if(binding.modifiers['atrasar'])
					atraso = 3000

				const cor1 =  binding.value
				const cor2 = 'lightgray'
				let corAtual = cor1

				setTimeout(() => {
					if(binding.modifiers['altenar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, 1000)
					} else {
						aplicarCor(corAtual)
					}
				}, atraso)
			}
		}
	},
	data() {
		return {
			cor: "lightgreen"
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
