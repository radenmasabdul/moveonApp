import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/style.css'
import App from './App.vue'
import router from './routes';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'

const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            },
            darkModeSelector: 'system',
        }
    }
});
app.use(pinia)
app.use(router)
app.mount('#app')
