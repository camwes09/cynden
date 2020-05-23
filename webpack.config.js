const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        // Fixes file paths in url() of sass children
                        loader: 'resolve-url-loader',
                        options: {sourceMap: true},
                    },
                    'sass-loader',
                    // {
                    //     // Injects variables into sass files without using import
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         resources: path.resolve(__dirname, 'src/css/variables.scss'),
                    //     },
                    // },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8081,
        hot: true,
        historyApiFallback: true,
        noInfo: true,
    },
};
