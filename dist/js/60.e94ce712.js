"use strict";(self["webpackChunkvue_vieew"]=self["webpackChunkvue_vieew"]||[]).push([[60],{4060:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var l=function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix box",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("文章分类")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.showDialog}},[t._v("添加分类")])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.form,stripe:!0,border:!0}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"60px"}}),e("el-table-column",{attrs:{prop:"cate_name",label:"分类名称"}}),e("el-table-column",{attrs:{prop:"cate_alias",label:"分类别名"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.edit(a.row)}}},[t._v("编辑")]),e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.open(a.row)}}},[t._v("删除")])]}}])})],1)],1),e("el-dialog",{attrs:{title:t.isEdit?"编辑文章分类":"添加文章分类",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.dialogClose}},[e("el-form",{ref:"form",attrs:{model:t.tableData,rules:t.rules}},[e("el-form-item",{attrs:{label:"分类名称","label-width":t.formLabelWidth,prop:"cate_name"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.tableData.cate_name,callback:function(e){t.$set(t.tableData,"cate_name",e)},expression:"tableData.cate_name"}})],1),e("el-form-item",{attrs:{label:"分类别名","label-width":t.formLabelWidth,prop:"cate_alias"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.tableData.cate_alias,callback:function(e){t.$set(t.tableData,"cate_alias",e)},expression:"tableData.cate_alias"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.exit()}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.add()}}},[t._v("确 定")])],1)],1)],1)},i=[],s=a(2567),o={data(){return{form:[],tableData:{cate_name:"",cate_alias:"",username:localStorage.getItem("token")},isEdit:!1,dialogFormVisible:!1,formLabelWidth:"80px",rules:{cate_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{pattern:/^\S{1,10}$/,message:"分类名必须是1-10位的非空字符",trigger:"blur"}],cate_alias:[{required:!0,message:"请输入分类别名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,15}$/,message:"分类别名必须是1-15位的字母数字",trigger:"blur"}]}}},mounted(){(0,s.RO)(localStorage.getItem("token")).then((t=>{this.form=t.data}))},methods:{open({_id:t}){this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,s.qb)(t).then((t=>{200==t.data.code&&((0,s.RO)(localStorage.getItem("token")).then((t=>{this.form=t.data})),this.$message({type:"success",message:"删除成功!"}))}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},edit(t){this.dialogFormVisible=!0,this.isEdit=!0,this.tableData=t},showDialog(){this.dialogFormVisible=!0,this.isEdit=!1,this.tableData={cate_name:"",cate_alias:"",username:localStorage.getItem("token")}},exit(){this.dialogFormVisible=!1},add(){this.isEdit?(0,s.Oy)(this.tableData).then((t=>{200==t.data.code&&((0,s.RO)(localStorage.getItem("token")).then((t=>{this.form=t.data})),this.$message.success("修改成功"),this.dialogFormVisible=!1)})):(0,s.Y6)(this.tableData).then((t=>{200==t.data.code?((0,s.RO)(localStorage.getItem("token")).then((t=>{this.form=t.data})),this.$message.success("添加成功"),this.dialogFormVisible=!1):this.$message.success("添加失败")}))},dialogClose(){this.$refs.form.resetFields()}}},r=o,n=a(1001),c=(0,n.Z)(r,l,i,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=60.e94ce712.js.map