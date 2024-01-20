import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import store from './composables/store'

const app = createApp(App)
const head = createHead()

app.config.globalProperties.apihost = 'http://localhost:3000/peakpeek'

app.use(store)
app.use(router)
app.use(head)
app.mount('#app')
export default{
    app
}