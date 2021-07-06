const path = require('path')


module.exports = {
  entry: {
    animations: './index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: 'babel-loader'
      },
    ]
  },
  resolve: { 
    extensions: ['.js', '.ts'] 
  },
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    library: {
      name: 'animations',
      type: 'umd'
    },
    globalObject: 'this'
  },
}