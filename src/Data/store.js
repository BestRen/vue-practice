import Vue from 'vue'
import Vuex from 'vuex'
import sliderMenu from './common/sliderMenu.js';
import exampleApi from './api/exampleApi.js';


Vue.use(Vuex)
const sliderMenuCtrl = new Vuex.Store(sliderMenu);
const exampleApiCtrl = new Vuex.Store(exampleApi);



export {
    sliderMenuCtrl,
    exampleApiCtrl
}