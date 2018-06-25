<template>
  <div class="portfolio">
    <h1>work</h1>
    <section v-for="section in sections" class="section">
      <h2>{{ section.title }}</h2>
      <div v-for="item in section.items" class="item">
        <h3 v-if="item.title">{{ item.title }}</h3>
        <div class="screen">
          <div class="screen-inner">
            <div class="screen-toolbar">
              <div class="screen-toolbar-actions">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="screen-toolbar-aside"></div>
            </div>
            <img :src="`/static/assets/portfolio/${item.url}`" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'vj-portfolio',
    data () {
      return {
        sections: [
          {
            title: 'plain - project management',
            items: [
              {
                title: 'dashboard',
                url: 'plain_dashboard.png'
              },
              {
                title: 'projects overview',
                url: 'plain_projects.png'
              },
              {
                title: 'project edit form',
                url: 'plain_edit_project.png'
              },
              {
                title: 'tasks overview',
                url: 'plain_tasks.png'
              },
              {
                title: 'task details',
                url: 'plain_edit_task.png'
              }
            ]
          },
          {
            title: 'human connection - social network',
            items: [
              {
                title: 'registration form',
                url: 'humanconnection_register.png'
              },
              {
                title: 'password form',
                url: 'humanconnection_password.png'
              },
              {
                title: 'welcome message',
                url: 'humanconnection_welcome.png'
              },
              {
                title: 'newsfeed',
                url: 'humanconnection_newsfeed.png'
              }
            ]
          },
          {
            title: 'oz - wheel configurator',
            items: [
              {
                title: 'wheel search',
                url: 'ozracing_search.png'
              },
              {
                title: 'wheel configurator',
                url: 'ozracing_configurator.png'
              }
            ]
          },
          {
            title: 'bals - b2b e-commerce solution',
            items: [
              {
                title: 'product list',
                url: 'bals_products.png'
              },
              {
                title: 'mini cart',
                url: 'bals_cart.png'
              },
              {
                title: 'product details',
                url: 'bals_details.png'
              }
            ]
          },
          {
            title: 'raederreifen.ch',
            items: [
              {
                title: 'product list',
                url: 'raederreifen_products.png'
              },
              {
                title: 'vendor form',
                url: 'raederreifen_form.png'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $light: #f6f6f7;
  $dark: #282829;

  .portfolio {
    background-color: $light;
    color: lighten($dark, 20%);
    font-family: 'Arial', sans-serif;
    padding-top: 40px;
    text-align: center;
    min-width: 1440px;
  }

  h1, h2, h3, h4, h5 {
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  h1 {
    font-size: 40px;
    padding: 30px 0;
    color: darken($light, 10%);
  }

  h2 {
    font-size: 16px;
    padding-bottom: 50px;
    font-weight: bold;
  }

  h3 {
    font-size: 12px;
    padding-bottom: 30px;
    font-weight: bold;
  }

  .section {
    padding: 20px;
    padding-bottom: 200px;
  }

  .item {
    padding-bottom: 200px;
  }

  .screen {
    display: flex;
    justify-content: center;
  }

  .screen-inner {
    box-shadow: 0 10px 50px darken($light, 20%);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
  }

  .screen-toolbar {
    width: 100%;
    background-color: darken($light, 6%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid darken($light, 15%);
  }

  .screen-toolbar-actions {
    display: flex;
    padding: 13px;

    span {
      display: block;
      width: 10px;
      height: 10px;
      margin-right: 7px;
      background: #e5715b;
      border-radius: 100%;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    span:nth-child(2) {
      background: #fcc254;
    }

    span:nth-child(3) {
      background: #66b65d;
    }
  }
</style>
