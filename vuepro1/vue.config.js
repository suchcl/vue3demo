module.exports = {
    devServer: {
        headers: {
            // 微前端，需要子应用设置跨域支持
            "Access-Control-Allow-Origin": "*"
        }
    },
    // 取消eslint校验
    lintOnSave: false
};