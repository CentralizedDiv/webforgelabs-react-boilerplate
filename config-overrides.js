const path = require('path');
const fs = require('fs');
const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra');
const lessToJs = require('less-vars-to-js');

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/config/style/theme.less'), 'utf8'));

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables,
  }),
  addBabelPlugin('react-hot-loader/babel'),
  config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
    return config;
  }
);
