import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { Toast, ToastService } from 'primevue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(ToastService)
app.component('Toast', Toast)
app.mount('#app')
