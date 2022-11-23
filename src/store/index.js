import Vue from 'vue'
import Vuex from 'vuex'
import {getUserinfo} from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:'',
      userinfo:{}
  },
  getters: {
      
  },
  mutations: {
      Updatuserinfo(state, value){
          state.userinfo = value
      },
      UpdataToken(state,value){
          state.token = value
          localStorage.setItem('token', value) 
          
      }
      
      
      
  },
  actions: {
      getUserinfo(store){
          
          getUserinfo(store.state.token).then(res=>{
              
              // console.log(res.data)
               store.commit('Updatuserinfo',res.data)
               localStorage.setItem('userinfo',JSON.stringify(res.data)) 
          })
         
      }
  },
  modules: {
      
  }
})
