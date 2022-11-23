import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index.js'

Vue.use(VueRouter)




const routes = [
   {
       path: '/',
       component: () => import('@/views/layout'),
       redirect: '/home',
       children:[
           {
               path: 'home',      //嵌套路由
               component: () => import('@/views/home')
           },
           {
               path:'userinfo',
               component: ()=>import('@/views/user/userInfo')
           },
           {
               path:'fenlei',
               component: ()=>import('@/views/article/fenlei')
           },
           {
               path:'list',
               component:()=>import('@/views/article/list')
           },
           {
               path:'updatepassword',
               component:()=>import('@/views/user/updatePassword')
           },
           {
               path:'updatatou',
               component:()=>import('@/views/user/usr_tou')
           }
       ],
       
       beforeEnter: (to, from, next) => {   //独享路由守卫，获取用户信息，同时阻止未登录用户进入
       
        let  token = localStorage.getItem('token')
       
         if (token) {
       
           // store.dispatch("getUserinfo"); 
           // this.$store.dispatch("getUserinfo")
           store.dispatch("getUserinfo")
           next();
         }
         else {
           next('/login')    //跳转到登陆页
         }
       
       }, 
       
       
   },
   {
     path: '/reg',
     component: () => import('@/views/register')
     //webpack提供import函数来路由懒加载导入组件，
     //路由懒加载，就是页面路由切换带/reg，才去加载对应组件
   },
   {
     path: '/login',
     component: () => import('@/views/login')
   }
]

const router = new VueRouter({
  routes
})

export default router
