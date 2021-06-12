var HtmlWebpackPlugin = require('html-webpack-plugin');
var RemarkHTML = require ("remark-html");

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
            
                {
                  test: /\.md$/,
                  use: [
                    {
                      loader: "html-loader",
                    },
                    {
                      loader: "remark-loader",
                      options: {
                        remarkOptions: {
                          plugins: [RemarkHTML],
                        },
                      },
                    },
                  ],
                },
              
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}