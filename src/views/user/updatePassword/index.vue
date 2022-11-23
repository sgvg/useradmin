<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>重置密码</span>
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
        <el-form-item label="旧密码" prop="old_pwd">
          <el-input
            autocomplete="off"
            type="password"
            v-model="userInfo.old_pwd"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="new_pwd">
          <el-input
            autocomplete="off"
            type="password"
            v-model="userInfo.new_pwd"
          ></el-input>
        </el-form-item>
        <el-form-item label="重复新密码" prop="re_pwd">
          <el-input type="password" v-model="userInfo.re_pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改密码</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
    import {updatePassword} from '@/api/index.js'
    export default {
        data(){
            const samePWD = (rule, value, callback) => {
              if (value === this.userInfo.new_pwd) {
                callback();
              } else {
                callback("两次密码输入不一致");
              }
            };
            
            const notSamePwd = (rule, value, callback) => {
              if (value === this.userInfo.old_pwd) callback("新密码不能与旧密码相同");
              else callback();
            }
            
            
            
            return {
                userInfo: {
                  username:localStorage.getItem('token'),
                  old_pwd: "",
                  new_pwd: "",
                  re_pwd: ""
                },
                rules: {
                  old_pwd: [
                    { required: true, message: "请输入旧密码", trigger: "blur" },
                    {
                      pattern: /^\S{6,15}$/,
                      message: "6-15位的非空字符",
                      trigger: "blur",
                    },
                  ],
                  new_pwd: [
                    { required: true, message: "请输入新密码", trigger: "blur" },
                    {
                      pattern: /^\S{6,15}$/,
                      message: "6-15位的非空字符",
                      trigger: "blur",
                    },
                    { validator: notSamePwd, trigger: "blur" },
                  ],
                
                  re_pwd: [
                    { required: true, message: "请再次输入新密码", trigger: "blur" },
                    { validator: samePWD, trigger: "blur" },
                  ],
                }
               
            }
        },
        methods:{
            //提交表单
            onSubmit(){
                //调用用修改密码接口
                updatePassword(this.userInfo).then(res=>{
                     console.log(res)
                    if(res.data.code == 200){
                        this.$message.success('修改成功，请重新登录！！')
                        this.$store.commit('UpdataToken','')
                        this.$store.commit('Updatuserinfo','')
                        localStorage.removeItem('token')
                        localStorage.removeItem('userinfo')
                        
                        this.$router.push('/login')
                    }else{
                        this.$message.error('修改失败！！')
                    }
                })
                
            },
            //重置，清空表单
            resetForm(formName) {
              this.$refs[formName].resetFields();
            }
        }
        
    }
</script>

<style scoped>
.el-input {
  width: 500px;
}
</style>