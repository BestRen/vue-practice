import { callAjax } from './callAjax.js';

const state = {}
const mutations = {
    response(state, data) {
        state.data = data
    }
}
const actions = {
    callApi: ({ commit }) => {
        AjaxGet('https://jsonplaceholder.typicode.com/posts/1')
            .then(data => {
                commit('response.', data)
            });
    }
}
const getters = {}
export default {
    state,
    getters,
    actions,
    mutations
}