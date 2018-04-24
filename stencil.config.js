const sass = require("@stencil/sass");
const postcss = require("@stencil/postcss");
const autoprefixer = require("autoprefixer");

exports.config = {
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer({
          browsers: ["> 0.25%"]
        })
      ]
    })
  ]
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
