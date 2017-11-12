<template>
  <div class="work-item">
    <a :href="url" :title="name">
      <img :src="image" v-if="image">
    </a>
  </div>
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
  @import '../styles/variables.scss';

  .work-item {
    text-align: center;

    & > a {
      display: block;
      margin: 0 auto;
      max-width: 500px;
      box-shadow: 0 3px 20px rgba($dark, 0.3);
      margin-bottom: 70px;

      & > img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
