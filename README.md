# @ imports in ionic 3 using Webpack

A simple project where import are made using "@".
Add modularity to an ionic project.

## Getting Started

Simply clone this repo and look around to see the import using "@directory/file".
Be careful this project does not use cordova, but is compatible if you choose to use it. 

### Installing

Clone the repo then : 
```
npm install
```

Compatible with ionic serve:
```
ionic serve
```

Warning : Cordova was not installed during setup!

### How to use it on your project

Three files to modify/create: 

First create a simple webpack.config.js file at the root of the project : 

```
config/webpack.config.js
```

Update it with your directories depending to your environment (prod or dev for exemple):

```
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
```

Then modify tsconfig by adding baseUrl and paths according to your directories: 

```
    "baseUrl": "./src",
    "paths": {
      "@app/*": ["app/*"],
      "@providers/*":["providers/*"],
      "@pages/*":["pages/*"],
      "@models/*":["models/*"],
      "@mocks/*":["mocks/*"]

    }
```

Finally, add config to package.json:

```
  "config": {
    "ionic_source_map_type": "source-map",
    "ionic_webpack": "./config/webpack.config.js"
  }
```

## Acknowlegments

Based on : 

[Robinyo's big top app](https://github.com/Robinyo/big-top)

[gshigeto's ionic project using environment variables](https://github.com/gshigeto/ionic-environment-variables)
