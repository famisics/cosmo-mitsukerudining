import { createApp } from 'vue'
import VueGtag from "vue-gtag"
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './static/main.css'
import './static/ColorModes.js'

const app = createApp(App)

app.use(router)
app.use(VueGtag, {
  config: { id: "G-CJGRVF45YV" }
})
app.mount('#app')
