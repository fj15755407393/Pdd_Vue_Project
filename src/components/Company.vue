<template>
  <!--放入自己的模板-->
  <div class="container">


    <div class="header">
      <div class="h1">
        <div class="col-md-1"><a href="">logo</a></div>
        <div class="col-md-1">image</div>
        <div class="col-md-7"></div>
        <div class="col-md-1 text-right login"><a href="">登录</a></div>
        <div class="col-md-1 text-center regist">|</div>

        <div class="col-md-1 text-left"><a href="">注册</a></div>


      </div>
      <div class="h2">
        <!--导航-->
        <div class="col-md-1 col-md-offset-4"><a href="http://localhost:63342/pdd/pdd/index.html">首页</a></div>
        <div class="col-md-1"><a href="">公司</a></div>
        <div class="col-md-1"><a href="">校园</a></div>
        <div class="col-md-1"><a href="">论坛</a></div>
        <div class="col-md-1"></div>

      </div>

    </div>

    <!--公司的信息-->
    <Company_Base_Top :company="company"></Company_Base_Top>

    <div class="nav-item">
      <ul class="nav nav-tabs">
        <li id="tab1" role="presentation" class="active" @click.stop="changeTab"><a href="javasctipt:void(0)" >公司主页</a></li>
        <li id="tab2" role="presentation" @click.stop="changeTab"><a href="javasctipt:void(0)">招聘职位</a></li>
        <li id="tab3" role="presentation" @click.stop="changeTab" ><a href="javasctipt:void(0)">校招职位</a></li>
      </ul>
    </div>

    <div class="main">


      <!--main-left-->
      <div class="main-left col-md-8">



        <!--条目-->
        <Company_Main :company="company":addrs="addrs" v-if="isAcitive==1"></Company_Main>
        <Positioning :cid="cid" v-else-if="isAcitive==2"></Positioning>
        <H1 :cid="cid" v-else>
          this is nothing
        </H1>
      </div>

      <div class="main-right col-md-4">

        <div class="item-line">
          <div class="intro">公司基本信息</div>
          <div class="hr">
            <hr>
          </div>
        </div>

        <ul class="base-message">
          <li class="glyphicon glyphicon-th-large" v-text="company.type">&nbsp;企业服务,金融</li>
          <li class="glyphicon glyphicon-grain" v-text="company.rongzi">&nbsp;B轮</li>
          <li class="glyphicon glyphicon-user" v-text="company.size">&nbsp;50-150人</li>
          <li class="glyphicon glyphicon-map-marker" v-text="company.addr_heade">&nbsp;上海</li>


        </ul>


        <div class="item-line il">
          <div class="intro">管理团队</div>
          <div class="hr">
            <hr>
          </div>
        </div>


        <div class="manager">
          <div class="m-header" :style="{backgroundImage: 'url('+manager.m_img+ ')'}"></div>
          <div class="m-name" v-text="manager.m_name" >金亦冶</div>
          <div class="m-position" v-text="manager.m_position">CEO</div>
          <div class="m-intro" v-text="manager.m_intro">斯坦福 EE。如果不是在创业，他应该会在印度禅修，徒行，写赞美诗。</div>
          <div class="manager-page">
            <div @click="Prev" class="prev col-md-4  "></div>

            <div @click="Next" class="next  col-md-offset-4 col-md-4"></div>

          </div>
        </div>


        <div class="item-line il">
          <div class="intro">公司标签</div>
          <div class="hr">
            <hr>
          </div>
        </div>

        <div class="labels">
          <div class="lal col-md-4 " v-for="lal in this.c_lals" v-text="lal"  :title="lal"></div>


        </div>


      </div>
    </div>
  </div>

</template>

<script>
  // import 'bootstrap/dist/css/bootstrap.min.css'
  // import 'bootstrap/dist/js/bootstrap.min'
import  axios from 'axios'
import Company_Base_Top from '@/components/generic_components/Company_Base_Top'
import Company_Main from '@/components/generic_components/Company_Main'
import Positioning from '@/components/generic_components/Positioning'

export default {
  name: 'company',
  data () {
    return {
      msg: '',
      company:{},
      cid:'',
      managers:[],
      display:0,
      addrs:['ss'],
      isAcitive:1

    }
  },
  components:{
    Company_Base_Top,Company_Main,
    Positioning
  },
  computed:{
    c_lals:function(){
      return (this.company.c_lals||'').split(',')
    },
    manager:function () {
      return this.managers[this.display]


    }
  },
  mounted:function () {
    this.getId()
    this.getCompanyById(this.cid);
    this.getManagerByid(this.cid);
    this.getAddrById(this.cid);
  },

  methods:{
    getId:function(){

      this.cid=this.$route.params.cid;
      // 获取路由参数cid
      console.log(this.cid);
    },
    //根据岗位里的cid查找公司
    getCompanyById: function (cid) {

      let vm=this;

      axios.get('http://127.0.0.1:8000/company/getcompanybyid/'+cid).then(function (reponse) {
        // console.log( typeof reponse.data );
        vm.company =eval(reponse.data).fields;




      }).catch(function (error) {
        console.log('getCompanyById go wrong please try again or check your code !');

      })

    },
    getManagerByid:function (cid) {
      let vm=this;
      axios.get('http://127.0.0.1:8000/user/getmanagerbyid/'+cid).then(function (response) {

        vm.managers= response.data;
        console.log(vm.managers);


      }).catch(function (error) {
        console.log(error);

      })

    },
    getAddrById:function(cid){
      let vm=this;
      axios.get('http://127.0.0.1:8000/company/getaddrbyid/'+cid).then(function (response) {

        vm.addrs= eval(response.data);
        // console.log(vm.addrs);


      }).catch(function (error) {
        console.log(error);

      })

    },
    Next:function () {
      let len=this.managers.length;
      this.display=this.display<len-1?this.display+1:len-1

    },
    Prev:function () {

      this.display=this.display>0?this.display-1 :0


    }
    ,
    // 切换
    changeTab:function (event) {
      let lis =document.querySelectorAll('ul.nav-tabs li');

      for(let li of lis){
        li.classList.remove('active')

      }
      let id=event.target.parentElement.getAttribute('id')
      if(id=='tab1')
      this.isAcitive=1
      else if(id=='tab2')
        this.isAcitive=2
      else
        this.isAcitive=3
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/company.css";
  .manager .manager-page{
    margin-top: 20px;
    /*background-color: red;*/

    width: 30%;


  }
  .manager-page div{
    /*text-align:center;*/

    height: 15px;
    /*width: 10px;*/
    cursor:pointer ;
    box-shadow: 0px 0px 2px grey ;
  }
  .manager-page .prev{

    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../../static/images/svgs/prev.svg");

  }
  .manager-page .prev:hover{
    background-image: url("../../static/images/svgs/prev_blue.svg");
    box-shadow: 0px 0px 4px grey;
  }
  .manager-page .next{
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../../static/images/svgs/next.svg");


  }
  .manager-page .next:hover{
    background-image: url("../../static/images/svgs/next_blue.svg");
    box-shadow: 0px 0px 4px grey;
  }


</style>
