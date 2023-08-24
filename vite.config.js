
import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { viteVueCESubStyle } from '@unplugin-vue-ce/sub-style';


export default defineConfig({
    "build": {
        "copyPublicDir": false,
        "rollupOptions": {
            "input": "src/entry.js"
        },
        "emptyOutDir": false,
        "sourcemap": false,
        "manifest": true,
        "outDir": "./dist/vite",
        "target": "esnext"
    },
    "plugins": [
        vuePlugin({
          reactivityTransform: false,
          isProduction: true,
          customElement: true
        }),
        viteVueCESubStyle()
    ],
    "vue": {
        "reactivityTransform": false,
        "isProduction": true,
        "template": {
            "compilerOptions": {}
        },
        "script": {
            "propsDestructure": false,
            "defineModel": false
        }
    },
    "mode": "production",
    "publicDir": "./public",
    "clearScreen": true,
    "configFile": false,
    "base": "/",
    "experimental": {},
    "appType": "custom",
    "entry": "./src/entry.js"
}
)