import Vue from 'vue'
import Vuex from 'vuex'
import sliderMenu from './common/sliderMenu.js';
import exmapleApi from './api/exmapleApi.js';

Vue.use(Vuex)
const sliderMenuCtrl = new Vuex.Store(sliderMenu)


export {
    sliderMenuCtrl
}