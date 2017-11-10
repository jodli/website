<template>
  <div class="work">
    <h1>Work</h1>
    <vj-work-item v-for="item in items"
      :name="item.name"
      :image="item.image"
      :url="item.url">
    </vj-work-item>
  </div>
</template>

<script>
  import vjWorkItem from './WorkItem'

  export default {
    name: 'work',
    components: {
      vjWorkItem
    },
    data: () => {
      return {
        items: [
          {
            name: 'FTC Cashmere',
            image: '/static/images/work_ftc.png',
            url: '#'
          },
          {
            name: 'OZ Racing',
            image: '/static/images/work_oz.png',
            url: '#'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
