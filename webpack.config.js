const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports ={
    mode: isDevelopment? 'development' : 'production',
    devtool: isDevelopment? 'eval-source-map' : 'source-map',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    devServer:{
        static: './public',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_module/,
                use: ['style-loader', 'css-loader', 'sass-loader']

            }
        ],
    }
};