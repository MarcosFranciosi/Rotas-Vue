<template>
  <div id="app">

    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Vue Router</h1>
        <p class="lead">Adicionando rotas a Single Page Applications no Vue</p>
      </div>
    </div>

  <div class="container">

    <router-link 
      to="/" 
      class="btn btn-info mb-4 ms-2"
      exact>
      Home
    </router-link>
    <router-link 
      to="/contatos" 
      class="btn btn-info mb-4 ms-2">
      Contatos
    </router-link>
    
    <router-view/>

  </div>

  </div>
</template>


