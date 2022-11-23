<template>
    <el-container class="container">
      <!-- 头部开始 -->
      <el-header>
       <!-- <img src="../../assets/images/logo.png" alt="" /> -->
       
        <h1>
            <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" width="50px" height="100%" style="vertical-align: middle;">
            文章后台管理系统
            
        </h1>
        <i class="welcome"
          >欢迎 <i class="color">{{username}}</i></i
        >
         
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#23262E"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <img :src="img" v-if="img" alt="" class="touxiang" />
          <!-- <img
            src="../../assets/images/logo.png"
            v-else
            alt=""
            class="touxiang"
          /> -->
    
          <el-submenu>
            <template slot="title">个人中心</template>
            <el-menu-item index="/userinfo"
              ><i class="el-icon-user-solid"></i>基本资料</el-menu-item
            >
            <el-menu-item index="/updatatou"
              ><i class="el-icon-camera-solid"></i>更换头像</el-menu-item
            >
            <el-menu-item index="/updatepassword"
              ><i class="el-icon-key"></i>重置密码</el-menu-item
            >
          </el-submenu>
          <el-menu-item @click="logOut"
            ><i class="el-icon-switch-button"></i>退出</el-menu-item
          >
        </el-menu>
      </el-header>
      <!-- 头部结束 -->
    
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏,导航菜单 -->
    
          
          <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                >
                
                <el-menu-item index="/home">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>文章管理</span>
                  </template>
                       <el-menu-item-group>
                        
                        <el-menu-item index="/fenlei">文章分类</el-menu-item>
                        <el-menu-item index="/list">文章管理</el-menu-item>
                      </el-menu-item-group>
                      
                     
                </el-submenu>
               
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>个人中心</span>
                  </template>
                       <el-menu-item-group>
                        
                        <el-menu-item index="/userInfo">基本资料</el-menu-item>
                        <el-menu-item index="/updatatou">更换头像</el-menu-item>
                        <el-menu-item index="/updatepassword">重置密码</el-menu-item>
                      </el-menu-item-group>
                      
                     
                </el-submenu>
              </el-menu>
        </el-aside>
    
        <el-container>
          <el-main>
            <router-view></router-view>
           
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
    export default{
        data(){
            return {
               username:localStorage.getItem('token')
               // img:JSON.parse(localStorage.getItem('userinfo'))[0].img
            }
        },
        methods:{
            logOut(){
                 this.$store.commit('UpdataToken','')
                 this.$store.commit('Updatuserinfo','')
                 localStorage.removeItem('token')
                 localStorage.removeItem('userinfo')
                 
                 this.$router.push('/login')
            }
        }
    }
</script>

<style scoped="scoped">
    .tab {
      margin-top: 50px;
    }
    
    .color {
      color: skyblue;
      background-color: #333;
    }
    .container {
      width: 100vw;
      height: 100vh;
    }
    
    .el-header {
      display: flex; /* 此处的flex布局精髓 */
      justify-content: space-between;
      background: #23262e;
      color: #fff;
      line-height: 60px;
    }
    .el-footer {
      background-color: #23262e;
      color: #fff;
    }
    
    .el-aside {
      background-color: #23262e;
      color: #fff;
      text-align: center;
      line-height: 200px;
    }
    
    .el-main {
      background-color: #e9eef3;
      color: #333;
    }
    
    body > .el-container {
      margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
    
    .touxiang {
      float: left;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-top: 10px;
    }
</style>
