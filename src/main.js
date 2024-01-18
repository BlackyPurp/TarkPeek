import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'


const app = createApp(App)
const head = createHead()

app.config.globalProperties.apihost = 'http://localhost:3000/peakpeek'

app.use(router)
app.use(head)
app.mount('#app')
