"use strict";(self["webpackChunkvue_vieew"]=self["webpackChunkvue_vieew"]||[]).push([[184],{3184:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});t(7658);var s=function(){var e=this,r=e._self._c;return r("div",[r("div",{staticClass:"reg-container"},[r("div",{staticClass:"reg-form"},[r("div",{staticClass:"reg-title"}),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("el-form-item",[r("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1),r("el-link",{attrs:{type:"info"},on:{click:function(r){return e.$router.push("/reg")}}},[e._v("去注册")])],1)],1)])])},a=[],o=t(2567),i={data(){return{form:{username:"",password:""},rule:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,10}$/,message:"1-10位大小写字母和数字",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"6-15位的非空字符",trigger:"blur"}]}}},methods:{onSubmit(){this.$refs.form.validate((e=>{if(!e)return!1;(0,o.x4)(this.form).then((e=>{200==e.data.code&&(this.$store.commit("UpdataToken",e.data.token),this.$message.success(e.data.msg),this.$router.push("/home"))}))}))}}},u=i,n=t(1001),l=(0,n.Z)(u,s,a,!1,null,"15209b18",null),m=l.exports}}]);
//# sourceMappingURL=184.5ea00a94.js.map