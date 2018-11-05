
<template>
  <!--放入自己的模板-->
  <div class="container">
    <!--头部-->
  <div class="top">

    <!--导航栏-->
    <Nav :islogin="islogin"></Nav>
    <div class="top-body">

      <!--轮播图-->
      <Viewpager></Viewpager>


    </div>


    <div class="top-footer">

      <!--搜索框-->
      <SearchBox></SearchBox>
      <!--热门搜索-->
      <div id="hot-search">
        <label for="hot-search">热门搜索:</label>
        <a href="#">销售</a>
        <a href="#">运营</a>
        <a href="#">java</a>
        <a href="#">全栈工程师</a>
        <a href="#">采购</a>
        <a href="#">投资经理</a>
      </div>
    </div>

    <!--主体-->
    <div class="main">
      <!--岗位标签+岗位推送-->
      <div class="main-top">
        <!--岗位标签-->
        <div class="main-top-left">
          <Lals></Lals>

        </div>
        <!--岗位推送-->
        <div class="main-top-right">
          <a href="#">
            <div class="top-right-image"></div>
          </a>


        </div>
      </div>
      <div class="main-body">
        <!--热门职位+最新职位标签分类-->
        <div class="main-hot-positions">
          <a href="javascript:void(0)">
            <div class="hot-label " v-bind:class="{ acitive: isPosActive } "@click="changePos" >热门职位</div>
          </a>
          <a href="javascript:void(0)">
            <div class="latest-label" v-bind:class="{ acitive:!isPosActive}" @click="changePos">最新职位</div>
          </a>


        </div>
        <!--岗位总栏位-->
        <div class="main-body-positions">
          <Positions></Positions>

        </div>
        <!--热门公司-->
        <div class="hot-company">

          <div class="main-hot-company">
            <a href="#">
              <div class="hot-label" v-bind:class="{acitive:isComActive}" @click="changeCom">热门公司</div>
            </a>


          </div>
          <!--公司总栏位-->
          <div class="main-body-companies">
            <Companys></Companys>

          </div>


        </div>
      </div>
    </div>
    <!--底部-->
    <Foot></Foot>




  </div>

  </div>




</template>

<script>


  import Nav from '@/components/generic_components/Nav'
  import  Foot from './generic_components/Foot'
  import Viewpager from '@/components/generic_components/Viewpager'
  import SearchBox from '@/components/generic_components/SearchBox'
  import Lals from '@/components/generic_components/Lals'
  import Positions from '@/components/generic_components/Positions'
  import Companys from '@/components/generic_components/Companys'
  import axios from 'axios'

  export default {
    name: 'index',
    data() {
      return {
        msg: '',
        isPosActive:true,
        isComActive:true,
        islogin:false
      }
    },
    mounted:function(){
        this.isLogin()
    },
    components: {
      Nav,Viewpager,SearchBox,Lals,Positions,Companys,
      Foot


    },

    methods:{

      changePos:function () {
        this.isPosActive=!this.isPosActive;

      },
      changeCom:function () {
        this.isComActive=!this.isComActive;

      },
      isLogin: function () {
        var token=sessionStorage.getItem('token');
        console.log( token);
        if(token){
          let vm=this
          axios.post('http://127.0.0.1:8000/user/verify/',
            {
              token:token
            }

          ).then(function (response) {
            let res=response.data
            console.log(res);
            vm.islogin= res.user


          }).catch(function (error) {
            vm.islogin= false;
            console.log(error);

          })
        }
        // axios.get()
      },

    },
    computed:{

    },
    watch:{
    islogin:function () {
     return this.isLogin

   }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  @import "../../static/css/index.css";

  /*@import "../../static/css/bootstrap.css";*/
  /*@import "../../static/css/bootstrap-theme.css";*/
  /*@import "../../static/js/jquery-3.3.1.js";*/
  /*@import "../../static/js/bootstrap.js";*/

  /*@import "../../static/css/index.css";*/






  .acitive{
    border-bottom: #2C2F39 2px solid;

  }


</style>
