<template>
    <div class="header">
        <router-link :to="{name:'root'}">
            <img src="../assets/cnodejs_light.svg" alt="">
        </router-link>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登陆</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
    
    .header{
        background-color: #444544;
        height:50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
   
     img{
        
margin-left: 20px;
        max-width: 120px; 
        width: 120px;
        
        
    }
     ul{
        list-style: none;
        float:right;
        font-size: 13px;
    }
     li{
        display:inline-block;
        margin-right: 15px;
    }
    a{
        text-decoration: none;
        color: #ccc;

    }
    
</style>