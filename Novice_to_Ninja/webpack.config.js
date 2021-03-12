// module.exports {} represents options and configurations for how webpack is going to run
// only available when running javascript on a computer using Node.js
// __dirname gets the complete absolute path up until this directory eg the root directory of the project where the web file is sitting

const path = require("path");

module.exports = {
  entry: "./Modern_Feature_Support/srcModernCode/index.js",
  output: {
    path: path.resolve(__dirname, "Modern_Feature_Support/distEndCode/assets"),
    filename: "bundle.js",
  },
};
