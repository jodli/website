import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        label: 'Beginning',
        id: 'beginning',
        active: false
      },
      {
        label: 'Work',
        id: 'work',
        active: false
      },
      {
        label: 'About',
        id: 'about',
        active: false
      }
    ]
  },
  getters: {
    getActive (state) {
      return state.items.find(item => {
        return item.active
      })
    },
    getItems (state) {
      return state.items
    }
  },
  mutations: {
    setActive (state, id) {
      let index = state.items.findIndex(item => {
        return item.id === id
      })
      if (index > -1) {
        state.items.map(item => {
          item.active = false
          return item
        })
        state.items[index].active = true
      }
    }
  }
})
