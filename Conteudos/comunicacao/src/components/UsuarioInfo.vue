<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <b>{{ inverterNome() }}</b></p>
        <p>Idade do usuário é {{ idade }} anos.</p>
        <button @click="ReiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true
            // default: 'Gui'
        },
        idade: {
            type: Number
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        ReiniciarNome() {
            const antigo = this.nome
            this.nome = 'Gui'
            this.$emit('nomeMudou', {novo: this.nome, antigo})
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
