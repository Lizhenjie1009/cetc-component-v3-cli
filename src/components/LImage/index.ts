import { App } from 'vue'
import LImage from './LImage.vue'

// 给组件添加install方法，可以单独引入
LImage.install = (app: App) => {
  app.component(LImage.name, LImage)
}

export default LImage
