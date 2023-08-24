import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import { webpackVueCESubStyle } from '@unplugin-vue-ce/sub-style';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
    cache: false,
    devtool: false,
    name: 'client',

    mode: 'production',
    stats: 'normal',
    target: 'web',
    entry: {
        example: './src/entry.js'
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: './',
        clean: true,
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 1024000
    },
    optimization: {
        runtimeChunk: false
    },
    plugins: [
        new VueLoaderPlugin(),
        webpackVueCESubStyle(),
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),

    ],

    module: {
        rules: [
            {
                test: /\.p(ost)?css$/i,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.vue$/i,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            customElement: true,
                            reactivityTransform: false,
                            transformAssetUrls: {
                                video: 'src',
                                source: 'src',
                                object: 'src',
                                embed: 'src'
                            },
                            compilerOptions: {},
                            propsDestructure: false,
                            defineModel: false
                        }
                    }
                ]
            }
        ]
    }
}


