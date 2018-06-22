<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'content'
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 0 10px;
  }
</style>
