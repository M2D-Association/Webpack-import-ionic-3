const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;


if (env === 'prod' || env === 'dev') {
  useDefaultConfig[env].resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@pages": path.resolve('./src/pages/'),
    "@providers": path.resolve('./src/providers/'),
    "@mocks": path.resolve('./src/mocks/'),
    "@models": path.resolve('./src/models/'),
    "@theme": path.resolve('./src/theme/')
  };

} else {

  // Default to dev config
  useDefaultConfig[env] = useDefaultConfig.dev;
  useDefaultConfig[env].resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@pages": path.resolve('./src/pages/'),
    "@providers": path.resolve('./src/providers/'),
    "@mocks": path.resolve('./src/mocks/'),
    "@models": path.resolve('./src/models/'),
    "@theme": path.resolve('./src/theme/')
  };

}


module.exports = function () {
  return useDefaultConfig;
};
