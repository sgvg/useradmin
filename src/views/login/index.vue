<template>
    <div>
      <div class="reg-container">
        <div class="reg-form">
          <div class="reg-title"></div>
    
          <el-form ref="form" :model="form" :rules="rule">
            <el-form-item prop="username">
              <el-input
                placeholder="请输入用户名"
                v-model="form.username"
              ></el-input>
            </el-form-item>
    
            <el-form-item prop="password">
              <el-input
                placeholder="请输入密码"
                v-model="form.password"
                type="password"
              ></el-input>
            </el-form-item>
    
            <el-form-item>
              <el-button class="btn" type="primary" @click="onSubmit"
                >登录</el-button
              >
            </el-form-item>
            <el-link type="info" @click="$router.push('/reg')">去注册</el-link>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
    import {login} from '@/api/index.js'
    export default{
        data(){
            return {
                form: {
                    username: "",
                    password: "",
                  },
                  rule: {
                    //校验规则
                    username: [
                      { required: true, message: "请输入用户名", trigger: "blur" },
                      {
                        pattern: /^[a-zA-Z0-9]{1,10}$/,
                        message: "1-10位大小写字母和数字",
                        trigger: "blur",
                      },
                    ],
                    password: [
                      { required: true, message: "请输入密码", trigger: "blur" },
                      {
                        pattern: /^\S{6,15}$/,
                        message: "6-15位的非空字符",
                        trigger: "blur",
                      },
                    ]
                  }
                }
            },
            
            methods:{
                onSubmit(){
                    
                    
                    this.$refs.form.validate((valid) => {
                      if (valid) {
                        
                        login(this.form).then(res=>{
                              // console.log(res.data)
                             
                             if(res.data.code == 200){
                                 
                                 this.$store.commit('UpdataToken',res.data.token)
                                 this.$message.success(res.data.msg);
                                 this.$router.push("/home");
                             }
                        })
                       
                      } else {
                        return false; //阻止默认提交行为
                      }
                    });
                    
                    
                    
                    
                    
                   
                    
                    
                    
                    
                }
            }
            
        
    }
</script>

<style lang="scss" scoped="scoped">
    .reg-container {
      display: flex;
      width: 100vw;
      height: 100vh;
      /* background: url("../../assets/images/login_bg.jpg") center no-repeat;
      background-size: cover; */
      background-color: #e493d0;
      background-image: radial-gradient(closest-side,rgba(235,105,78,1),rgba(235,105,78,0)),
                        radial-gradient(closest-side,rgba(141,226,226,1),rgba(141,226,226,0)),
                        radial-gradient(closest-side,rgba(223,214,101,1),rgba(223,214,101,0)),
                        radial-gradient(closest-side,rgba(62,234,230,1),rgba(62,234,230,0)),
                        radial-gradient(closest-side,rgba(85,220,227,1),rgba(85,220,227,0));
      background-size: 
                      130vmax 130vmax,
                      80vmax 80vmax,
                      90vmax 90vmax,
                      110vmax 110vmax,
                      90vmax 90vmax;
      background-position: 
                         -80vmax -80vmax,
                         60vmax -30vmax,
                         10vmax 10vmax,
                         -30vmax -10vmax,
                         50vmax 50vmax;
      background-repeat: no-repeat;
      
      justify-content: center;
      align-items: center;
    
      .reg-form {
        width: 300px;
        height: 310px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        overflow: hidden;
        padding: 0 30px;
    
        .reg-title {
          height: 80px;
          background: url("../../assets/images/login_title.png") center no-repeat;
        }
    
        .btn {
          width: 100%;
          //transform: translate(20%, 0);
        }
      }
    }
    
</style>
