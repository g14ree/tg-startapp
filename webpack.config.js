const path = require('path');
const nodeExternals = require('webpack-node-externals');

const{ NODE_ENV = 'production', } = process.env

module.exports = {
  entry: './src/app.ts',
  mode: NODE_ENV,
  output: {
    filename: 'bot.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: [ nodeExternals() ],
  target: 'node'
};