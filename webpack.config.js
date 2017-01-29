module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query:
      {
        presets:['react']
      }
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
