import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store/main";
// import util from './utils'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'

const app = createApp(App).use(store).use(router).use(VueAxios,axios)

app.mount('#app')
