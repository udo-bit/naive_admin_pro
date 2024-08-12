import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import "@unocss/reset/tailwind.css"
import "uno.css";
import router from "./routes"
import "./routes/route-guard"
import {createPinia} from "pinia";
import "~/assets/styles/index.css"

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

console.log(import.meta.env.VITE_APP_BASE)
