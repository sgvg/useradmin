<template>
   <el-card class="box-card">
     <div slot="header" class="clearfix">
       <span>基本资料</span>
     </div>
   
     <!-- 表单开始 -->
     <el-form
       :model="userInfo"
       status-icon
       :rules="rules"
       ref="ruleForm"
       label-width="100px"
       class="demo-ruleForm"
     >
       <el-form-item label="登录名称">
         <el-input
           autocomplete="off"
           v-model="userInfo.username"
           disabled
         ></el-input>
       </el-form-item>
       <el-form-item label="用户昵称" prop="nickname">
         <el-input autocomplete="off" v-model="userInfo.nickname"></el-input>
       </el-form-item>
       <el-form-item label="用户邮箱" prop="email">
         <el-input v-model="userInfo.email"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="onSubmit">提交</el-button>
         <el-button @click="resetForm('ruleForm')">重置</el-button>
       </el-form-item>
     </el-form>
   </el-card>
</template>

<script>
    import {updateUserinfo} from '@/api/index.js'
    export default{
        data(){
            return {
                userInfo: {
                  id: 1,
                  nickname: "",
                  email: JSON.parse(localStorage.getItem('userinfo'))[0].email,
                  username: JSON.parse(localStorage.getItem('userinfo'))[0].username
                }
                
               
                
            }
            
            
        },
        mounted(){
            
        },
        methods:{
            onSubmit(){
                updateUserinfo(this.userInfo).then(res=>{
                    // console.log(res.data.msg)
                    this.$message({
                      type: 'success',
                      message: res.data.msg
                    })
                })
            }
        }
        
    }
</script>

<style scoped="scoped">
    .el-input {
      width: 500px;
    }
</style>
