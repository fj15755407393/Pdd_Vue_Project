<template>
  <div class="container">
    <div class="top "><Nav ></Nav></div>
    <div class="main col-md-12">
      <div class="main-left  col-md-offset-1 col-md-3">
        <ul class="list-group">
          <li class="list-group-item">
            <router-link to="/center/base/">基本信息</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/center/resume/">简历中心</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="">我的收藏</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="">我的申请</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="">我的申请</router-link>
          </li>

        </ul>
      </div>
      <div class="main-right   col-md-7">
        <div class="col-md-1"></div>
        <!--<BaseMessage></BaseMessage>-->
      <router-view></router-view>
      </div>
    </div>




    <Foot class="col-md-12"></Foot>
  </div>

</template>

<script>
  // import UserCenter from '@/components/generic_components/UserCenter'

  import  Nav from  '../components/generic_components/Nav'
  import  Foot from './generic_components/Foot'
  import  BaseMessage from './generic_components/BaseMessage'
export default {
  name: 'center',
  data () {
    return {
      msg: 'Welcome to Your  App  Center!'
    }
  },
  components:{
    // UserCenter
    Nav,Foot,BaseMessage
  },child:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .main{
    height: 100%;
    margin: auto;
  }
  ul li {
    list-style: none;
  }

  .list-group {
    overflow: hidden;
    width: 200px;
    font-size: 1em;
    margin-left: 40px;
    margin-top: 60px;
  }

  .col-md-6 {
    font-size: 1.2em;
    margin-top: 20px;
  }

  .col-md-8 {
    margin-top: 50px;
  }

  .ef {
    margin-left: -30px;
  }

  i {
    color: red;
  }

  .list-group-item:hover {
    font-weight: bold;
    color: #ff6000;
    background-color: #fff;
    border: 1px solid #eee;
    border-right-color: #fff;
    border-left: 2px solid #ff6000;
    font-size: 1.3em;
  }

  .bli {
    width: 1110px;
    height: 500px;
    /*background-image: url("../../../static/images/bg.png");*/
  }
  .footer{
    padding: 0;
  }
</style>
