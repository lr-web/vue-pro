import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      host: "0.0.0.0",
      port: 8260,
      open: false,
      proxy: {
        '/design/': {
          target: 'http://192.168.2.12:46682',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/design/, ""),
        },
        '/urban/': {
            target: 'http://192.168.2.133:9500',
            changeOrigin: true,
            // pathRewrite: {
            //     '/urban': '',
            // },
        },
      }
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
