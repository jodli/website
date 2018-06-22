<template>
  <div class="storyblock" :id="id" :style="styles">
    <div class="storyblock-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'vj-storyblock',
    props: {
      id: {
        type: String,
        default: ''
      },
      align: {
        type: String,
        default: 'center'
      },
      padding: {
        type: Number,
        default: 30
      }
    },
    computed: {
      styles () {
        let styles = []

        styles.push(`align-items: ${this.align};`)
        styles.push(`padding: ${this.padding}px 0;`)

        return styles.join(' ')
      }
    },
    methods: {
      ...mapMutations({
        setActive: 'setActive'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .storyblock {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }

  .storyblock-content {
    flex: 1;
  }
</style>
