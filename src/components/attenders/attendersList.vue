<template>
  <div v-if="pageCheck">
    <h3>List of attenders</h3>
    <div>
      <search-field :label="'Start typing name'" v-model="searchName" placeholder="Start typing name"></search-field>
      <enhanced-checkbox v-model="selectionLocked">
        Lock selection
      </enhanced-checkbox>
    </div>
    <div class="attender-item-wrapper" v-for="attender in attendersFiltered">
      <ul class="clickable attender-item" @click="selectAttender(attender, $event)" @click.ctrl="alertAttender(attender)"
          :class="{'selected': attender.selected, 'locked': selectionLocked}">
        <li  v-if="name !== 'selected'" v-for="(val, name) in attender">
          {{name}} - {{val}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import enhancedCheckbox from '../custom-elements/enhancedCheckbox.vue'
  import searchField from '../custom-elements/searchField.vue'
  import {DATA} from '../../data/datasource'

    export default {
        name: "attendersList",
        props: ['pageCheck'],
        data (){
          return {
            attenders: DATA.ATTENDERS,
            searchName: "",
            selectionLocked: false
          }
        },
        computed: {
          attendersFiltered: function () {
            let search = this.searchName;
            return this.attenders.filter(function (attender) {
              if (search !== undefined && search !== "") {
                return attender.name.includes(search);
              } else {
                return attender;
              }
            })
          }
        },
        methods: {
          selectAttender: function (attender) {
            if(!this.selectionLocked) {
              if(attender.selected) {
                attender.selected = false;
              } else {
                attender.selected = true;
              }
            }
          },
          alertAttender: function (attender) {
            if(!this.selectionLocked) {
              let output = "\n";
              for(let key in attender) {
                if(attender.hasOwnProperty(key)) {
                  let prop = attender[key];
                  output += key + " " + prop + "\n";
                }
              }
              alert("You clicked on attender: " + output);
            }
          }
        },
        components: {
          enhancedCheckbox,
          searchField
        }
    }
</script>

<style scoped>
  .attender-item {
    border: gray 1px solid;
    list-style-type: none;
    padding: 5px 15px;

  }

  .attender-item-wrapper {
    width: 250px;
    float: left;
    margin-left: 15px;
  }

  .selected {
    border-left: darkblue 3px solid;
    padding-left: 13px;
  }

  .locked {
    opacity: 0.5;
    cursor: default;
  }

  .selected.locked {
    border-left: dimgrey 3px solid;
    padding-left: 13px;
  }
</style>
