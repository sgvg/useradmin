"use strict";(self["webpackChunkvue_vieew"]=self["webpackChunkvue_vieew"]||[]).push([[475],{475:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("el-container",{staticClass:"container"},[t("el-header",[t("h1",[t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",width:"50px",height:"100%"}}),e._v(" 文章后台管理系统 ")]),t("i",{staticClass:"welcome"},[e._v("欢迎 "),t("i",{staticClass:"color"},[e._v(e._s(e.username))])]),t("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#23262E","text-color":"#fff","active-text-color":"#ffd04b",router:""}},[e.img?t("img",{staticClass:"touxiang",attrs:{src:e.img,alt:""}}):e._e(),t("el-submenu",[t("template",{slot:"title"},[e._v("个人中心")]),t("el-menu-item",{attrs:{index:"/userinfo"}},[t("i",{staticClass:"el-icon-user-solid"}),e._v("基本资料")]),t("el-menu-item",{attrs:{index:"/updatatou"}},[t("i",{staticClass:"el-icon-camera-solid"}),e._v("更换头像")]),t("el-menu-item",{attrs:{index:"/updatepassword"}},[t("i",{staticClass:"el-icon-key"}),e._v("重置密码")])],2),t("el-menu-item",{on:{click:e.logOut}},[t("i",{staticClass:"el-icon-switch-button"}),e._v("退出")])],1)],1),t("el-container",[t("el-aside",{attrs:{width:"200px"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{open:e.handleOpen,close:e.handleClose}},[t("el-menu-item",{attrs:{index:"/home"}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("文章管理")])]),t("el-menu-item-group",[t("el-menu-item",{attrs:{index:"/fenlei"}},[e._v("文章分类")]),t("el-menu-item",{attrs:{index:"/list"}},[e._v("文章管理")])],1)],2),t("el-submenu",{attrs:{index:"3"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("个人中心")])]),t("el-menu-item-group",[t("el-menu-item",{attrs:{index:"/userInfo"}},[e._v("基本资料")]),t("el-menu-item",{attrs:{index:"/updatatou"}},[e._v("更换头像")]),t("el-menu-item",{attrs:{index:"/updatepassword"}},[e._v("重置密码")])],1)],2)],1)],1),t("el-container",[t("el-main",[t("router-view")],1),t("el-footer",[e._v("Footer")])],1)],1)],1)},a=[],l=(i(7658),{data(){return{username:localStorage.getItem("token")}},methods:{logOut(){this.$store.commit("UpdataToken",""),this.$store.commit("Updatuserinfo",""),localStorage.removeItem("token"),localStorage.removeItem("userinfo"),this.$router.push("/login")}}}),o=l,n=i(1001),r=(0,n.Z)(o,s,a,!1,null,"038f100b",null),c=r.exports}}]);
//# sourceMappingURL=475.eba8e9a6.js.map