// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // 파일 진입점
  entry: './js/main.js',

  // 빌드 파일 반환 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), // 절대 경로 필수
    // filename: 'main.js',
    clean: true // 빌드 시 이전 내용 제거
  },

  // css 스타일 적용
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  // devServer: {
  //   host: 'localhost'
  // }
}