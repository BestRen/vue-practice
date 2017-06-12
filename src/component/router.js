import Vue from 'vue';
import VueRouter from 'vue-router';

import main from './router/main/main.vue';
import index from './router/main/index.vue';
import test1 from './router/main/test1.vue';
import test2 from './router/main/test2.vue';

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
                path: 'test1',
                component: test1,
                name: 'test1'
            }
            , {
                path: 'test2',
                component: test2,
                name: 'test2'
            }
        ]
    }
    ]
}
const router = new VueRouter(routerMap)
export default router