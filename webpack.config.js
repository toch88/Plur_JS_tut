var path = require('path');

module.exports={
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    loaders:[{
      test: [/\.js$/,  /\.html$/],
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
