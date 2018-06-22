<template>
  <span class="separator"></span>
</template>

<script>
  export default {
    name: 'vj-separator'
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  $arrow-size: 7px;

  .separator {
    display: inline-block;
    margin: 0 10px;
    border-left: $arrow-size/1.7 solid transparent;
    border-right: $arrow-size/1.7 solid transparent;
    border-bottom: $arrow-size solid $primary;
  }
</style>
