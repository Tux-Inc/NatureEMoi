import '../public/assets/index.css'
import 'boxicons/css/boxicons.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
