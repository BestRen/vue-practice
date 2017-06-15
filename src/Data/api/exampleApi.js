import { callAjax } from './callAjax.js';

const state = {}
const mutations = {
    getData(state, data) {
        state.data = data
    }
}
const actions = {
    callApi: ({ commit }) => {
        callAjax('http://128.199.162.67:8080/tmp_note/get')
            .then(data => {
                commit('getData', data)
            })
    }
}
const getters = {}
export default {
    state,
    getters,
    actions,
    mutations
}