<template>
    <div class="result" :class="{ wrong: !result }">
        <span v-if="result">Respostas certa :)</span>
        <span v-else>Resposta errada :(</span>
        <button @click="$emit('confirmed')">Próxima pergunta</button>
    </div>
</template>

<script>
export default {
    props: {
        result: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>
    .result {
        height: 400px;
        width: 70%;
        border-radius: 20px;
        font-size: 5.5rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 64px;
        background-color: #89c454;
        color: #30863d;
    }

    .result.wrong {
        background-color: #f05250;
        color: #bb2814;
    }

    .result button {
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

    .result.wrong button {
        color: #bb2814;
    }
</style>
