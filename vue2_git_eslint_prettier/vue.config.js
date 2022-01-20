// const path = require("path");
// function resolve(dir) {
//     return path.join(__dirname, dir);
// }
module.exports = {
    // @vue/cli4.x版本vue更新后可以热更新
    chainWebpack: config => {
        config.resolve.symlinks(true);
    },

    // less配置
    pluginOptions: {
        "style-resources-loader": {
            "preProcessor": "less",
            // patterns: [
            //     resolve("src/assets/less/base.less")
            // ]
            patterns: [""]
        }
    }
};