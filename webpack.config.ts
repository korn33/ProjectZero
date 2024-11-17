import {buildWebpackConfig} from "./webpack/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./webpack/types/webpackTypes";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths =  {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development'
    const port = env.port || 3000

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    });
};