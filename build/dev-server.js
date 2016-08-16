import config from "./webpack.config.babel";
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackDashboard from 'webpack-dashboard';
import webpackDashboardPlugin from 'webpack-dashboard/plugin';

let dashboard = new webpackDashboard()

let compiler = webpack(config);

compiler.apply(new webpackDashboardPlugin(dashboard.setData))

let server = new webpackDevServer(compiler, {
	hot: true,
	quiet: true,
	noInfo: false
});

server.listen(5000);