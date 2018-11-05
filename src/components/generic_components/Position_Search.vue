<template>
  <div>
    <div class="top-footer">
      <!--<input type="search" placeholder="search" v-model.trim="condition" @keydown.enter="searchData">-->
      <!--<input type="button" value="Search" @click="searchData">-->


      <div class="search-box">
        <!--搜索-->

        <div><a href="">
          <div class="search-type text-center">全文

          </div>
        </a></div>
        <div href="" class=""></div>
        <!--输入框-->
        <div class="input" ><input type="text" placeholder="请输入关键字" v-model.trim="condition" @keydown.enter="searchData"></div>
        <!--地点-->
        <div><a href="">
          <div class="address">苏州
            <div id="add"></div>
          </div>
        </a></div>

        <!--搜索按钮-->
        <div><a href="javascript:void (0)">
          <div class="btn-box">
            <div class="btn" value="Search" @click="searchData"></div>
          </div>
        </a></div>

      </div>
    </div>
    <!--条件组建-->
    <Searchitem :list="list" @getlist="getnewlist" click="getPageSize"> </Searchitem>
    <Sort></Sort>

    <div >
      <div  class="information" v-for="job in position_list" id="job.pid" :key="job.pid">
        <div class="div3">
          <div class="div1" id="good">
            <router-link :to="'/position/'+job.cid">
              <a href="#" class="new_a"  v-text="job.position">1111</a>
            </router-link>
            <span class="span1" v-text="job.pub_date">2222</span>
          </div>

          <div class="div2">
            <span v-text="job.salary">salary</span>
            <span class="span1" v-text="job.exp">333</span>/
            <span v-text="job.edu">edu</span>
          </div>
        </div>
        <div class="div4">
          <div class="div5">
            <router-link :to="'/company/'+job.pid">
              <a href="#" id="job.cid" v-text="job.company" :to="{params:{com_id: job.cid}}">444444</a>
            </router-link>

            <div class="last">
            </div>
          </div>
          <div class="div6">
            <span v-text="job.com_lal">5555555</span>
          </div>
        </div>
        <div class="dd">
        </div>
      </div>
      <div id="button_page">
        <PutPage  :count="pagesize" @indexclick="getIndex" v-show="pagesize>1"></PutPage>
      </div>
      </div>


    <!--<page  :count="10" @indexclick="getIndex" v-show="pagesize>1"></page>-->
  </div>

</template>


