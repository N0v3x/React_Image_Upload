const merge = require("webpack-merge");
const common = require("./webpack.common");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  mode: "production",
  devtool: "source-map"
});
