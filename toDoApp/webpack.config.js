import CopyPlugin from "copy-webpack-plugin";
export default {
  plugins: [
    new  CopyPlugin({
patterns : [
    { from: "index.html", to: "dist" },
    { from: "index.css", to: "dist" },
]
    })
  ],
  mode: "development",
  devServer: { static: "./dist", hot: true },
};
