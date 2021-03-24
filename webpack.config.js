const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports ={
  watch: true,
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      devSever:{
        port:3000
      },
      module: {
        rules: [{
            include: path.resolve(__dirname, './src')
          },
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        ]
    },
      plugins:[new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/app.html',
        filename: 'index.html'
      })],
      mode: 'none',
}