<template>
  <div id="app">
    <Header></Header>
    <PostList></PostList>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import PostList from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    Header,PostList
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
