<template>
  <div class="cotainer py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    
    <lista-vagas>
      <!--
      <template v-slot:titulo="slotProps">
        {{ slotProps.dadosTitulo.titulo }}
        <hr>
      </template>
    
      <template v-slot:default="slotProps">
        {{ slotProps.vagas }}
        <hr>
      </template>
    
      <template v-slot:rodape="slotProps">
        {{ slotProps.dadosRodape.titulo }}
        <hr>
      </template>
      -->

    </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-ligth"
          color="text-dark"
        ></Indicador>
      </div>

      <div class="col-4">
        <Indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>

      <div class="col-4">
        <Indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-ligth"
          color="text-dark"
        ></Indicador>
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "../../components/comuns/Indicador.vue";
import PesquisarVaga from "../comuns/PesquisarVaga.vue";
import ListaVagas from "../comuns/ListaVagas.vue";

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas,
  },

  data: () => ({
    usuariosOnline: 0,
  }),

  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },

  created() {
    setInterval(this.getUsuariosOnline, 1000); // a cada um segundo
  },
};
</script>

<style scoped></style>
