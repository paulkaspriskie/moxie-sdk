const path = require('path');
const { dirFilter, setDefaultApp } = require('../../lib/util/util-functions.js');
const cliInput = require('node:process').argv.slice(2)[0];
const entryPath = path.resolve(process.cwd(), `apps/${setDefaultApp(cliInput)}/src/js/index.js`);
const appsArray = dirFilter(path.resolve(process.cwd(), 'apps'));

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.js');
      webpackConfig.entry = entryPath;

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);


const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};


if(appsArray.includes(setDefaultApp(cliInput))) {

  runServer();

} else {

  console.log(`No app named ${cliInput}, please input a valid app name.`);

}
