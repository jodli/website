<template>
  <div class="home">
    <vj-storyblock id="visualjerk">
      <vj-image
        name="spaceglobe"
        :margin-bottom="30" />
      <h1>visualjerk</h1>
      <p class="size-4">
        UI/UX Designer<br />
        Frontend Developer
      </p>
    </vj-storyblock>
    <vj-storyblock id="feature">
      <h2 class="size-1">welcome to the feature</h2>
      <vj-image
        name="feature"
        :margin-top="10" />
    </vj-storyblock>
    <vj-storyblock id="about">
      <vj-image
        name="robot"
        :offset="24"
        :margin-bottom="30" />
      <h2>about</h2>
      <p>
        Hello world. I like making things.<br />
        I like making things easy.
      </p>
      <p>
        I care about clean code and<br />
        a clean user experience.
      </p>
      <p>
        I like geeking out over things that<br />
        make web development nicer.
      </p>
    </vj-storyblock>
    <vj-storyblock id="work">
      <vj-image
        name="spacestation"
        :offset="-22"
        :margin-bottom="30" />
      <h2>work</h2>
      <p>
        I work at Paessler, where we help<br />
        network administrators sleeping well.
      </p>
      <p>
        I help building Human Connection &mdash;<br />
        a social network, that is actually social.
      </p>
      <p>
        I also do freelance work as a <br />
        UI/UX Designer and Frontend Developer.
      </p>
    </vj-storyblock>
    <vj-storyblock id="contact">
      <h2 class="size-3">contact</h2>
      <p class="size-2">
        <a href="mailto:hello@visualjerk.de">hello@visualjerk.de</a>
      </p>
      <p class="size-5">
        Jörg Bayreuther<vj-separator />
        Zum Bären 1<vj-separator />
        90562 Heroldsberg<vj-separator />
        Tel. 0175 164 43 43
      </p>
      <vj-image
        name="spacerocket"
        :margin-top="30"
        :margin-bottom="130" />
      <p>
        <a href="https://github.com/visualjerk" target="_blank">
          <vj-image name="github" />
        </a>
      </p>
    </vj-storyblock>
    <vj-storyblock
      id="forest"
      align="flex-end"
      :padding="0">
      <vj-image name="forest"/>
    </vj-storyblock>
  </div>
</template>

<script>
import vjStoryblock from './Storyblock'

export default {
  name: 'vj-home',
  data () {
    return {}
  },
  components: {
    vjStoryblock
  }
}
</script>

<style lang="scss" scoped>
</style>
