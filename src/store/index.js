import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuth: false,
        profile: ""
    },
    getters: {
        isAuth: state => {
            return state.isAuth;
        },
        profile: state => {
            return state.profile
        }
    },
    mutations: {
        setIsAuth: (state, payload) => {
            state.isAuth = payload;
        },
        setProfile: (state, payload) => {
            state.profile = payload;
        }
    }
});
