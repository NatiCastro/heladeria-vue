import { createApp } from 'vue'
import router from './router/index.js'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import { createPinia } from 'pinia'
import App from './App.vue'


const app = createApp(App);

const pinia = createPinia();

app.use(pinia)

app.use(router)


app.use(Vuesax)

app.mount('#app')

