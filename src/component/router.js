import Vue from 'vue';
import VueRouter from 'vue-router';

import main from './router/main/main.vue';
import index from './router/main/index.vue';
import fileReader from './router/main/fileReader.vue';
import alert from './router/main/alert.vue';

import head from './router/main/common/head.vue';
import foot from './router/main/common/foot.vue';
import sliderMenu from './router/main/common/sliderMenu.vue';

Vue.component('appHeader', head);
Vue.component('appFooter', foot);
Vue.component('sliderMenu', sliderMenu);


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
            {
                path: 'index',
                component: index,
                name: '首頁'
            }
            , {
                path: 'fileReader',
                component: fileReader,
                name: 'fileReader'
            }
            , {
                path: 'alert',
                component: alert,
                name: 'alert'
            }
        ]
    }
    ]
}
const router = new VueRouter(routerMap)
export default router