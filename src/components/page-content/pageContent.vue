<template>
    <div class="content">
      <div class="content-main">
        <div v-for="page in pages" class="content-item">
          <div v-if="nav.id == page.id && nav.isActive == true">
            <h3>{{page.header}}</h3>
            <p>{{page.content}}</p>
          </div>
        </div>
        <slot name="main" v-bind:user="user"></slot>
      </div>
      <div class="sidebar">
        <div class="user-info">
          <slot name="user" v-bind:user="user">
            Welcome, {{user.firstName}}&nbsp;{{user.lastName}}!
          </slot>
        </div>
        <slot name="sidebar">Welcome, anonymous!</slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "page-content",
        props:['nav', 'pages'],
        data() {
          return {
            user: {
              firstName: "Bob",
              lastName: "Kelso",
              email: "robby@mail.cc"
            }
          }
        }
    }
</script>

<style scoped>
  .content {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .content-main, .sidebar {
    float: left;
  }
  .content-main {
    width: 70%;
  }
  .sidebar {
    margin-left: 20px;
    padding: 0;
    width: 25%;
  }
  .user-info {
    background-color: darkseagreen;
    border: 1px solid cornsilk;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
