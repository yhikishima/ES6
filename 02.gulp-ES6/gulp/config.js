//---------------------
//  gulp config
//---------------------
var path = require('path');
var dist = './dist';
var src = './src';
var relativeSrcPath = path.relative('.', src);

module.exports = {
  // 出力先の指定
  dist: dist,

  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dist: dist + '/js',
    uglify: false
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'app.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },

  copy: {
    src: [
      src + '/index.html'
    ],
    dist: dist
  },

  watch: {
    js: relativeSrcPath + '/js/**',
    html: relativeSrcPath + '/index.html'
  }
};