<template>
  <div class="logo">
    <span v-for="(letter, index) in nameLetters"
          class="logo-letters"
          :id="`logo-letter-${letter}`"
          :key="index">{{ letter }}</span>
  </div>
</template>

<script>
  import anime from 'animejs'

  export default {
    name: 'vj-logo',
    data () {
      return {
        name: 'visualjerk',
        animationTime: 3000
      }
    },
    computed: {
      nameLetters () {
        return this.name.split('')
      }
    },
    methods: {
      assignAnimations () {
        this.nameLetters.forEach(letter => {
          this.animateLetter(`#logo-letter-${letter}`)
        })
        setTimeout(() => {
          this.assignAnimations()
        }, this.animationTime * 2)
      },
      animateLetter (el) {
        let x = Math.random() * 30 * (Math.random() > 0.5 ? -1 : 1)
        let y = Math.random() * 30 * (Math.random() > 0.5 ? -1 : 1)
        let zFactor = Math.random()
        let z = zFactor * 20 * (Math.random() > 0.5 ? -1 : 1)
        let blur = zFactor * 10
        console.log(y)
        anime({
          targets: el,
          translateX: x,
          translateY: y,
          translateZ: z,
          direction: 'alternate',
          loop: true,
          duration: this.animationTime
        })
        anime({
          targets: el,
          filter: `blur(${blur}px)`,
          duration: 0
        })
      }
    },
    mounted () {
      setTimeout(() => {
        // this.assignAnimations()
      }, 500)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  .logo {
    font-family: $font-headings;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    font-size: 4rem;
    perspective: 1000px;
    user-select: none;

    &:hover {
    }
  }

  .logo-letters {
    display: inline-block;
    transition:
      transform 0.5s ease-out,
      filter 0.5s ease-out,
      opacity 0.1s ease-in;

    .logo:hover & {
      transform: none !important;
      filter: blur(0px) !important;
    }
  }
</style>
