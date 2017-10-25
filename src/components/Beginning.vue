<template>
  <div class="beginning">
    <div class="wrapper">
      <vj-logo></vj-logo>
      <h1>Web-Developer and Vue-Lover</h1>
    </div>
  </div>
</template>

<script>
  import vjLogo from './Logo.vue'

  export default {
    name: 'beginning',
    components: {
      vjLogo
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translateY(-50%) translateX(-50%);
    max-width: 600px;
    width: 100%;
    text-align: center;
  }

  h1 {
    margin-top: 80px;
    transition: all 0.1s ease-out;
    opacity: 0.1;
    font-size: 22px;
  }
</style>
