<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<transition v-if="currentQuestion < questions.length" name="flip" mode="out-in">
				<Question :question="questions[currentQuestion]" v-if="questionMode" @answered="showResult"/>
				<Result :result="result" v-else @confirmed="nextQuestion"/>
		</transition>
		<transition  v-else name="flip" mode="out-in">
			<Finished :correctAnswers="correctAnswers" :amountOfQuestions="questions.length" @reset="resetQuiz"/>
		</transition>
	</div>
</template>

<script>
import Question from './components/Question.vue'
import questions from './util/questions'
import Result from './components/Result.vue';
import Finished from './components/Finished.vue';

export default {
	components: { 
		Question,
		Result,
		Finished
	},	
	data() {
		return {
			result: false,
			questionMode: true,
			questions,
			currentQuestion: 0,
			correctAnswers: 0
		}
	},
	methods: {
		showResult(result) {
			this.result = result
			this.questionMode = false
			if(result)
				this.correctAnswers++
		},
		nextQuestion() {
			this.questionMode = true
			this.result = false
			this.currentQuestion++
		},
		resetQuiz() {
			this.result = false,
			this.questionMode = true
			this.correctAnswers = 0
			this.currentQuestion = 0
		}
	},
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
