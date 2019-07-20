<template>
  <li @click="openPage(item)" :class="{active: item.isActive}"><a href="#">{{item.text}}</a></li>
</template>

<script>
    export default {
      name: 'nav-item',
      props: ['item', 'navList'],
      methods: {
        openPage: function (item) {
          this.navList.forEach(function (item) {
            item.isActive = false;
          });
          item.isActive=true;
        }
      }
    }
</script>
