const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const distFolder = path.resolve(__dirname, 'dist')

module.exports = {
   context: path.resolve(__dirname, 'src'),
   entry: './js/index.ts',
   output: {
      filename: '[contenthash].bundle.js',
      path: distFolder,
      clean: true
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/index.html')
      }),
      new CopyPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'public/favicon.png'),
               to: distFolder
            }
         ]
      }),
      new MiniCssExtractPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader",
            {
               loader: "postcss-loader",
               options: {
                  postcssOptions: {
                     plugins: [require("postcss-preset-env")],
                  }
               },
            }, "sass-loader"]
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
         {
            test: /.(jpg|svg|mp3)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.html$/i,
            loader: "html-loader",
         },
         {
            test: /\.[tj]sx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         }
      ],
   },
   performance: {
      hints: false
   }
}