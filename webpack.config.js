const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies  } = require("./package.json");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hotels_list_mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./HotelList": "./src/components/HotelList"
      },
      shared: {
        react: { singleton: true, requiredVersion: dependencies.react, eager: true },
        "react-dom": { singleton: true, requiredVersion: dependencies['react-dom'], eager: true }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    port: 3001,
    open: true,
    historyApiFallback: true
  }
};
