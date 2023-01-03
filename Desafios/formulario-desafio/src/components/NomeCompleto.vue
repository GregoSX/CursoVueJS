<template>
    <div>
        {{ nome }} {{ sobrenome }}
    </div>
</template>

<script>
export default {
    props: [ 'nome','sobrenome'] 
}
</script>