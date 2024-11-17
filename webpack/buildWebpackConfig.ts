import {BuildOptions} from "./types/webpackTypes";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) {
    return {
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true
        },
        mode: options.mode,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
        resolve: buildResolvers(),
    }
}