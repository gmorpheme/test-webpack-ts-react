var path = require('path');

var config = {
  entry: path.resolve(__dirname, 'app/main.tsx'),
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    },
    {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  ts: {
    compilerOptions: { "jsx": "react" }
  }
};

module.exports  = config;
