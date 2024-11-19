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
        test: /\.tsx?$/, // Match both .ts and .tsx files
        use: [
          {
            loader: 'babel-loader', // Use Babel for JSX
            options: {
              presets: ['@babel/preset-react'], // Add React preset for JSX
            },
          },
          'ts-loader', // Then use ts-loader for TypeScript
        ],
        exclude: /node_modules/, // Exclude node_modules
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext][query]',
        },
      },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/, // Use @svgr/webpack for SVG imports in JS/TS
            use: ['@svgr/webpack'],
          },
          {
            type: 'asset/resource', // Use asset/resource for other cases (e.g., <img src="..."/>)
            generator: {
              filename: 'assets/[name][ext][query]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve .tsx, .ts, and .js extensions
    alias: {
      '@': path.resolve(__dirname, 'src'),
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
