const path = require("path");
const { env } = require("process");

// This plugin compile all sass, scss files to one css so that to use in django views
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// The all paths to use this config
const paths = {
    app: "./spendlytime/static/spendlytime/app/index.js",
    dist: path.resolve("./spendlytime/static/spendlytime", "dist"),
    // This path is required to contentBase config parameter in development environment
    contentBase: "./spendlytime/static/spendlytime/app",
};

const IS_PRODUCTION = env.NODE_ENV === "production";
const WEBPACK_MODE = IS_PRODUCTION ? "production" : "development";

const appConfig = {
    devtool: IS_PRODUCTION ? "source-map" : "cheap-module-eval-source-map",
    mode: WEBPACK_MODE,
    entry: {
        app: paths.app,
    },
    output: {
        path: paths.dist,
        filename: "[name].js",
        sourceMapFilename: "[name].js.map",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true
                        }
                    },
                    'css-loader',
                    'sass-loader']
            }
        ],
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx", ".sass"],
    },
};

// The insert devServer object to appConfig if run this script in the development mode using webpack-dev-server etc.
if (WEBPACK_MODE === "development") {
    appConfig.devServer = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        contentBase: paths.contentBase,
        port: 8000,
        overlay: true,
        historyApiFallback: true,
        watchOptions: {
            ignored: ["node_modules"],
        },
        publicPath: "/_assets/",
    };


}
// Load plguins to webpack config
appConfig.plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    })
]

module.exports = [appConfig];
