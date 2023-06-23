import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './static/main.css'
import './static/ColorModes.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
