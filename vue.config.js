const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');

// vue.config.js

module.exports = {
    configureWebpack: {
        output: {
            publicPath: '/'
        },
        plugins: [
            new MangleCssClassPlugin({
                classNameRegExp: '[cl]-[a-z][a-zA-Z0-9_]*',
                log: true,
            }),
        ]
    },

}