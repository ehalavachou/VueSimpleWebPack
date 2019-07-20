<template>
  <div class="nav">
  <ul>
    <nav-item
       v-for="item in navList"
       :item="item"
       :navList="navList"
       :key="item.id"
    ></nav-item>
    </ul>
  </div>
</template>

<script>
  import css from './navStyles.css'
  import navItem from './entry/navItem.vue'

    export default {
      name: 'mega-nav',
      props: ['nav-list'],
      components: {
        navItem
      }
    }
</script>
