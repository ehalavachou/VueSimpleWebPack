<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <mega-nav :nav-list="navList"></mega-nav>
    <div class="main">
      <page-content :nav="activeNavItem" :pages="pages">
        <template #main="props">
          <attenders-list :page-check="pageCheck('main')"></attenders-list>
          <blog :page-check="pageCheck('blog')" :user="props.user">
            <template v-slot:author="{post}" >
              <span v-if="moderatorList.includes(post.author) && post.author !== props.user.email">
                Author: <span class="moder">{{post.author}}</span>
              </span>
            </template>
          </blog>
        </template>
        <template v-if="pageCheck('main')" #user="props">
          You have been logged as {{props.user.email}}.
        </template>
        <template #sidebar>
          <route-link :active-nav-item="activeNavItem" @go-to-page="goToPage"></route-link>
        </template>
      </page-content>
    </div>
  </div>
</template>

<script>
  import css from './app.css'
  import pageContent from './page-content/pageContent.vue'
  import megaNav from './navigate/megaNav.vue'
  import routeLink from './custom-elements/routeLink.vue'
  import {DATA} from '../data/datasource'
  import attendersList from './attenders/attendersList.vue'
  import blog from './blog/blog.vue'


    export default {
      name: 'app',
      data (){
        return {
          navList: DATA.NAVIGATION,
          pages: DATA.PAGES,
          moderatorList: DATA.MODERATORS
        }
      },
      computed: {
        activeNavItem: {
          get:function () {
            for(let navItem in this.navList) {
              if(this.navList.hasOwnProperty(navItem)){
                if(this.navList[navItem].isActive) {
                  return this.navList[navItem];
                }
              }
            }
          },
          set: function (newPage) {
            this.navList.forEach(function (item) {
              item.isActive = false;
            });
            for(let navItem in this.navList) {
              if(this.navList.hasOwnProperty(navItem)){
                if(this.navList[navItem].id === newPage) {
                  this.navList[navItem].isActive = true;
                }
              }
            }
          }
        }
      },
      methods: {
        goToPage: function (pageName) {
          this.activeNavItem = pageName;
        },
        pageCheck: function (pageName) {
          return this.activeNavItem.id === pageName;
        }
      },
      components: {
        megaNav,
        pageContent,
        routeLink,
        attendersList,
        blog
      }
    }
</script>

