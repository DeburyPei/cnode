<template>
  <div class="autherinfo">
    <div class="authersummary">
        <div class="topbar">作者</div>
    <div class="user">
        <router-link
        :to="{
            name:'user_info',
            params:{
                name:userinfo.loginname
            }
        }"
        >
        <img :src="userinfo.avatar_url" alt="">
    </router-link>
        <span>{{ userinfo.loginname }}</span>
    </div>
        <div class="score">积分：{{ userinfo.score }}</div>
    </div>
    <div class="recent_topics">
        <div class="topbar">作者最近主题</div>
        <ul>
          <li v-for="(item, index) in topcilimitby5" :key="index">
            <router-link
              :to="{
                name: post_content,
                params: {
                  id: item.id,
                  name:item.author.loginname
                },
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
    </div>
    <div class="recent_replies">
        <div class="topbar">作者最近回复</div>
        <ul>
            
            
          <li v-for="(item, index) in replylimitby5" :key="index">
            <router-link
              :to="{
                name: 'post_content',
                params: {
                  id: item.id,
                  name:item.author.loginname

                },
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"SlideBar",
    data(){
        return{
            
            userinfo:{},
        }
    },
    computed:{
        topcilimitby5(){
          if(this.userinfo.recent_topics){
            return this.userinfo.recent_topics.slice(0,5);
          }
        },
        replylimitby5(){
          if(this.userinfo.recent_replies){
            return this.userinfo.recent_replies.slice(0,5);
          }
        }
    },
    
    methods:{
        getUserData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res) => {
          
          this.userinfo = res.data.data;
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
  beforeMount() {
    
    this.getUserData();
  },
    

}
</script>

<style scoped>
  .authersummary, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .autherinfo {
    width: 328px;
    margin-left: 10px;
    margin-top: 0;
    float: right;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummary .topbar {
    margin-top: 0px;
  }
  .authersummary .user{
   
    display: flex;
    align-items: center;
    
  }
  .authersummary .score{
    margin-left: 10px
  }
</style>
