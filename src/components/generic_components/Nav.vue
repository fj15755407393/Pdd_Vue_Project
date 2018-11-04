<template>

  <!--导航栏-->
  <div class="nav">
    <div id="logo"><a href="./index.html">logo</a></div>
    <div>image</div>
    <div id="index"><a href="./index.html">首页</a></div>
    <div><router-link to="/search/">职位搜索</router-link></div>
    <div>
      <router-link to="/forum/">论坛 </router-link>
    </div>
    <div v-if="islogin" class="user"><ul>
      <li class="user-header"><router-link to="/center/" > <span class="glyphicon glyphicon-user"></span> {{islogin}}</router-link></li>
      <li> <router-link to="/center/">个人中心</router-link> </li>
      <li @click="logout">注销</li>
    </ul></div>

    <div id="login" v-if="!islogin"><router-link to="/login/" >登录</router-link></div>
    <div v-if="!islogin">|</div>
    <div id="regist" v-if="!islogin"><router-link  to="/regist/">注册</router-link></div>

    <!--放入模态框-->

  </div>
</template>

<script>
  //导航栏

export default {
  name: 'top',
  props:['islogin'],
  data () {
    return {
      msg: '这是一个Demo 的数据',

    }
  },
  mounted:function(){
    //将用户信息传给 Position组件
    this.emitToPosition();

  },
  components:{},
  methods:{
    emitToPosition:function () {
      this.$emit('getUser',this.islogin)

    },
    //注销
    logout:function () {
      this.islogin=false;
      sessionStorage.setItem('token','');
    }

  },
  watch:{
    islogin:function (newvalue,old) {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .top div.nav{
    height: 100%;
    /*overflow:;*/
  }
  .top div.nav div{
    float: left;
    line-height: 60px;
    margin: 0px 15px;
    height: 100%;
    font-size: 16px;
    box-sizing: border-box;
    color: rgba(235, 245, 221, 0.21);
    /*background-color: #ff6000;*/


  }

  div.nav div a{

    color: rgba(49, 51, 53, 0.69);
    font-size: 16px;

  }
  .top div.nav div a:hover:not(.active){

    color: #7278ff;
  }
  .top div.nav div:hover:not(.active){
    /*border-bottom: #ff6000 2px solid;*/

  }

  div.nav div  a:active{

  }
  #logo{

    margin-left: 200px;

  }
  #index{
    margin-left: 550px;
  }
  #login{
    margin-right:0px;

  }
  #regist  {

    margin-left: 0px;
  }

  .userItem{
    /*display: none;*/


  }
  div.user .user-header{
    height: 60px;
    line-height: 50px;
    display: block;
    box-shadow:none;
  }
  div.user .user-header:hover{



  }
  div.user .user-header:hover ~li{
    display: block;
  }
  .user>ul>li{
    display: none;
    padding: 5px;
    position: relative;
    /*background-color: red;*/
    /*width: 100px;*/
    text-align: center;
    cursor: pointer;
    height: 40px;
    line-height: 30px;
    box-shadow: 0 0 1px grey;
    z-index: 1000;
  }
  .user>ul li,.user>ul li a{
    color: rgba(41, 45, 48, 0.68);
  }
  .user>ul:hover >li {

    display: block;
    /*color: black;*/
  }
.user ul li:hover{
  color: blue;
  background-color: #F7F9FA;
}

</style>
