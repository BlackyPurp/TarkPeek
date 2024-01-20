// store.js
import Vuex from 'vuex';


export default new Vuex.Store({
  state: {
    itmData: {},
  },
  mutations: {
    setItmData(state, data) {
      state.itmData = data;
    },
  },
  getters:{
    getItmData(state){
      return state.itmData;
    }
  },
  actions: {
    // You can use actions to perform asynchronous operations before committing mutations
  },

});