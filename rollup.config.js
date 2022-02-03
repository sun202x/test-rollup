import { nodeResolve } from '@rollup/plugin-node-resolve';
import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        // file: './dist/index.js',
        // file: './dist/calendar-two.js',
        file: 'C:/Users/19025hyeonsik/Desktop/4.0ui/react-datepicker-example/src/calendar-two.js',
        format: 'umd',
        name: 'MyModule',
        globals: {
			react: "React",
			"react-dom": "ReactDOM"
		},
    },
    plugins: [
        externals({
            exclude: ['react', 'react-dom']
        }),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react']
        }),
        commonjs(),
        injectProcessEnv({ 
            NODE_ENV: 'production'
        }),
        nodeResolve()
    ]
};