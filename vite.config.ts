import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite"
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({}),
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
    }
})
