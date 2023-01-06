<template>
    <div class="resultFinal" :class="{disapproved: !approved}">
        <span v-if="approved">Parabéns!!! <br> Você acertou {{ percentage }}% das questões.</span>
        <span v-else>
            <div> Você acertou {{ percentage }}% das questões </div> 
            <div> Seja resiliente e tente novamente para conseguir uma nota maior! </div> 
        </span>
        <button @click="$emit('reset')">Iniciar Quiz</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percentage: ((this.correctAnswers / this.amountOfQuestions) * 100).toFixed(0),
        }
    },
    computed: {
        approved() {
            return this.percentage > 60
        }
    },
    props: {
        correctAnswers: {
            type: Number,
            required: true
        },
        amountOfQuestions: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
.resultFinal {
    height: 400px;
    width: 70%;
    border-radius: 20px;
    font-size: 2rem;

    display: flex;
    flex-direction: column;
    gap: 64px;
    justify-content: center;
    background-color: #aceb76;
    color: #139b28b4;
}

.resultFinal hr {
    color: #FFF;
}

.resultFinal.disapproved {
    background-color: #f56360;
    color: #a52616ec;
}

.resultFinal button {
    outline: none;
    border: none;
    align-self: center;
    padding: 10px 20px;
    font-size: 1.7rem;
    border-radius: 8px;
    background-color: #FFF;
    color: #30863d;
    font-weight: 600;
} 

.resultFinal.disapproved button {
    color: #bb2814;
}
</style>