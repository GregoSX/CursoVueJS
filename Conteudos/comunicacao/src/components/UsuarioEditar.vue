<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário é {{ idade }} anos.</p>
        <button @click="AlterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
export default {
    props: {
        idade: {
            type: Number
        }
    },
    methods: {
        AlterarIdade() {
            this.$emit('idadeMudou', 25)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
