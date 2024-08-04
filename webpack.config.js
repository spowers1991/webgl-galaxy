const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/Main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/', // Ensure correct path resolution
  },
  mode: 'development', // Change this to 'production' for production build
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false, 
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    historyApiFallback: true, // Ensure proper routing with HTML5 History API
  },
  performance: {
    maxAssetSize: 512000, // Set the max asset size to 512 KB
    maxEntrypointSize: 512000, // Set the max entrypoint size to 512 KB
  },
};
