const path = require('path');

const modifyVars = require('./themes/default/vars');

module.exports = {
  getTheme() {
    return modifyVars;
  },
  getConfig({ webpackConfig }) {
    webpackConfig.devtool = 'cheap-module-eval-source-map';

    // 加入markdown的解析
    webpackConfig.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    // webpackConfig.module.rules[0].include = [path.join(__dirname, 'src')];

    // babel-plugin-import的配置
    const { use } = webpackConfig.module.rules[0];

    const babelLoaderConfig = use.find((loaderConfig) => {
      if (typeof loaderConfig === 'string') return false;

      if (typeof loaderConfig === 'object' && 'loader' in loaderConfig) {
        return loaderConfig.loader === 'babel-loader';
      }

      return false;
    });

    if (babelLoaderConfig) {
      babelLoaderConfig.options.plugins.push(
        [
          'import',
          {
            libraryName: '@baifendian/adhere',
            libraryDirectory: 'es',
            transformToDefaultImport: true,
            style: true,
          },
          'adhere',
        ],
        [
          'import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
          },
          'ant',
        ],
      );
    }

    if (webpackConfig.mode === 'production') {
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          antdesigncompatible: {
            test: /[\\/]node_modules[\\/](@ant-design[\\/]compatible|_@ant-design_compatible)/,
            priority: 1,
            enforce: true,
          },
          antdesignicons: {
            test: /[\\/]node_modules[\\/](@ant-design[\\/]icons|_@ant-design_icons)/,
            priority: 1,
            enforce: true,
          },
          echart: {
            test: /[\\/]node_modules[\\/](echarts-for-react|_echarts-for-react|echarts|_echarts)/,
            priority: 4,
            enforce: true,
          },
          ctsj: {
            test: /[\\/]node_modules[\\/](@ctsj)/,
            priority: 1,
            enforce: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react-intl-universal|_react-intl-universal|react|_react|react-dom|_react-dom|react-router|_react-router|prop-types|_prop-types|history|_history)/,
            priority: 1,
            enforce: true,
          },
          antd: {
            test: /[\\/]node_modules[\\/](antd|_antd|rc|_rc)/,
            priority: 1,
            enforce: true,
          },
          static: {
            test: /[\\/]node_modules[\\/](lodash|_lodash|js-md5|_js-md5|classnames|_classnames|uuid|_uuid|qs|_qs|moment|axios|_axios|_cookie_js|_moment|swiper|_swiper)/,
            priority: 1,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: -1,
            enforce: true,
          },
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -1,
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: -1,
            reuseExistingChunk: true,
          },
          utilities: {
            priority: -1,
            minChunks: 2,
            test: /[\\/]src[\\/]components[\\/]/,
            minSize: 0,
          },
          vendors: false,
          default: false,
        },
      };
    }
  },
};
