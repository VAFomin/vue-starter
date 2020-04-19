import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuth: false,
        email: ""
    },
    getters: {
        isAuth: state => {
            return state.isAuth;
        },
        email: state => {
            return state.email
        }
    },
    mutations: {
        setIsAuth: (state, payload) => {
            state.isAuth = payload;
        },
        setEmail: (state, payload) => {
            state.email = payload;
        }
    }
})
