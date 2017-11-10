<template>
  <a class="work-item" :href="url" :title="name">
    <img :src="image" v-if="image">
  </a>
</template>

<script>
  export default {
    name: 'work-item',
    props: {
      name: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .work-item {
    display: block;
    max-width: 500px;

    & > img {
      width: 100%;
      height: auto;
    }
  }
</style>
