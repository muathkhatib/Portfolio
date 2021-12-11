const CracoLessPlugin = require('craco-less');

// all less variables could be found in
//  https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less.

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@theme': 'dark',
              '@body-background': '#0B0C10',
              '@component-background': '#17181D',
              '@primary-color': '#CD9C71',
              '@primary-1': '#0B0C10',
              '@text-color': '#FFFFFF',
              '@text-color-secondary': '#BABABA',
              '@font-family': 'Poppins,-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial,\'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\',\'Noto Color Emoji\'',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
