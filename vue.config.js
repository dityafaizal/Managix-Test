module.exports = {
  // devServer: {
  //   proxy: 'https://vuejs.org/',
  // },
  chainWebpack: config => {
      config.module.rules.delete('eslint')
      config.resolve.alias.set('vue', '@vue/compat')
      config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/Base.scss";
        `
      }
    }
  },
}
