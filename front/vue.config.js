module.exports = {
  // devServerの設定
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
