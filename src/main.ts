import { createApp } from 'vue'
import App from './App'
import router from './routes'

const app = createApp(App)
app.use(router)
app.mount('#app')
