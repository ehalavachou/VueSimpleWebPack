<script>
    import anchorHeading from './anchorHeading.vue'

    export default {
        name: "editable-element",
        props: {
          element: String,
          editElement: String,
          value: String,
          isEdit: Boolean
        },
        data() {
          return {
            elementAttr: {
              'input': {
                type: 'text'
              },
              'textarea': {
                rows: 5,
                cols: 50
              }
            }
          }
        },
      render(createElement) {
        let self = this;
        if(this.isEdit) {
          return createElement(this.editElement, {
            domProps: {
              value: self.value
            },
            on: {
              input: function (event) {
                self.$emit('input', event.target.value);
              }
            },
            attrs: Object.assign({}, this.elementAttr[this.editElement])
          })
        }else {
          switch (this.element) {
            case 'anchorHeading':
              return createElement(anchorHeading, {
                props: {
                  value: self.value
                }
              });
            default:
              return createElement(this.element, self.value);
          }
        }
      },
      components: {
          anchorHeading
      }
    }
</script>

<style scoped>
  textarea {
    border: black solid 2px;
    background-color: beige;
  }
  input[type=text] {
    border: none;
    border-bottom: 2px solid black;
    background-color: beige;
  }
</style>
