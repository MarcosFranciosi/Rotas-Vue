<template>
        <div>
        <h3 class="fontweight-ligth">Contatos</h3>

        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaIten
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"/>
        </ul>

        <p v-else>Nenhum Contato Cadastrado</p>

        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button> 
    </div>
</template>

<script>

import ContatosListaIten from './ContatosListaiten.vue'

export default {
    components: {
        ContatosListaIten
    },
    data() {
        return {
            contatos: [
                {id: 1, nome: 'Isaac Newton', email: 'isaac@email.com'},
                {id: 2, nome: 'Albert Einstein', email: 'albert@email.com'},
                {id: 3, nome: 'Stephen Hawking', email: 'stephen@email.com'}
            ]
        }
    },
    methods: {
        voltar() {
            this.$router.back()
        }
    }
}
</script>