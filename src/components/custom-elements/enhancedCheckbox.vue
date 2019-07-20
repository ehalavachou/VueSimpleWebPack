<template>
  <label><slot></slot>
  <input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)">
  </label>
</template>

<script>
    export default {
        name: "enhancedCheckbox",
        model: {
          prop: 'checked',
          event: 'change'
        },
        props: {
          checked: Boolean
        }
    }
</script>

<style scoped>

</style>
