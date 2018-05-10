const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    home : path.resolve(__dirname, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  } ,
  module: {
    rules: [
      //Aqui colocamos los loaders
      {
        // test:  que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        // test:  que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ 
          // ['style-loader','css-loader']
          fallback: 'style-loader',
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    //Aqui van los plugins
    new ExtractTextPlugin('css/[name].css')
  ]
}