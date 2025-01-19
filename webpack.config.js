const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", // Use contenthash for better caching
    clean: true, // Clean the output directory before emit
  },

  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: isProduction, // Minify HTML only in production
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Use contenthash for CSS
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[hash][ext]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@animate-css": path.resolve(__dirname, "node_modules/animate.css"), // Укажите путь к вашей библиотеке
    },
  },

  mode: isProduction ? "production" : "development", // Simplified mode assignment
};

module.exports = config;
