<template>
    <section v-if="pageCheck" class="blog">
      <div
        class="blog-post"
        v-for="post in blogList"
        v-bind:key="post.id"
      >
        <h4>
          <input type="text" v-if="post.isEdit" v-model="post.name">
          <a v-if="!post.isEdit" href="">
            {{post.name}}
          </a>
        </h4>
        <p>
          <textarea v-if="post.isEdit" v-model="post.content"></textarea>
          <template v-if="!post.isEdit">{{post.content}}</template>
        </p>
        <slot name="author" v-bind:post="post">
          <span v-if="post.author === user.email">
            You are author. You can edit your post.
            <a v-if="!post.isEdit" @click.prevent="editPost(post)" class="far fa-edit" href="">&nbsp;edit</a>
            <a v-if="post.isEdit" @click.prevent="savePost(post)" class="far fa-save" href="">&nbsp;save</a>
          </span>
          <span v-else>
            <small>Author: <i>{{post.author}}</i></small>
          </span>
        </slot>
      </div>
    </section>
</template>

<script>
    import {DATA} from '../../data/datasource'
    export default {
        data() {
          return {
            blogList: DATA.BLOG,
          }
        },
        name: "blog",
        props: ['pageCheck', 'user'],
        methods: {
          editPost: function (post) {
            post.isEdit = true;
          },
          savePost: function (post) {
            post.isEdit = false;
          }
        }
    }
</script>

<style scoped>
  .blog-post {
    width: 100%;
    margin-bottom: 20px;
    background-color: beige;
    border: 1px solid black;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 10px 5px;
  }
  .blog-post a {
    text-decoration: none;
    color: black;
    text-shadow: 1px 1px 2px #333333;
  }
</style>
