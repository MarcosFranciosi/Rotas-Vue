<template>
    <div>
        <h3 class="font-weigth-light">Detalhes dobre o Contato com id: {{ id }}</h3>
        <router-link 
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary">
                Editar
        </router-link>
    </div>
</template>

<script>
export default {
   props: ['id'],
    created() {
        console.log('parametros da rota: ', this.$props);
    }
}
</script>