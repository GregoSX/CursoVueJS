<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="Nome">
					<input type="text" v-model="user.nome">
				</Rotulo>

				<Rotulo nome="Sobrenome">
					<input type="text" v-model="user.sobrenome">
				</Rotulo>

				<Rotulo nome="E-mail">
					<input type="text" v-model="user.email">
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="user.senha">
				</Rotulo>

				<Rotulo nome="Armazenar dados">
					<span class="mr-4"> 
						<input type="radio" value="sim" v-model="armazenado"/> Sim
					</span>
					<span class="mr-4">
						<input type="radio" value="nao" v-model="armazenado"/> Não
					</span>
				</Rotulo>
				<hr>
				<button @click.prevent="enviar()">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>

				<Rotulo nome="Nome">
					<NomeCompleto :nome="user.nome" :sobrenome="user.sobrenome"/>
				</Rotulo>

				<Rotulo nome="E-mail">
					{{ user.email }}
				</Rotulo>

				<Rotulo nome="Senha">
					{{ user.senha }}
				</Rotulo>

				<Rotulo nome="Armazenar dados">
					{{ armazenado }}
				</Rotulo>

			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			enviado: false,
			armazenado: 'sim',
			user: {
				nome: '',
				sobrenome: '',
				email: '',
				senha: '',
			}
		}
	},
	methods: {
		enviar() {
			this.enviado = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
