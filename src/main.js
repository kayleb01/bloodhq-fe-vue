import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "tailwindcss/tailwind.css"
import PrimeVue from 'primevue/config';
import './registerServiceWorker'
import router from './router'
import store from './store'
const app = createApp(App);


app.use(PrimeVue).use(store).use(router).mount('#app')