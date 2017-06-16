import { callAjax, postAjax } from './callAjax.js';

const state = {
    data: null
}
const mutations = {
    getData(state, data) {
        state.data = data.data.reverse();
    }

}
const actions = {
    callApi: ({ commit }) => {
        callAjax('http://128.199.162.67:8080/tmp_note/get')
            .then(data => {
                commit('getData', data)
            })
    },
    postApi: ({ commit }, data) => {
        postAjax('http://128.199.162.67:8080/tmp_note/post', data)
            .then(data => {
                console.log('data: ', data);
                if (data === 'success') {
                    callAjax('http://128.199.162.67:8080/tmp_note/get')
                        .then(data => {
                            commit('getData', data)
                        });
                } else {
                    alert('Server Error');
                }
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