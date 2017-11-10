<template>
  <div class="navigation">
    <a v-for="item in items"
      :class="{ 'active' : item.active }"
      :href="`#${item.id}`"
      @click.prevent="goTo(item)">
      {{ item.label }}
    </a>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import VueScrollTo from 'vue-scrollto'

  export default {
    name: 'navigation',
    computed: {
      ...mapGetters({
        items: 'getItems'
      })
    },
    methods: {
      goTo (item) {
        let vm = this
        let id = `#${item.id}`
        VueScrollTo.scrollTo(id, 200, {
          onDone () {
            vm.$router.push(id)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  .navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    a {
      position: relative;
      display: block;
      flex: 1;
      text-decoration: none;
      color: $primary;
      padding: 30px;
      background: $white;

      &:before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translateX(-50%) scaleX(0.06);
        top: 0;
        width: 80%;
        height: 1px;
        background: $primary;
        transition: all 0.1s ease-out;
      }

      &:hover, &.active {
        &:before {
          transform: translateX(-50%);
          opacity: 0.2;
        }
      }
    }
  }

</style>
