<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-3" @click="exibir = !exibir">Mostrar mensagem</b-button>
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ mensagem }}</b-alert>
		</transition>
		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir">{{ mensagem }}</b-alert>
		</transition>

		<hr>
		<b-select v-model="tipoAnimacao" class="mb-2 mt-2">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ mensagem }}</b-alert>
			<b-alert variant="danger" show v-else key="danger">{{ mensagem }}</b-alert>
		</transition>

		<hr>

		<b-button variant="secondary" @click="exibir2 = !exibir2">Altenar</b-button>
		<transition :css="false"
			@before-enter="beforeEnter"
			@enter="enter"

			@before-leave="beforeLeave"
			@leave="leave"
		>
			<div class="caixa" v-if="exibir2"></div>
		</transition>

		<hr>
		<b-button class="mb-2" @click="adicionarAluno()">Adicionar</b-button>
		<transition-group name="fade">
			<b-list-group v-for="(aluno, index) in alunos" :key="index">
				<b-list-group-item @click="removerAluno">{{ aluno }} {{ index }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagem: 'Uma informação para o usuário!',
			exibir: false,
			tipoAnimacao: 'fade',
			exibir2: false,
			larguraBase: 0,
			alunos: ['aluno0', 'aluno1']
		}
	},
	methods: {
		adicionarAluno() {
			this.alunos.push(`aluno${this.alunos.length}`)
		},
		removerAluno(index) {
			this.alunos.splice(index, 1)
		},
		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = negativo ? this.larguraBase - rodada * 10 : this.larguraBase + rodada * 10 
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
		},
		/* afterEnter(el) {

		},
		enterCancelled(el) {

		}, */
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
		/* afterLeave(el) {

		},
		leaveCancelled(el) {

		} */
	},
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

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightcoral;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
}

.slide-leave-active {
	animation: slide-out 2s ease;
}

</style>
