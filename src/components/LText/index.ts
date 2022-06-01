import { App } from 'vue'
import LText from './LText.vue'

// 给组件添加install方法，可以单独引入
LText.install = (app: App) => {
  app.component(LText.name, LText)
}

export default LText
