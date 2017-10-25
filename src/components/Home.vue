<template>
  <div class="home">
    <vj-storyblock>
      <vj-beginning></vj-beginning>
    </vj-storyblock>
  </div>
</template>

<script>
import vjStoryblock from './Storyblock'
import vjBeginning from './Beginning'

export default {
  name: 'vj-home',
  data () {
    return {}
  },
  components: {
    vjStoryblock,
    vjBeginning
  }
}
</script>

<style lang="scss" scoped>
.home {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
