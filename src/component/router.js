import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './router/main/main.vue'
// import index from './router/main/index.vue'
// import test from './router/main/test.vue'

// import appHeader from './common/base/appHeader.vue'
// import appFooter from './common/base/appFooter.vue'
// import leftMenu from './common/base/leftMenu.vue'

// Vue.component('appHeader', appHeader)
// Vue.component('appFooter', appFooter)
// Vue.component('leftMenu', leftMenu)

Vue.use(VueRouter)
const routerMap = {
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            component: main,
            children: [
                //     {
                //     path: 'index',
                //     component: index,
                //     name: '首頁'
                // }, {
                //     path: 'test',
                //     component: test,
                //     name: '測試頁'
                // }, {
                //     path: '*',
                //     redirect: 'index'
                // }
            ]
        }
    ]
}
const router = new VueRouter(routerMap)
export default router