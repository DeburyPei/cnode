<template>
  <div class="userinfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="" />
    </div>
    <div v-else class="userInfomation">
      <section>
        <img :src="userinfo.avatar_url" alt="" />
        <span>&nbsp;&nbsp;{{ userinfo.loginname }}</span>
        <p>{{ userinfo.score }}积分</p>
      </section>
      <div class="replies">
        <p>回复的主题</p>
        <ul>
          <li v-for="(item, index) in userinfo.recent_replies" :key="index">
            <router-link
              :to="{
                name: 'post_content',
                params: {
                  id: item.id,
                },
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p>创建的主题</p>
        <ul>
          <li v-for="(item, index) in userinfo.recent_topics" :key="index">
            <router-link
              :to="{
                name: post_content,
                params: {
                  id: item.id,
                },
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: true,
      userinfo: {},
    };
  },
  methods: {
    getUserData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res) => {
          this.isLoading = false;
          this.userinfo = res.data.data;
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.isLoading = true;
    this.getUserData();
  },
};
</script>

<style scoped>
.userInfomation {
  background: white;
  width: 75%;
  margin: 10px auto;
}
.userInfomation section {
  padding: 12px;
}
.userInfomation img {
  width: 30px;
}
.userInfomation li {
  list-style: none;
}
.userInfomation .replies,
.userInfomation .topics {
  font-size: 0.72rem;
  border-top: 10px #dddddd solid;
}
.userInfomation > div > p {
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 0.75rem;
  margin: 0;
}
.userInfomation > div > ul > li {
  padding: 4px 0 4px 12px;
  white-space: nowrap;
  font-size: 0.72rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
}
.userInfomation > div > ul > li > a {
  color: #094e99;
  text-decoration: none;
}
</style>