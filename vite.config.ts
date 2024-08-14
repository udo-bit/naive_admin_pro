import {defineConfig, loadEnv} from 'vite'
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {NaiveUiResolver} from "unplugin-vue-components/resolvers";
import path from "path";

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: [
            vue(),
            Unocss(),
            AutoImport({
                imports: [
                    'vue',
                    'vue/macros',
                    'vue-router',
                    'vue-i18n',
                    '@vueuse/core',
                    'pinia',
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar'
                        ]
                    }
                ],
                dts: 'src/types/auto-imports.d.ts',
                dirs: [
                    'src/stores',
                    'src/composables'
                ],
            }),
            Components({
                dirs: ['src/components'],
                resolvers: [NaiveUiResolver()],
                dts: 'src/types/components.d.ts',
            })
        ],
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src'),
                '~@': path.resolve(__dirname, 'src'),
            }
        },
        server: {
            proxy: {
                [env.VITE_APP_BASE_API]: {
                    target: env.VITE_APP_BASE_URL,
                    changeOrigin: true,
                    ws: false,
                    rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
                }
            }
        }
    }
})
