const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  } ,
  devServer: {
    open : true //Abre una pesta;a en el navegador
  },
  module: {
    rules: [
      //Aqui colocamos los loaders
      {
        // test:  que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
}