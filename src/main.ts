import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(vuetify)

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
