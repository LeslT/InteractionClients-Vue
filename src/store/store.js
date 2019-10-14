import Vue from "vue";
import Vuex from "vuex";

const fb = require('../../firebaseConfig')

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {},
        actualUser: {
            names: "",
            lastnames: "",
            email: "",
            password: "",
            conPassword: "",
            valido: new Date().toISOString().substr(0, 10),
            dependencies: [],
            activo: "false"
        }
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        },
        setActualUser(state, val) {
            state.actualUser = val
        }

    },
    actions: {
        fetchUserProfile({ commit, state }) {
            fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
                commit("setActualUser", res.data())

                console.log(res.data())
            }).catch(err => {
                console.log(err)
            })
        },

    }
});