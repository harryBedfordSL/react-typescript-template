import { commonConfig } from "./webpack.common";
import { merge } from "webpack-merge";
import { Configuration } from "webpack";

const prodConfig: Configuration = merge(commonConfig, {
  mode: 'production'
});

export default prodConfig;