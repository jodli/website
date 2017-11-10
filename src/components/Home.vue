<template>
  <div class="home">
    <vj-storyblock id="beginning">
      <vj-beginning></vj-beginning>
    </vj-storyblock>
    <vj-storyblock id="work">
      <vj-work></vj-work>
    </vj-storyblock>
    <vj-storyblock id="about">
      <h1>About</h1>
    </vj-storyblock>
  </div>
</template>

<script>
import vjStoryblock from './Storyblock'
import vjBeginning from './Beginning'
import vjWork from './Work'

export default {
  name: 'vj-home',
  data () {
    return {}
  },
  components: {
    vjStoryblock,
    vjBeginning,
    vjWork
  }
}
</script>

<style lang="scss" scoped>
.home {

}
</style>
