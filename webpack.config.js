const config = {
  mode: "production",
  entry: {
    index: "./src/js/index.js",
    modalForm: "./src/js/modules/modal-form.js",
    modalSphere: "./src/js/modules/modal-sphere.js",
    mobileNav: "./src/js/modules/mobile-nav.js",
    animations: "./src/js/modules/animations.js",
  },
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
