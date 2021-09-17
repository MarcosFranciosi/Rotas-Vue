import { createRouter, createWebHistory } from 'vue-router'
import Contatos from '../views/contatos/Contatos.vue'
import ContatoDetalhes from '../views/contatos/ContatoDetalhes.vue'
import ContatoEditar from '../views/contatos/ContatoEditar.vue'
import ContatosHome from '../views/contatos/ContatosHome.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/contatos',
    name: 'Contatos',
    component: Contatos,
    children: [
      {
        path: ':id',
        name: 'Detalhes',
        component: ContatoDetalhes
      },
      {
        path: ':id/editar',
        components: {
          default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes
        } 
      },
      {
        path: '',
        component: ContatosHome
      }
    ]
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
