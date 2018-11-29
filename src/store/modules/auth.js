/*-----------------------------------------------------------------
- Menu module for Vuex
-----------------------------------------------------------------*/
import axios from 'axios'

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    userName: localStorage.getItem('user_name') || '',
};
const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    userName: state => state.userName,
};
const mutations = {

    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, payload) {
        state.status = 'success'
        state.token = payload.token
        state.user = payload.user
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
    },

};
const actions = {

    login({commit}, data) {


        return new Promise((resolve, reject) => {

            commit('auth_request');

			axios.get('https://api.github.com/user', {
				headers: {
					Authorization: 'token ' + data.token
				}
			})

                .then(resp => {
					const token = data.token
                    let user = resp.data
					localStorage.setItem('token', token)
                    localStorage.setItem('user_name', user.name)
                    axios.defaults.headers.common['Authorization'] = 'token ' + token
                    commit('auth_success', {token: token, user: user})
                    resolve(resp)
                })
                .catch(err => {
                    console.log(err);
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },

    logout({commit}){
        return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    }

};

export default {

    namespaced: true,

    state,
    getters,
    mutations,
    actions,
}

/*-----------------------------------------------------------------
- Helpers
-----------------------------------------------------------------*/
