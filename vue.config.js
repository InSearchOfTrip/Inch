module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        /** Set "$width" and "$height" from "clm.config" and include global variables and mixins to all styles. **/
        prependData: `     
        `,
      },
    },
  },

  chainWebpack: config => {
    /** Replace SVG loader **/
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    /** Set Ignore options for using Restricted Workspace in development mode. **/
    if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_RESTRICTED_WORKSPACE_REGEX) {
      const webpack = require('webpack');
      // const { structure } = require('./src/clm.config');
      const IgnoredSlides = require('vue-cli-plugin-clm-builder/lib/sharedUtils/IgnoredSlides');
      const ignored = new IgnoredSlides(new RegExp(process.env.VUE_APP_RESTRICTED_WORKSPACE_REGEX), structure);

      config
        .plugin('ignore')
        .use(webpack.IgnorePlugin, [ignored.regexp, /slides|data|assets/]);

      config
        .devServer
        .watchOptions({ ignored: ignored.regexp });
    }
  },
};
