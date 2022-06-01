import { App } from 'vue'
import LText from './components/LText/index'
import LImage from './components/LImage/index'

const components = [LText, LImage]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 单独引入使用
export { LText, LImage, install }

// 全局安装组件库
export default install
