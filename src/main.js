import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from 'vue-toastification/index.css'
import router from './router';


import { createApp } from 'vue'
import App from './App.vue'

 const app = createApp(App)

 app.use(router);
 app.use(Toast);
 app.mount('#app')
