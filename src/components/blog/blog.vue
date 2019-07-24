<template>
    <section v-if="pageCheck" class="blog">
      <div
        class="blog-post"
        v-for="post in blogList"
        v-bind:key="post.id"
      >
        <h4>
          <transition name="fade" mode="out-in">
            <input type="text" v-if="post.isEdit" v-model="post.name">
            <a v-if="!post.isEdit" href="">
              <h4>{{post.name}}</h4>
            </a>
          </transition>
        </h4>
          <transition name="fade" mode="out-in">
            <textarea rows="5" cols="50" v-if="post.isEdit" v-model="post.content"></textarea>
            <p v-if="!post.isEdit">{{post.content}}</p>
          </transition>
        <slot name="author" v-bind:post="post">
          <span v-if="post.author === user.email">
            <div>You are author.</div>
          </span>
          <span v-else>
            <small>Author: <i>{{post.author}}</i></small>
          </span>
        </slot>
        <div>
          <a href="" @click.prevent="toggleComments(post)">Comments</a>
        </div>
        <transition name="slide-fade">
          <div v-if="post.isComments" class="comments">
            <p>Some commentsSome commentsSome commentsSome commentsSome commentsSome comments</p>
          </div>
        </transition>
        <div class="author-control" v-if="post.author === user.email">
          <transition name="fade" mode="out-in">
            <a v-if="!post.isEdit" @click.prevent="editPost(post)" class="far fa-edit" href="" key="editing">&nbsp;edit</a>
            <a v-if="post.isEdit" @click.prevent="savePost(post)" class="far fa-save" href="" key="saving">&nbsp;save</a>
          </transition>
        </div>
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
          },
          toggleComments: function (post) {
            post.isComments = !post.isComments;
          }
        }
    }
</script>

<style scoped>
  .comments {
    background: coral;
    margin: 5px 15px;
    padding-top: 0px;
    border: 1px solid orange;
    border-top: 0px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .blog-post {
    width: 100%;
    margin-bottom: 20px;
    background-color: beige;
    border: 1px solid black;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 10px 5px;
    position: relative;
  }
  .blog-post a {
    text-decoration: none;
    color: black;
    text-shadow: 1px 1px 2px #333333;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  input[type=text] {
    border: none;
    border-bottom: 2px solid black;
    background-color: beige;
  }
  textarea {
    border: black solid 2px;
    background-color: beige;
  }
  :focus { outline: none; }
  .author-control {
    position: absolute;
    top: 5px;
    right: 10px;
  }
</style>
