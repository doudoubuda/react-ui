const path = require('path')

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
  }
}