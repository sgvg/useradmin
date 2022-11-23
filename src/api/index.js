import reques from "@/utils/request.js"
import reqpost from "@/utils/requpost.js"

//获取文章分类
export  function fenlei(username){
    return reques({
        url:'/fenlei',
        method:'get',
        params:{
            username
        }
        
    })
        
    
}


//删除文章分类
export function delfenlei(data){
    return reques({
        url:'/del',
        method:'get',
        params:{
            _id:data
        }
    })
}


//添加文章分类
export function addfeilei({cate_name,cate_alias,username}){
    return reques({
        url:'/add',
        method:'get',
        params:{
            
            cate_name,
            cate_alias,
            username
        }
    })
}

//修改文章分类
export function editfenlei({_id,cate_name,cate_alias}){
    return reques({
        url:'/updata',
        method:'get',
        params:{
            _id,
            cate_name,
            cate_alias
        }
    })
}


//查询文章列表  （分页）
export function findList({cate_name,state,pagenum,pagesize,username}){
    return reques({
        url:'/findlist',
        method:'get',
        params:{
            cate_name,
            state,
            pagenum,
            pagesize,
            username
        }
        
    })
}


//发布文章或存为草稿
export function addArttcle(article){
    return reqpost({
        url:'/api/addArttcle',
        method:'post',
        data:article
    })
}

//删除文章
export function delArttcle(data){
    return reques({
        url:'/delArttcle',
        method:'get',
        params:{
            _id:data
        }
    })
}


//查询文章详情(只查询一个)
export function findArttcleDaitl(data){
    return reques({
        url:'/findArttcleDaitl',
        method:'get',
        params:{
            _id:data
        }
    })
}

//条件查询(筛选文章)
/* export function findList_Bykeys({cate_name,state}){
    return request({
        url:'/findArttcleDaitl',
        method:'get',
        params:{
            cate_name,
             state
        }
    })
}
 */

//注册
export function Rester({username,password,email}){
    return reqpost({
        url:'/api/rester',
        method:'post',
        data:{
            username,
            password,
            email
        }
    })
}


//登录
export function login({username,password}){
    return reqpost({
        url:'/api/login',
        method:'post',
        data:{
            username,
            password
            
        }
    })
}

//获取用户信息
export function getUserinfo(username){
    return reques({
        url:'/findUserinfo',
        method:'get',
        params:{
            username
        }
    })
}



//修改用户信息（目前只修改邮箱）
export function updateUserinfo({username,email}){
    return reques({
        url:'/updateUser',
        method:'get',
        params:{
            username,
            email
        }
    })
}

//修改密码
export function updatePassword({username,old_pwd,new_pwd}){
    return reqpost({
        url:'/api/updatePassword',
        method:'post',
        data:{
            username,
            old_pwd,
            new_pwd
        }
    })
}

//修改头像
export function upTou(username,img){
    return reques({
        url:'/updateTou',
        method:'get',
        params:{
            username,
            img
        }
    })
}