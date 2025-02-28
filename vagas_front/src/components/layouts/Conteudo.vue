<template>
  <div>
    <h1>{{titulo}}</h1>
    <button @click='atualizarComponente()'>Atualizar</button>
    <button @click="conteudo = 'home' ">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>

    <!-- renderizar de modo dinâmico os componentes home e publicar-vaga -->
    <!--<home/>-->
    <!--<publicar-vaga/>-->
    <keep-alive>
      <component :is="conteudo" />  
    </keep-alive>
  </div>
</template>

<script>
import Home from '../views/Home.vue'
import PublicarVaga from '../views/PublicarVaga.vue'
export default{
  name: 'Conteudo',
  components:{
    Home,
    PublicarVaga
  },
  data: () => ({
    teste: 'O componente foi criado',
    titulo: 'Componente Conteudo',
    conteudo: 'home'
  }),
  methods: {
    atualizarComponente() {
      this.titulo += '*'
    }
  },
  /*  
  beforeCreate() {
    console.log('Antes de criar', this.teste)
  },
  created() {
    console.log('Criado', this.teste)
  },

  beforeMount() {
    console.log('Antes de montar o template')
  },

  mounted() {
    console.log('Montado')
  },
  beforeUpdate() {
    console.log('Antes de atualizar')
  },

  updated() {
    console.log('Atualizado')
  },

  beforeUnmount() {
    console.log('Antes de desmontar/destruir')
  },
  unmounted() {
    console.log('Donstado/destruído')
  },
  

  errorCaptured() {
    console.log('Erro capturado')
  },
  renderTracked() {
    console.log('Re-renderização rastreada')
  },
  renderTriggered() {
    console.log('Re-renderização acionada')
  },
  activated() {
    console.log('Componente é ativado')
  },
  deactivated() {
    console.log('Componente é desativado')
  },*/
}
</script>

<style scoped>
  
</style>
