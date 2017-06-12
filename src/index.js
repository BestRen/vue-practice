import Vue from 'vue';
import router from './component/router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-tw';
import App from './component/router/base/app.vue';
Vue.use(ElementUI, { locale })
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})