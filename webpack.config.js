const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clientConfig = {
  // 진입점
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
      ,
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'file-loader',
      }
    ],
  },
  // 성능 경고 메시지 안 나오게 함
  //  performance: {
  //   hints: false,
  // },
  devServer: {
    historyApiFallback: true,
    port: 8085,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};

module.exports = clientConfig;