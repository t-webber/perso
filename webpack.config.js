module.exports = {
  resolve: {
    extensions: [".tsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
