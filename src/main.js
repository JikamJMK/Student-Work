import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import sign from './components/sign.vue'
import myHome from './components/myHome.vue'
import { cardProps } from 'vant'

const routes =[
    {path:'/myHome',component:myHome},
    {path:'/sign',component:sign}
]

const router =createRouter({
    history:createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')