<template>
  <div id="app">
    <Header></Header>
    <!-- <PostList></PostList> -->
    <div class="main">
      <router-view name="slidebar"></router-view>

      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostList from "./components/PostList.vue";

export default {
  name: "App",
  components: {
    Header,
    PostList,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #e1e1e1;
}
.main {
  padding-top: 10px;
  width: 80%;
  margin: 0 auto;
  
}
</style>
