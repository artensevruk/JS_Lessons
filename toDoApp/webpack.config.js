import CopyPlugin from "copy-webpack-plugin";
export default {
  plugins: [
    new  CopyPlugin({
patterns : [
    { from: "index.html", to: "." },
    { from: "index.css", to: "." },
]
    })
  ],
  mode: "development",
  devServer: { static: "./dist", hot: true , devMiddleware: { writeToDisk: true } },
};
