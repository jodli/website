<template>
  <div class="scroll-button">
    <a
      class="scroll-button-link"
      :class="{ 'top': !next, 'show': show }"
      :href="url"
      @click="hide"
      v-smooth-scroll>
    </a>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'vj-scroll-button',
    data () {
      return {
        show: false,
        showTimeout: null
      }
    },
    computed: {
      ...mapGetters({
        previous: 'getPrevious',
        next: 'getNext'
      }),
      url () {
        return this.next ? `#${this.next.id}` : `#visualjerk`
      }
    },
    methods: {
      hide () {
        clearTimeout(this.showTimeout)
        const vm = this
        vm.show = false
        this.showTimeout = setTimeout(() => {
          vm.show = true
        }, 2000)
      }
    },
    mounted () {
      this.hide()
      window.addEventListener('scroll', this.hide)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  $arrow-size: 14px;

  .scroll-button {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%) translateZ(0);
    display: flex;
  }

  .scroll-button-link {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $primary;
    border-radius: 100%;
    height: 46px;
    width: 46px;
    background-color: $white;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.5s ease-out;

    &.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    &:before {
      content: '';
      position: relative;
      display: inline-block;
      border-left: $arrow-size/1.7 solid transparent;
      border-right: $arrow-size/1.7 solid transparent;
      border-top: $arrow-size solid $primary;
      transition: all 0.2s ease-out;
    }

    &.top {
      &:before {
        transform: rotate(180deg);
      }
    }
  }
</style>
