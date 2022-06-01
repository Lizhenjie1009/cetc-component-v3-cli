import { App } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const plugins = {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld)
    app.provide('test', { message: 'from plugins' })
  }
}

export default plugins
