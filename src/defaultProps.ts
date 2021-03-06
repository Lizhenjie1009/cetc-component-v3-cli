import { mapValues, without } from 'lodash-es'

// 编辑器通用属性
export const commonDefaultProps = {
  // actions事件
  actionType: '',
  url: '',
  // size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWdith: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}

// 文本通用属性
export const textDefaultProps = {
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000',
  backgroundColor: '',
  ...commonDefaultProps
}

// 图片通用属性
export const imageDefaultProps = {
  src: '',
  ...commonDefaultProps
}

// 移除文本非样式属性
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)
// 移除图片非样式属性
export const imageStylePropNames = without(
  Object.keys(imageDefaultProps),
  'actionType',
  'url',
  'src'
)

export const isEditingProp = {
  isEditing: {
    type: Boolean,
    defeult: false
  }
}
// 处理为vue-props声明的值
export const transformToComponentProps = <T extends { [key: string]: any }>(
  props: T
) => {
  const mapProps = mapValues(props, item => {
    // item：值
    // item.constructor：当前item的实例String/Number
    // 返回 {text: {type: String, default: '正文内容'}}
    return {
      type: item.constructor,
      default: item
    }
  })
  return { ...mapProps, ...isEditingProp }
}

export interface CommonComponentProps {
  // actions事件
  actionType: string
  url: string
  // size
  height: string
  width: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  // border type
  borderStyle: string
  borderColor: string
  borderWdith: string
  borderRadius: string
  // shadow and opacity
  boxShadow: string
  opacity: number
  // position and x,y
  position: string
  left: string
  top: string
  right: string
}

export interface TextComponentProps extends CommonComponentProps {
  text: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  textDecoration: string
  lineHeight: string
  textAlign: string
  color: string
  backgroundColor: string
}

export interface ImageComponentProps extends CommonComponentProps {
  src: string
}
