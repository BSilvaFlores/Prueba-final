import { createStore } from 'vuex'
import getCursos from "@/services/cursosServices"

export default createStore({
  state: {
    avance: [],
    perfil: [],
    cursos: [],

    css: [],
    fundamentosWeb: [],
    javascript: []

  },
  getters: {
  },
  mutations: {

    SET_AVANCE(state, curso) {
      state.avance = curso
    },
    SET_PERFIL(state, dato) {
      state.perfil = dato
    },
    SET_CURSOS(state, curso) {
      state.cursos = curso
    },
    SET_CSS(state, curso) {
      state.css = curso
    },
    SET_FUNDAMENTOS_WEB(state, curso) {
      state.fundamentosWeb = curso
    },
    SET_JAVASCRIPT(state, curso) {
      state.javascript = curso
    },
  },
  actions: {
    async setAvance({ commit }) {
      try {
        let data = await getCursos('me')

        for (let i = 0; data.included.length > i; i++) {
          if (data.included[i].type == 'course') {
            commit("SET_AVANCE", data.included)
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    async setPerfil({ commit }) {
      try {
        let data = await getCursos('me')
        commit("SET_PERFIL", data)

      } catch (error) {
        console.log(error)
      }
    },

    async setCss({ commit }) {
      try {
        let data = await getCursos('css-avanzado')
        commit("SET_CSS", data.data.attributes.email);
      } catch (error) {
        console.log(error);
      }
    },
    async setCursos({ commit }) {
      try {
        let data = await getCursos('courses')
        commit("SET_CURSOS", data.data)
    
      } catch (error) {
        console.log(error)
      }
    },

  },
  modules: {
  }
})
