<script>
    export default {
        props: {
          value: String
        },
        name: "anchorHeading",
        render(createElement) {
          return createElement('h4', [
            createElement('a', this.value)
          ]);
        }
    }
</script>

<style scoped>

</style>
