import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import mitt from "mitt"

//criar a instância do pacote mitt
const emitter = mitt()

//iniciar a instância do vue com base no componente
//createApp(App).mount('#app')

const app =  createApp(App)

//configurar a instancia do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associar a instância do vue com o elemento HTML de id app
app.mount('#app')