var path = require('path');

module.exports = {

  // Define entry file
  entry: path.resolve(__dirname, 'src')+'/script-1.js',

  // Define output point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },

  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude:/(node_modules)/ ,
        loader:'babel-loader' ,
        query:{
          presets:['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
