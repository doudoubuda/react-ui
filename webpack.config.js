const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'gulu-ui', 
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'awesome-typescript-loader' }
    ]
  },
  plugins: [...base.plugins, new HtmlWebpackPlugin({
    title: 'GULU - React',
    template: 'index.html'
  })],
}