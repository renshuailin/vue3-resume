import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入图标
import myIcon from '@/components/common/my-icon.vue'
//全局引入标题组件
import tip from '@/components/common/tip.vue'

const vue = createApp(App)
vue.component('my-icon', myIcon)
vue.component('tip', tip)
vue.use(router).use(store).mount('#app')


