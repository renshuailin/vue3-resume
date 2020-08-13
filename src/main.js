import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入图标
import myIcon from '@/components/common/my-icon.vue'

const vue = createApp(App)
vue.component('my-icon', myIcon)
vue.use(router).use(store).mount('#app')


