const path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(
  fs.readFileSync(
    path.join(__dirname, '../src/config/style/theme.less'),
    'utf8'
  )
);

module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.resolve.modules.push(path.resolve(__dirname, '../src'));

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        [
          'import',
          {
            libraryName: 'antd',
            style: true,
          },
        ],
      ],
    },
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'less-loader',
        options: {
          modifyVars: themeVariables,
          javascriptEnabled: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });
  return config;
};
