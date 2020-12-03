import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'

const app = createApp(App)

app.mount('#app')

app.config.productionTip = false;

app.use(Antd)
