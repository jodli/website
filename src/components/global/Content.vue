<template>
  <div class="content" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vj-content',
    props: {
      maxWidth: {
        type: Number,
        default: 0
      }
    },
    computed: {
      styles () {
        let styles = []

        if (this.maxWidth) {
          styles.push(`max-width: ${this.maxWidth}px;`)
        }

        return styles.join(' ')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 0 10px;
    margin: 0 auto;
  }
</style>
