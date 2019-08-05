
// vue-cli@3.x的配置文档: https://cli.vuejs.org/zh/config/

const root = 'http://47.110.129.238:8080'

module.exports = {
  devServer: {
    open: true,
    proxy: { // 代理转发
      '/index/*': {
        target: root
      },
      '/aboutus/*': {
        target: root
      },
    }
  },
  pluginOptions: {}
}
