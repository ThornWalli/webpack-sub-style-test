import { build } from 'vite';
import webpack from 'webpack';
import viteConfig from './vite.config.js';
import webpackConfig from './webpack.config.js';

await new Promise(resolve => webpack(webpackConfig, resolve));
console.log('webpack build done');

await build(viteConfig)
console.log('vite build done');