<script>
  import axios from 'axios'
  import PutPage from '../generic_components/PutPage'
  import Searchitem from '../generic_components/SearchItem'
  import Sort from '../generic_components/Sort'
  import vm from '../../../static/js/event.js'
  export default {
    name: 'position',
    props:['islogin'],
    data: function () {
      return {
        condition: '',
        pageindex: 1,
        list: [],
        number:20,
        pagesize: 0,
        new_list:[],
        position_list:[]
      }
    },

    components:{
      PutPage,Searchitem,Sort
    },

    mounted: function () {
      this.getData();
      this.getPageSize();
    },

    methods: {
      getnewlist(msg){
        this.position_list=[];
        this.new_list=msg;
        for(let i=(this.pageindex-1)*this.pagesize;i<=this.number*this.pageindex;i++){
          if(this.new_list[i]){
            this.position_list.push(this.new_list[i])
          }
          else {
            break;
          }
        }

        this.getPageSize();
        console.log('position_list:',this.new_list)
      },

      getData: function () {
        var vm = this;
          axios.get('http://localhost:8000/position/getpositionsbycon/' + vm.pageindex + '/' + vm.condition + '/')
            .then(function (response) {
              vm.list = eval('('+response.data+")");
              //console.log(vm.list)
              vm.position_list=vm.list
            })
            .catch(function (error) {
              console.log(error)
            })
      },

      getPageSize: function () {

        var vm = this;
        if(this.new_list.length>0){
          vm.pagesize=Math.ceil(vm.new_list.length/20);
        }
        else {
          axios.get('http://localhost:8000/position/getPage/' + vm.condition + '/')
            .then(function (response) {
              vm.pagesize = Math.ceil(response.data.acount / 20);
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },

      searchData: function () {
        this.pageindex = 1;
        this.getData();
        this.getPageSize();
      },

      getIndex: function (i) {
        if(this.new_list.length>0){
          this.pageindex = i;
          console.log('pageindex',this.pageindex);
          this.position_list=[];
          for(let i=(this.pageindex-1)*20;i<=this.number*this.pageindex;i++){
            if(this.new_list[i]){
              this.position_list.push(this.new_list[i])
            }
            else{
              break;
            }
          }
          console.log(this.position_list)

        }
        else {
          this.pageindex = i;
          this.getData();
          console.log('1111')
        }
      }

    }
  }
</script>

<style scoped>
  /*搜索框*/
  div.top-footer{

    margin-top: 20px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 5px;
    width: 100%;
    /*height: 50px;*/
    /*background-color: #F7F9FA;*/

  }

  div.top-footer div.search-box{
    overflow: hidden;
    /*position: relative;*/
    right: 330px;
    /*margin-left:10px;*/
    width: 700px;
    margin: 0 auto;
    /*height: 100%;*/
    box-shadow: 0px 0px 5px #989898;
    /*background-color: red;*/
    /*background-color: #FF6600;*/
  }

  .search-box>div{

    float: left;
    width: 80px;
    text-align: center;
    line-height: 46px;
    box-sizing: border-box;
    box-shadow: 0px 0px 1px #989898;
    font-size: 16px;



  }

  .search-box>div>a{
    color: black;
  }
  .search-box div:first-child:hover>div{

    background-image: url("../../../static/images/svgs/fold.svg");

  }
  .search-box div:first-child:hover{
    background-color: #c0c0c0;
  }
  .search-box div:first-child:hover+div{
    display: block;


  }
  div.top-footer div>div.search-type:hover{


  }
  .search-type>div{

    float: right;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    background-size: cover;
    background-image: url("../../../static/images/svgs/unfold.svg");
    position: relative;
    opacity: 0.5;
    right: 10px;
    top: 11px;
    border: none;

  }

  .hidden-search-type{
    display: none;
    position: absolute;
    width: 78px;
    height: 46px;
    bottom: 112px;


  }
  .hidden-search-type:hover{
    display: block;
    background-color: #c0c0c0;
  }


  div.top-footer div>div.search-type:hover{
    /*color: grey;*/
    /*background-color: #2bffe7;*/


  }

  div.top-footer div>div.input{
    padding-left: 10px;
    text-align: left;
    width: 460px;

  }
  div.top-footer div>div.input>input{
    width: 400px;
    height: 35px;
    border: none;
    outline: none;
    font-size: 16px;
    background-color: #F7F9FA;

  }
  #add{
    float: right;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    background-size: cover;
    background-image: url("../../../static/images/svgs/add.svg");
    position: relative;
    opacity: 0.5;
    right: 10px;
    top: 11px;
    border: none;
  }
  div.top-footer div>div.address{
    float: right;
    /*position: relative;*/
    /*left: -160px;*/

  }
  div.top-footer div>div.address:hover{
    /*color: grey;*/
    /*background-color: #2bffe7;*/
  }
  .search-box div:nth-child(4):active #add{

    animation: add 1s;
    animation-fill-mode: forwards;
  }

  @keyframes add {
    /*旋转*/
    /*0%{ transform:rotate(180deg)}*/
    100%{
      transform: rotate(180deg);}

  }

  .search-box div:nth-child(5) div.btn{
    /*background-color: yellow;*/

    float: right;

    box-sizing: border-box;
    width: 80px;
    height: 46px;
    background-image: url("../../../static/images/svgs/fangdajing.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 15px 0px;
    opacity: 0.5;
    border: none;
  }

  .search-box div:nth-child(5):hover{
    /*background-color: #2bffe7;*/

  }
  .btn-box{

    margin-right: 0px;

    /*background-color: gray;*/

  }
  .top-footer{
    padding-top: 20px;
    /*background-color: rgb(252, 254, 255);*/

  }
  div.top-footer div#hot-search{
    margin: 10px auto;
    margin-left: 340px;
    color: gray;
    font-size: 14px;
    text-align: left;
  }
  div.top-footer div#hot-search a{
    color: gray;
    margin-right: 10px;
  }
  div.top-footer div#hot-search label{
    margin-right: 15px;
  }
  div.top-footer div#hot-search a:hover{

    color: red;
  }
  #button_page{
    width: 962px;
    margin-left: 130px;
    text-align: center;
  }



</style>
