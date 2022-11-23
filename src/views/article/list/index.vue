<template>
    
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>文章列表</span>
        </div>
        <!-- 选择表单 -->
        <el-form :inline="true" class="demo-form-inline" ref="artForm">
          <el-form-item label="文章分类">
            <el-select placeholder="请选择分类" v-model="page.cate_name">
              <el-option
                v-for="item in allArticleCate"
                :label="item.cate_name"
                :value="item.cate_name"
                :key="item.cate_name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布状态" label-width="150px">
            <el-select placeholder="请选择状态" v-model="page.state">
              <el-option label="已发布" value="已发布"></el-option>
              <el-option label="草稿" value="草稿"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="filterArticle">筛选</el-button>
            <el-button type="info" @click="resetArticle">重置</el-button>
          </el-form-item>
          <el-button type="primary" style="float: right" @click="showDialog"
            >发表文章</el-button
          >
        </el-form>
    
        <!-- 表格开始 -->
        <el-table
          :data="allArticle"
          style="width: 100%"
          :stripe="true"
          :border="true"
        >
          <el-table-column label="文章标题" prop="title"> </el-table-column>
          <el-table-column prop="cate_name" label="分类"> </el-table-column>
          <el-table-column prop="pub_date" label="发表时间">
            <!-- <template slot-scope="scope"> -->
             <!-- {{ $formatDate(scope.row.pub_date) }} -->
            <!-- </template> -->
          </el-table-column>
          <el-table-column label="状态" prop="state"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="dialogArticle(scope.row)"
                >查看</el-button
              >
              <el-button size="mini" type="danger" @click="open(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
    
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pagenum"
          :page-sizes="10"
          :page-size="page.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="Toto"
        >
        </el-pagination> 
      </el-card>
    
      <el-dialog title="文章预览" :visible.sync="dialogVisible1" width="80%">
        <div class="title">{{this.art_dailit.title}}</div>
        <div class="describe">
          <span>作者:{{this.art_dailit.username}} </span>
          <span>发布时间: {{this.art_dailit.pub_date}}</span>
          <span>所属分类: {{this.art_dailit.cate_name}}</span>
          <span>状态:{{this.art_dailit.state}} </span>
        </div>
    
        <el-divider></el-divider>
    
       <!-- <img
          v-if="artContent.cover_img"
          :src="baseURL + artContent.cover_img"
          alt=""
        /> -->
        <div v-html="this.art_dailit.content"></div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false"
            >确 定</el-button
          >
        </span>
      </el-dialog> 
    
      <!-- 全局对话框，用于写文章 -->
       <el-dialog
        fullscreen
        center
        title="发表文章"
        :visible.sync="dialogFormVisible"
        :before-close="handleClose"
        @close="dialogClose"
      >
        <el-form :model="tableData" :rules="rules" ref="form">
          <el-form-item
            label="文章标题"
            :label-width="formLabelWidth"
            prop="title"
          >
            <el-input
              autocomplete="off"
              placeholder="请输入标题"
              v-model="tableData.title"
            ></el-input>
          </el-form-item>
    
          <el-form-item
            label="文章分类"
            :label-width="formLabelWidth"
            prop="cate_id"
          >
            <el-select
              placeholder="请选择分类"
              style="width: 100%"
              v-model="tableData.cate_name"
            >
              <el-option
                v-for="item in allArticleCate"
                :label="item.cate_name"
                :value="item.cate_name"
                :key="item.cate_name"
              ></el-option>
            </el-select>
          </el-form-item>
    
          
          <el-form-item label="文章内容" prop="content" style="display: flex; margin-left: 10px;">
            <quill-editor
              v-model="tableData.content"
              @blur=""
            ></quill-editor>
          </el-form-item>
    
          
          <!-- <el-form-item label="文章封面" prop="" style="display: flex">
            
            <input
              type="file"
              style="display: none"
              accept="image/*"
              ref="Img"
              @change=""
            />
            <el-button
              style="display: block"
              type="primary"
              icon="el-icon-search"
              size="small"
              @click=""
              >选择图片</el-button
            >
          </el-form-item> -->
        </el-form>
        <div slot="footer" style="display: flex">
        
          <el-button
            type="primary"
            @click="send()"
            style="margin-left: 80px"
            >发布</el-button
          >
          <el-button type="info" @click="send2()">存为草稿</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    import {fenlei} from '@/api/index.js'
    import {findList} from '@/api/index.js'
    import {addArttcle} from '@/api/index.js'
    import {delArttcle} from '@/api/index.js'
    import {findArttcleDaitl} from '@/api/index.js'
    import {findList_Bykeys} from '@/api/index.js'
    
    
    export default{
        data(){
            return {
                allArticleCate:[], //分类标签
                allArticle:[], //文章列表
                formLabelWidth:"80px",
                page: {
                  pagenum: 1, //当前页
                  pagesize: 10, //每页显示条目个数,number型
                  cate_name: "",
                  state: "",
                  username: localStorage.getItem('token')
                },               
                dialogFormVisible:false, //发布文章的对话框
                dialogVisible1:false,    //查看文章详情的模态框
                tableData: {    //提交表单对象
                  title: "",
                  cate_id: "",
                  cate_name:"",
                  content: "",
                  username: localStorage.getItem('token'),
                  state: ""
                },
                art_dailit:{} , //文章详情
                Toto:null
            }
        },
        mounted() {
            //查询分类，并添加到下拉列表里
            fenlei(localStorage.getItem('token')).then(res=>{
                // console.log(res.data)
                this.allArticleCate = res.data
            })
            
            //查询文章列表
            findList(this.page).then(res=>{
                console.log(res.data)
                this.Toto = res.data.length
                this.allArticle = res.data
            })
            
            
        },
        methods:{
            
            handleCurrentChange(nowPage) {
            //当前页码
              console.log(nowPage)
              this.page.pagenum = nowPage;
              findList(this.page).then(res=>{
                  console.log(res.data)
                  this.Toto = res.data.length
                  this.allArticle = res.data
              })
              
            },
            
            handleSizeChange(pageSize) {
               // 一页显示多少条数据
              console.log(pageSize)
              this.page.pagenum = 1;
              this.page.pagesize = pageSize; 
             findList(this.page).then(res=>{
                 console.log(res.data)
                 this.Toto = res.data.length
                 this.allArticle = res.data
             })
            
            },
            
            
            
            
            
            showDialog(){
                this.dialogFormVisible = true
            },
            dialogClose() {
              this.$refs.form.resetFields();
            },
            handleClose(done) {
              this.$confirm("此操作将导致文章信息丢失, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
              })
                .then(() => {
                  done();
                })
                .catch();
            },
            //点击发布，提交表单数据
            send(){
                this.tableData.state = '已发布'
                addArttcle(this.tableData).then(res=>{
                    // console.log(res.data)
                    //如果服务器返回的code是200,则进行更新列表
                    if(res.data.code == 200){
                        findList(this.page).then(res=>{
                            console.log(res.data)
                            this.Toto = res.data.length
                            this.allArticle = res.data
                        })
                        this.tableData.cate_name = ''
                        this.dialogFormVisible = false
                    }
                })
            },
            //点击存为草稿,保存为草稿
            send2(){
                this.tableData.state = '草稿'
                addArttcle(this.tableData).then(res=>{
                    // console.log(res.data)
                    //如果服务器返回的code是200,则进行更新列表
                    if(res.data.code == 200){
                        findList(this.page).then(res=>{
                            console.log(res.data)
                            this.Toto = res.data.length
                            this.allArticle = res.data
                        })
                        this.tableData.cate_name = ''
                        this.dialogFormVisible = false
                    }
                })
            },
            //删除文章
            open({_id}){
                    this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                    }).then(() => {
                        //调用删除接口
                        delArttcle({_id}).then(res=>{
                            console.log(res.data)
                            if(res.data.code == 200){
                                findList(this.page).then(res=>{
                                    console.log(res.data)
                                    this.Toto = res.data.length
                                    this.allArticle = res.data
                                })
                                //提示删除成功
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
            /* deleteArtFn({_id}){
                console.log(_id)
                //调用删除文章的接口，通过_Id删除
                delArttcle({_id}).then(res=>{
                    console.log(res.data)
                    if(res.data.code == 200){
                        findList().then(res=>{
                            console.log(res.data)
                            this.allArticle = res.data
                        })
                        //提示删除成功
                        this.$message({
                          type: 'success',
                          message: '删除成功!'
                        })
                        
                    }
                })
            }, */
            dialogArticle({_id}){   //通过_id查找某文章详情
                 this.dialogVisible1 = true
                 findArttcleDaitl({_id}).then(res=>{
                     // console.log(...res.data)
                     this.art_dailit = res.data[0]
                     
                 })
            },
            // 筛选 （条件查询）
            filterArticle(){
               
                /* let {cate_name} = this.page
                let {state}  = this.page
                if(this.page.cate_name == '' && this.page.state != ''){  //如果只选了状态，没有选分类
                    findList_Bykeys({state}).then(res=>{
                        console.log(res.data)
                        this.allArticle = res.data
                    })
                }else if(this.page.cate_name != '' && this.page.state == ''){ //如果只选了分类，没有选状态
                    findList_Bykeys({cate_name}).then(res=>{
                        console.log(res.data)
                        this.allArticle = res.data
                    })
                }else if(this.page.cate_name != '' && this.page.state != ''){ // 两者都选了
                    findList_Bykeys(this.page).then(res=>{
                        console.log(res.data)
                        this.allArticle = res.data
                    })
                }else{
                    findList_Bykeys({}).then(res=>{   //分类和状态都没有选时，查询的是所有文章
                        console.log(res.data)
                        this.allArticle = res.data
                    })
                }
                */
               this.page.pagenum = 1
               findList(this.page).then(res=>{
                   console.log(res.data)
                   console.log(res.data.length)
                   this.Toto = res.data.length
                   this.allArticle = res.data
               })
                
                
            },
            
            
            //重置查询，即重新查询所有的文章列表
            resetArticle(){
                this.page.cate_name = ''
                this.page.state = ''
                this.page.pagenum = 1
                findList(this.page).then(res=>{
                    console.log(res.data)
                    this.Toto = res.data.length
                    this.allArticle = res.data
                })
            }
        }
    }
</script>

<style scoped="scoped">
    .el-table {
      margin-top: 50px;
    }
    
    /* 注意此处的用法 */
    ::v-deep .ql-editor {
      min-height: 500px;
    }
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
    
    .describe span:nth-child(n + 2) {
      margin-left: 15px;
    }
</style>
