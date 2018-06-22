import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 'visualjerk',
        active: false
      },
      {
        id: 'feature',
        active: false
      },
      {
        id: 'about',
        active: false
      },
      {
        id: 'work',
        active: false
      },
      {
        id: 'contact',
        active: false
      },
      {
        id: 'forest',
        active: false
      }
    ]
  },
  getters: {
    getActive (state) {
      return state.items.find(item => item.active)
    },
    getPrevious (state) {
      const index = state.items.findIndex(item => item.active)
      if (index < 1) {
        return false
      }
      return state.items[index - 1]
    },
    getNext (state) {
      const index = state.items.findIndex(item => item.active)
      if (index > state.items.length - 2) {
        return false
      }
      return state.items[index + 1]
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
