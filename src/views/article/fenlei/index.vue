<template>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix box">
          <span>文章分类</span>
          <el-button type="primary" size="mini" @click="showDialog"
            >添加分类</el-button
          >
        </div>
        <el-table :data="form" style="width: 100%" :stripe="true" :border="true">
          <el-table-column type="index" label="序号" width="60px">
          </el-table-column>
          <el-table-column prop="cate_name" label="分类名称"> </el-table-column>
          <el-table-column prop="cate_alias" label="分类别名"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="edit(scope.row)"
                >编辑</el-button
              >
              <el-button size="mini" type="danger" @click="open(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    
      <!-- @close表示对话框关闭事件 -->
     <el-dialog
        :title="isEdit ? '编辑文章分类' : '添加文章分类'"
        :visible.sync="dialogFormVisible"
        @close="dialogClose"
      >
        <el-form :model="tableData" :rules="rules" ref="form">
          <el-form-item
            label="分类名称"
            :label-width="formLabelWidth"
            prop="cate_name"
          >
            <el-input v-model="tableData.cate_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="分类别名"
            :label-width="formLabelWidth"
            prop="cate_alias"
          >
            <el-input
              v-model="tableData.cate_alias"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="exit()">取 消</el-button>
          <el-button type="primary" @click="add()">确 定</el-button>
        </div>
      </el-dialog> 
    </div>
</template>

<script>
    import {fenlei} from '@/api/index.js'
    import {delfenlei} from '@/api/index.js'
    import {addfeilei} from '@/api/index.js'
    import {editfenlei} from '@/api/index.js'
    export default{
        data(){
            return {
                
                form:[],
                tableData:{
                    cate_name:'',
                    cate_alias:'',
                    username:localStorage.getItem('token')
                    
                },
                isEdit:false, //用于判断是否是编辑还是添加
                dialogFormVisible: false,
                formLabelWidth:'80px',
                
                rules: {
                  cate_name: [
                    { required: true, message: "请输入分类名称", trigger: "blur" },
                    {
                      pattern: /^\S{1,10}$/,
                      message: "分类名必须是1-10位的非空字符",
                      trigger: "blur",
                    },
                  ],
                  cate_alias: [
                    { required: true, message: "请输入分类别名", trigger: "blur" },
                    {
                      pattern: /^[a-zA-Z0-9]{1,15}$/,
                      message: "分类别名必须是1-15位的字母数字",
                      trigger: "blur",
                    },
                  ],
                }
            }
        },
        mounted() {
          /*  this.axios.get('http://localhost:8848/data').then(res=>{
                console.log(res.data.data)
                this.form = res.data.data
            }) */
            fenlei(localStorage.getItem('token')).then(res=>{
                // console.log(res.data)
                this.form = res.data
            })
        },
       /* watch:{
            form(){
                fenlei().then(res=>{
                    // console.log(res.data)
                    this.form = res.data
                })
            }
        }, */
        methods:{
            open({_id}){
                    this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                    }).then(() => {
                        //调用删除接口
                        delfenlei(_id).then(res=>{
                            
                            
                            if(res.data.code == 200){
                                //更新数据
                                fenlei(localStorage.getItem('token')).then(res=>{
                                    // console.log(res.data)
                                    this.form = res.data
                                    
                                   
                                })
                                this.$message({
                                  type: 'success',
                                  message: '删除成功!'
                                })
                            }
                        })
                        
                        
                      
                    }).catch(() => {
                      this.$message({
                        type: 'info',
                        message: '已取消删除'
                      })          
                    })
                  },
            
            
            
            
            
            
            //删除
            /* delet({_id}){
                
                console.log(_id)
                
                
                delfenlei(_id).then(res=>{
                    // console.log('删除数据成功')
                    if(res.data.code == 200){
                        fenlei().then(res=>{
                            // console.log(res.data)
                            this.form = res.data
                            
                           
                        })
                    }
                })
                
            }, */
            
            //编辑
            edit(objt){
                this.dialogFormVisible = true
                this.isEdit = true
                
                
                
                
                this.tableData = objt
                
               // console.log(this.tableData)
                /* editfenlei(objt).then(res=>{
                        
                }) */
              
                
                
            },
            //点击添加时弹出对话框
            showDialog(){
                this.dialogFormVisible = true;
                this.isEdit = false;
                
                this.tableData = {
                    cate_name:'',
                    cate_alias:'',
                    username:localStorage.getItem('token')
                }
            },
            //取消对话框
            exit(){
                this.dialogFormVisible = false;
            },
            //添加
            add(){
                //判断是编辑还是添加 
                if(this.isEdit){
                    //是编辑，调用编辑接口
                    editfenlei(this.tableData).then(res=>{
                           
                           if(res.data.code == 200){
                               fenlei(localStorage.getItem('token')).then(res=>{
                                   // console.log(res.data)
                                   this.form = res.data
                                   
                                  
                               })
                               this.$message.success('修改成功');
                               this.dialogFormVisible = false
                           } 
                    })
                }else{
                    //是添加，调用添加接口
                    addfeilei(this.tableData).then(res=>{
                        
                        // console.log(res.data.code)
                        /* fenlei().then(res=>{
                            // console.log(res.data)
                            this.form = res.data
                            
                           
                        }) */
                        if(res.data.code == 200){
                            fenlei(localStorage.getItem('token')).then(res=>{
                                // console.log(res.data)
                                this.form = res.data
                                
                               
                            })
                            this.$message.success('添加成功');
                            this.dialogFormVisible = false
                        }else{
                            this.$message.success('添加失败');
                        }
                       
                    })
                }
               
            },
            //对话框关闭时回调函数
            dialogClose() {
              this.$refs.form.resetFields();
            }
            
            
            
        }
    }
</script>

<style>
</style>
