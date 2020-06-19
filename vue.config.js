module.exports = {
  // devServer: {
  //   proxy: 'https://vuejs.org/',
  // },
  chainWebpack: config => {
      config.module.rules.delete('eslint');
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
