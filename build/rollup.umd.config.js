import basicConfig, { name, file } from './rollup.config'

export default {
  ...basicConfig,
  output: {
    name: 'CetcComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      vue: 'vue',
      'lodash-es': '-'
    },
    exports: 'named'
  }
}
