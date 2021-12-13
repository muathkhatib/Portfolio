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
              theme: dark,

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
