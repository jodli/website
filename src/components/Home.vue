<template>
  <div class="home">
    <storyblock>
      <beginning></beginning>
    </storyblock>
    <storyblock>
      <start-with-see></start-with-see>
    </storyblock>
  </div>
</template>

<script>
import Storyblock from './Storyblock'
import Beginning from './Beginning'
import StartWithSee from './StartWithSee'

export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    Storyblock,
    Beginning,
    StartWithSee
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
