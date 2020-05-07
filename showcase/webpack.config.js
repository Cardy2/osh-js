/* webpack.config.lib */

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');

let common = {
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '../source')
        ],
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    node: {
        // Resolve node module use of fs
        fs: 'empty'
    },
    plugins: []
};

module.exports = [{
    ...common,
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'lib'), to: 'lib'},
            {from: path.resolve(__dirname, 'images'), to: 'images'},
        ])
    ]
}];

let directories = ['cesium-fois', 'cesium-location','cesium-location-dist','chart', 'discovery',
    'leaflet-location', 'entity', 'leaflet-location-fois', 'leaflet-location-heading',
    'leaflet-location-path', 'openlayers-location', 'ptz-tasking', 'range-slider','video-gps-sync',
    'video-h264','video-h264-draping', 'video-h264-transferable','video-mjpeg'];

for(let i=0;i < directories.length;i++) {
    let example = 'examples/'+directories[i];
    let config = require(path.resolve(__dirname, './' + example + '/webpack.config.js'));

    //
    config.output.path = path.resolve(__dirname, 'dist');
    delete config.devServer;
    delete config.resolve;
    delete config.devtool;

    let copyJsPlugin =  new CopyWebpackPlugin([
        {from: path.resolve(__dirname, './' + example + '/'+directories[i]+'.js'), to: 'js'},
    ]);

    // copy js to toggle source code
    config.plugins.push(copyJsPlugin);
    //
    module.exports.push({
        ...common,
        ...config
    });
}
