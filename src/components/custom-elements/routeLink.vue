<template>
  <a v-if="activeNavItem.isActive === true && activeNavItem.id === 'main'" v-on:click="$emit('go-to-page', 'about')" href="#">Read more about our site you can here.</a>
</template>

<script>
    export default {
        name: "routeLink",
        props: ['activeNavItem']
    }
</script>
