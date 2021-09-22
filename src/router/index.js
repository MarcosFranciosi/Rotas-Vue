import { createRouter, createWebHistory } from 'vue-router'
import Contatos from '../views/contatos/Contatos.vue'
import ContatoDetalhes from '../views/contatos/ContatoDetalhes.vue'
import ContatoEditar from '../views/contatos/ContatoEditar.vue'
import ContatosHome from '../views/contatos/ContatosHome.vue'
import Erro404 from '../views/Erro404.vue'
import Home from '../views/Home.vue'
import Login from '../views/login/Login.vue'


const routes = [
  
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    component: Login,
    name: 'Login'
  },

  {
    path: '/meus-contatos',
    name: 'Contatos',
    component: Contatos,
    alias:['/Contatos', '/lista-de-contatos'],
    props: (route) => {
      const busca = route.query.busca
      return busca ? { busca } : {}
    },
    children: [
      {
        path: ':id',
        name: 'Detalhes',
        component: ContatoDetalhes,
        props: true
      },
      {
        path: ':id/editar',
        alias:':id/alterar',
        meta: { requerAutenticacao: true },
        components: {
          default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes
        },
        props: {
          default: true,
          'contato-detalhes': true
        } 
      },
      {
        path: '',
        component: ContatosHome
      }
    ]
  },

  //Redirecionando rota 
  { path: '/contatos', redirect: '/meus-contatos' },


  { path: '/404', component: Erro404 },
  // { path: '*', redirect: '/404' },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  console.log('Requer autenticação?', to.meta.requerAutenticacao)
  const estaAutenticado = true
  if (to.matched.some(rota => rota.meta.requerAutenticacao)) {
    if(!estaAutenticado) {
      next({
        path: '/login',
        query: { redirecionar: to.fullPath}
      })
      return
    }
  }
  next()
})

export default router
