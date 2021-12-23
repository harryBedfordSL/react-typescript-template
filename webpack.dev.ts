import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import { commonConfig } from "./webpack.common";
import { merge } from "webpack-merge";


const devConfig: Configuration = merge(commonConfig, {
  mode: "development",
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
});

export default devConfig;
