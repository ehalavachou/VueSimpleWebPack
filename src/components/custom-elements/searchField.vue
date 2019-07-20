<template>
  <label>
    {{ label }}
    <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners">
  </label>
</template>

<script>
    export default {
        name: "search-field",
        inheritAttrs: false,
        props: ['label', 'value'],
        computed: {
          inputListeners: function () {
            let self = this;
            return Object.assign({},
            this.$listeners,
            {
              input: function (event) {
                self.$emit('input', event.target.value)
              }
            });
          }
        }
    }
</script>

<style scoped>

</style>
