import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     sex:"男",
      hobby:[],
      description:"sss"
  },
  mutations: {
    addsex(state,str){
      state.sex=str
    },
      addHobby(state,obj){
      state.hobby.push(obj)
      },
      addDescription(state,str1){
      state.description=str1;
      },
      del(state){
      state.hobby=[]
      }
  },
  actions: {
  },
  modules: {
  }
})
