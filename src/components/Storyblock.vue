<template>
  <div class="storyblock" :id="id">
    <slot></slot>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import $ from 'jquery'

  export default {
    name: 'storyblock',
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    methods: {
      ...mapMutations({
        setActive: 'setActive'
      }),
      checkPosition () {
        let windowTop = $(window).scrollTop()
        let el = $(this.$el)
        let elTop = el[0].offsetTop
        let elBottom = elTop + el[0].offsetHeight

        if (windowTop >= elTop && windowTop < elBottom) {
          this.setActive(this.id)
        }
      }
    },
    mounted () {
      let vm = this
      vm.checkPosition()
      $(window).scroll(() => {
        vm.checkPosition()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .storyblock {
    position: relative;
    min-height: 100vh
  }
</style>
