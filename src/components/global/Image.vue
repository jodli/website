<template>
  <div class="image">
    <div class="image-inner">
      <img
        :style="styles"
        :src="`/static/assets/images/${name}.svg`" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vj-image',
    props: {
      name: {
        type: String,
        required: true
      },
      offset: {
        type: Number,
        default: 0
      },
      marginTop: {
        type: Number,
        default: 0
      },
      marginBottom: {
        type: Number,
        default: 0
      }
    },
    computed: {
      styles () {
        let styles = []

        styles.push(`margin: ${this.marginTop}px 0 ${this.marginBottom}px;`)

        if (this.offset) {
          styles.push(`transform: translateX(${this.offset}%);`)
        }

        return styles.join(' ')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    max-width: 100vw;
    overflow: hidden;
  }

  .image-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    img {
      max-width: 120vw;
    }
  }
</style>
