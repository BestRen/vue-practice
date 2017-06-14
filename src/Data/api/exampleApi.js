import { callAjax } from './callAjax.js';

const state = {}
const mutations = {
    getData(state, data) {
        state.data = data
    }
}
const actions = {
    callApi: ({ commit }) => {
        callAjax('https://jsonplaceholder.typicode.com/posts/1')
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