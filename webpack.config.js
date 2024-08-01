const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8080, // you can change the port
    open: true,
    hot: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: {
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
    },
    proxy: [
      {
        context: ['/events/**'],
        target: 'http://localhost:3000',
        secure: false,
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};