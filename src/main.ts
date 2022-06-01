import { createApp } from 'vue'
import App from './App.vue'
import plugins from './test.plugin'
const app = createApp(App)
app.use(plugins)
app.mount('#app')
