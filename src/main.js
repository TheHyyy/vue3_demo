import {
  createApp
} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Element3 from 'element3'


const app = createApp(App)

app.use(store)
  .use(router)
  .use(Element3)
  .mount('#app')