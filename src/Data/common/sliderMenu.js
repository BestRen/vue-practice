
const state = {
    status: false
}
const mutations = {
    show(state) {
        console.log('state: ', state);
        state.status = true
    },
    hide(state) {
        console.log('state: ', state);
        state.status = false
    }
}
const actions = {
    Show: ({ commit }) => commit('show'),
    Hide: ({ commit }) => commit('hide')
}
const getters = {}
export default {
    state,
    getters,
    actions,
    mutations
}