import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
        name:'root',
        path: '/',
        components:{
            main:PostList,
        }

    },
    {
        name:'post_content',
        path: '/topic/:id&author=:name', // :id 相当于 router-link 中的 params 的id
        components:{
            main:Article,
            slidebar:SlideBar,
        }

    },
    {
        name:'user_info',
        path: '/userinfo/:name', // :id 相当于 router-link 中的 params 的id
        components:{
            main:UserInfo,
        }

    }
  ]
})
